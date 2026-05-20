'use client';
import { BrevoEmailCampaign } from '@/types/brevo';

interface CampaignsListProps {
  campaigns: BrevoEmailCampaign[];
  onView: (campaign: BrevoEmailCampaign) => void;
  onSend: (campaign: BrevoEmailCampaign) => void;
  sendingId: number | null;
}

const STATUS_LABELS: Record<string, string> = {
  draft: 'Brouillon',
  queued: 'En file',
  sent: 'Envoyée',
  archive: 'Archivée',
  scheduled: 'Planifiée',
  test: 'Test',
  in_process: 'En cours',
  suspended: 'Suspendue',
};

const STATUS_CLASSES: Record<string, string> = {
  draft: 'bg-gray-100 text-gray-600',
  queued: 'bg-orange-100 text-orange-700',
  sent: 'bg-green-100 text-green-700',
  archive: 'bg-gray-100 text-gray-500',
  scheduled: 'bg-blue-100 text-blue-700',
  test: 'bg-purple-100 text-purple-700',
  in_process: 'bg-yellow-100 text-yellow-700',
  suspended: 'bg-red-100 text-red-700',
};

function formatDate(dateStr?: string): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatRate(value?: number): string {
  if (value === undefined || value === null) return '—';
  return `${(value * 100).toFixed(1)} %`;
}

export default function CampaignsList({ campaigns, onView, onSend, sendingId }: CampaignsListProps) {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-4xl mb-3">📭</div>
        <p className="text-lg font-medium">Aucune campagne trouvée</p>
        <p className="text-sm mt-1">Créez votre première campagne ci-dessous</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[#e4eaf5]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#e4eaf5] text-[#093e98]">
            <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Campagne</th>
            <th className="text-left px-4 py-3 font-semibold">Statut</th>
            <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Date d&apos;envoi</th>
            <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Ouvertures</th>
            <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Clics</th>
            <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Désabonnements</th>
            <th className="text-right px-4 py-3 font-semibold rounded-tr-xl">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, idx) => {
            const openRate =
              campaign.statistics?.globalStats?.uniqueViews !== undefined &&
              campaign.statistics?.globalStats?.sent
                ? campaign.statistics.globalStats.uniqueViews /
                  campaign.statistics.globalStats.sent
                : campaign.openRate;
            const clickRate =
              campaign.statistics?.globalStats?.uniqueClicks !== undefined &&
              campaign.statistics?.globalStats?.sent
                ? campaign.statistics.globalStats.uniqueClicks /
                  campaign.statistics.globalStats.sent
                : campaign.clickRate;

            return (
              <tr
                key={campaign.id}
                className={`border-t border-[#e4eaf5] hover:bg-[#f7f9fd] transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#fafbff]'
                }`}
              >
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-800 truncate max-w-[180px]">
                    {campaign.name}
                  </div>
                  <div className="text-xs text-gray-400 truncate max-w-[180px] mt-0.5">
                    {campaign.subject}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                      STATUS_CLASSES[campaign.status] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {STATUS_LABELS[campaign.status] ?? campaign.status}
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell text-gray-600">
                  {formatDate(campaign.sentDate || campaign.scheduledAt)}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell text-gray-600">
                  {formatRate(openRate)}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell text-gray-600">
                  {formatRate(clickRate)}
                </td>
                <td className="px-4 py-3 hidden lg:table-cell text-gray-600">
                  {campaign.status === 'sent'
                    ? (campaign.statistics?.globalStats?.unsubscribed ?? 0).toLocaleString('fr-FR')
                    : '—'}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onView(campaign)}
                      className="px-3 py-1.5 rounded-lg bg-[#e4eaf5] text-[#093e98] text-xs font-medium hover:bg-[#d0daf0] transition-colors"
                    >
                      Voir
                    </button>
                    {campaign.status === 'draft' && (
                      <button
                        onClick={() => onSend(campaign)}
                        disabled={sendingId === campaign.id}
                        className="px-3 py-1.5 rounded-lg bg-[#093e98] text-white text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sendingId === campaign.id ? 'Envoi...' : 'Envoyer'}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
