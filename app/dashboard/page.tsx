'use client';
import { useEffect, useState, useCallback } from 'react';
import { BrevoAccount, BrevoEmailCampaign, BrevoList, BrevoSender } from '@/types/brevo';
import CampaignsList from '@/components/dashboard/CampaignsList';
import CreateCampaignForm from '@/components/dashboard/CreateCampaignForm';
import EmailPreview from '@/components/dashboard/EmailPreview';

type Tab = 'campagnes' | 'creer' | 'apercu';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-8 h-8 border-4 border-[#e4eaf5] border-t-[#093e98] rounded-full animate-spin" />
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-2xl border border-[#e4eaf5] p-5 shadow-sm">
      <div className="text-2xl font-bold text-[#093e98]">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('campagnes');

  const [account, setAccount] = useState<BrevoAccount | null>(null);
  const [accountError, setAccountError] = useState<string | null>(null);

  const [campaigns, setCampaigns] = useState<BrevoEmailCampaign[]>([]);
  const [campaignsLoading, setCampaignsLoading] = useState(true);
  const [campaignsError, setCampaignsError] = useState<string | null>(null);

  const [senders, setSenders] = useState<BrevoSender[]>([]);
  const [lists, setLists] = useState<BrevoList[]>([]);

  const [totalContacts, setTotalContacts] = useState<number | null>(null);

  const [selectedCampaign, setSelectedCampaign] = useState<BrevoEmailCampaign | null>(null);
  const [sendingId, setSendingId] = useState<number | null>(null);
  const [sendMessage, setSendMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Charger le compte
  useEffect(() => {
    fetch('/api/brevo/account')
      .then((r) => r.json())
      .then((data) => {
        if (data.error) setAccountError(data.error);
        else setAccount(data);
      })
      .catch(() => setAccountError('Impossible de contacter Brevo'));
  }, []);

  // Charger le total contacts
  useEffect(() => {
    fetch('/api/brevo/lists')
      .then((r) => r.json())
      .then((data) => {
        if (data.lists) {
          setLists(data.lists);
          const total = (data.lists as BrevoList[]).reduce(
            (sum: number, l: BrevoList) => sum + (l.totalSubscribers ?? 0),
            0
          );
          setTotalContacts(total);
        }
      })
      .catch(() => {});
  }, []);

  // Charger les expéditeurs
  useEffect(() => {
    fetch('/api/brevo/senders')
      .then((r) => r.json())
      .then((data) => {
        if (data.senders) setSenders(data.senders);
      })
      .catch(() => {});
  }, []);

  // Charger les campagnes
  const loadCampaigns = useCallback(() => {
    setCampaignsLoading(true);
    setCampaignsError(null);
    fetch('/api/brevo/campaigns')
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setCampaignsError(data.error);
        } else {
          setCampaigns(data.campaigns ?? []);
        }
      })
      .catch(() => setCampaignsError('Impossible de charger les campagnes'))
      .finally(() => setCampaignsLoading(false));
  }, []);

  useEffect(() => {
    loadCampaigns();
  }, [loadCampaigns]);

  // Voir une campagne
  async function handleViewCampaign(campaign: BrevoEmailCampaign) {
    if (!campaign.htmlContent) {
      const res = await fetch(`/api/brevo/campaigns/${campaign.id}`);
      const data = await res.json();
      setSelectedCampaign(data);
    } else {
      setSelectedCampaign(campaign);
    }
    setActiveTab('apercu');
  }

  // Envoyer une campagne
  async function handleSendCampaign(campaign: BrevoEmailCampaign) {
    const confirmed = window.confirm(
      `Envoyer la campagne "${campaign.name}" maintenant ? Cette action est irréversible.`
    );
    if (!confirmed) return;

    setSendingId(campaign.id);
    setSendMessage(null);
    try {
      const res = await fetch(`/api/brevo/campaigns/${campaign.id}/send`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur lors de l\'envoi');
      setSendMessage({ type: 'success', text: `Campagne "${campaign.name}" envoyée avec succès.` });
      loadCampaigns();
    } catch (err) {
      setSendMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Erreur inconnue',
      });
    } finally {
      setSendingId(null);
    }
  }

  // Stats
  const sentCampaigns = campaigns.filter((c) => c.status === 'sent');
  const lastSent = sentCampaigns
    .filter((c) => c.sentDate)
    .sort((a, b) => new Date(b.sentDate!).getTime() - new Date(a.sentDate!).getTime())[0];

  const totalDelivered = sentCampaigns.reduce((a, c) => a + (c.statistics?.globalStats?.delivered ?? 0), 0);
  const totalUniqueOpens = sentCampaigns.reduce((a, c) => a + (c.statistics?.globalStats?.uniqueViews ?? 0), 0);
  const totalUniqueClicks = sentCampaigns.reduce((a, c) => a + (c.statistics?.globalStats?.uniqueClicks ?? 0), 0);
  const totalUnsub = sentCampaigns.reduce((a, c) => a + (c.statistics?.globalStats?.unsubscribed ?? 0), 0);
  const avgOpenRate = totalDelivered > 0 ? ((totalUniqueOpens / totalDelivered) * 100).toFixed(1) + ' %' : '—';
  const avgClickRate = totalDelivered > 0 ? ((totalUniqueClicks / totalDelivered) * 100).toFixed(1) + ' %' : '—';

  const planLabel =
    account?.plan?.[0]?.type ?? '—';

  const tabs: { id: Tab; label: string }[] = [
    { id: 'campagnes', label: 'Campagnes' },
    { id: 'creer', label: 'Créer une campagne' },
    { id: 'apercu', label: 'Aperçu email' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fc]" style={{ fontFamily: "'Work Sans', Arial, sans-serif" }}>
      {/* Header */}
      <div className="bg-[#093e98] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Dashboard Brevo — Mesdocs</h1>
              <p className="text-blue-200 text-sm mt-0.5">Outil interne de gestion des campagnes email</p>
            </div>
            {account && !accountError && (
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-sm font-medium">
                  {account.companyName || `${account.firstName} ${account.lastName}`}
                </span>
                <span className="bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-sm">
                  Plan : <strong>{planLabel}</strong>
                </span>
                {totalContacts !== null && (
                  <span className="bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-sm">
                    {totalContacts.toLocaleString('fr-FR')} contacts
                  </span>
                )}
              </div>
            )}
            {accountError && (
              <div className="bg-red-500/20 border border-red-300/30 rounded-xl px-4 py-2 text-sm text-red-100">
                {accountError}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard label="Campagnes" value={campaigns.length} />
          <StatCard label="Envoyées" value={sentCampaigns.length} />
          <StatCard label="Emails délivrés" value={totalDelivered > 0 ? totalDelivered.toLocaleString('fr-FR') : '—'} />
          <StatCard label="Taux d'ouverture" value={avgOpenRate} />
          <StatCard label="Taux de clics" value={avgClickRate} />
          <StatCard label="Désabonnements" value={totalUnsub > 0 ? totalUnsub.toLocaleString('fr-FR') : '—'} />
        </div>

        {/* Message d'envoi */}
        {sendMessage && (
          <div
            className={`rounded-xl px-4 py-3 text-sm ${
              sendMessage.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {sendMessage.text}
            <button
              onClick={() => setSendMessage(null)}
              className="ml-3 underline text-xs opacity-70 hover:opacity-100"
            >
              Fermer
            </button>
          </div>
        )}

        {/* Onglets */}
        <div className="bg-white rounded-2xl border border-[#e4eaf5] shadow-sm overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-[#e4eaf5] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#093e98] border-b-2 border-[#093e98] bg-[#f7f9fd]'
                    : 'text-gray-500 hover:text-[#093e98] hover:bg-[#f7f9fd]'
                }`}
              >
                {tab.label}
                {tab.id === 'campagnes' && campaigns.length > 0 && (
                  <span className="ml-2 bg-[#e4eaf5] text-[#093e98] text-xs rounded-full px-2 py-0.5">
                    {campaigns.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Contenu */}
          <div className="p-6">
            {/* Onglet Campagnes */}
            {activeTab === 'campagnes' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Liste des campagnes</h2>
                  <button
                    onClick={loadCampaigns}
                    className="text-sm text-[#093e98] hover:underline"
                  >
                    Actualiser
                  </button>
                </div>
                {campaignsLoading && <LoadingSpinner />}
                {campaignsError && !campaignsLoading && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                    {campaignsError}
                  </div>
                )}
                {!campaignsLoading && !campaignsError && (
                  <CampaignsList
                    campaigns={campaigns}
                    onView={handleViewCampaign}
                    onSend={handleSendCampaign}
                    sendingId={sendingId}
                  />
                )}
              </div>
            )}

            {/* Onglet Créer */}
            {activeTab === 'creer' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Créer un brouillon de campagne</h2>
                {senders.length === 0 && lists.length === 0 ? (
                  <LoadingSpinner />
                ) : (
                  <CreateCampaignForm
                    senders={senders}
                    lists={lists}
                    onCreated={() => {
                      loadCampaigns();
                      setActiveTab('campagnes');
                    }}
                  />
                )}
              </div>
            )}

            {/* Onglet Aperçu */}
            {activeTab === 'apercu' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Aperçu email</h2>
                {selectedCampaign ? (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-medium text-gray-700">{selectedCampaign.name}</span>
                      <button
                        onClick={() => setSelectedCampaign(null)}
                        className="text-xs text-gray-400 hover:text-gray-600 underline"
                      >
                        Fermer
                      </button>
                    </div>
                    {selectedCampaign.htmlContent ? (
                      <EmailPreview
                        html={selectedCampaign.htmlContent}
                        subject={selectedCampaign.subject}
                      />
                    ) : (
                      <div className="text-gray-400 text-sm">Aucun contenu HTML disponible pour cette campagne.</div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <div className="text-4xl mb-3">👁️</div>
                    <p className="text-lg font-medium">Aucun email sélectionné</p>
                    <p className="text-sm mt-1">
                      Cliquez sur &quot;Voir&quot; dans la liste des campagnes, ou utilisez le bouton
                      &quot;Aperçu&quot; dans le formulaire de création.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
