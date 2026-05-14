'use client';
import { useState } from 'react';
import { BrevoSender, BrevoList } from '@/types/brevo';
import EmailPreview from './EmailPreview';

interface CreateCampaignFormProps {
  senders: BrevoSender[];
  lists: BrevoList[];
  onCreated: () => void;
}

interface FormState {
  name: string;
  subject: string;
  senderId: string;
  listId: string;
  htmlContent: string;
}

export default function CreateCampaignForm({ senders, lists, onCreated }: CreateCampaignFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    subject: '',
    senderId: senders[0]?.id?.toString() ?? '',
    listId: lists[0]?.id?.toString() ?? '',
    htmlContent: '',
  });
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handlePreview() {
    if (!form.htmlContent.trim()) {
      setError("Le contenu HTML est vide. Entrez du HTML pour afficher l'aperçu.");
      return;
    }
    setError(null);
    setPreviewHtml(form.htmlContent);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.name || !form.subject || !form.senderId || !form.listId || !form.htmlContent) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const selectedSender = senders.find((s) => s.id.toString() === form.senderId);
    if (!selectedSender) {
      setError('Expéditeur introuvable.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name,
        subject: form.subject,
        sender: {
          name: selectedSender.name,
          email: selectedSender.email,
        },
        recipients: {
          listIds: [parseInt(form.listId, 10)],
        },
        htmlContent: form.htmlContent,
      };

      const res = await fetch('/api/brevo/campaigns/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de la création');
      }

      setSuccess(true);
      setForm({
        name: '',
        subject: '',
        senderId: senders[0]?.id?.toString() ?? '',
        listId: lists[0]?.id?.toString() ?? '',
        htmlContent: '',
      });
      setPreviewHtml(null);
      onCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
            Brouillon créé avec succès. Il apparaît maintenant dans la liste des campagnes.
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom de la campagne <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ex. : Newsletter mai 2025"
            className="w-full border border-[#e4eaf5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#093e98]/30 focus:border-[#093e98]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objet de l&apos;email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Ex. : Nouvelles actualités Mesdocs"
            className="w-full border border-[#e4eaf5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#093e98]/30 focus:border-[#093e98]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expéditeur <span className="text-red-500">*</span>
            </label>
            <select
              name="senderId"
              value={form.senderId}
              onChange={handleChange}
              className="w-full border border-[#e4eaf5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#093e98]/30 focus:border-[#093e98] bg-white"
            >
              {senders.length === 0 && (
                <option value="">Aucun expéditeur disponible</option>
              )}
              {senders.map((sender) => (
                <option key={sender.id} value={sender.id.toString()}>
                  {sender.name} &lt;{sender.email}&gt;
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Liste de contacts <span className="text-red-500">*</span>
            </label>
            <select
              name="listId"
              value={form.listId}
              onChange={handleChange}
              className="w-full border border-[#e4eaf5] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#093e98]/30 focus:border-[#093e98] bg-white"
            >
              {lists.length === 0 && (
                <option value="">Aucune liste disponible</option>
              )}
              {lists.map((list) => (
                <option key={list.id} value={list.id.toString()}>
                  {list.name} ({list.totalSubscribers} contacts)
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contenu HTML <span className="text-red-500">*</span>
          </label>
          <textarea
            name="htmlContent"
            value={form.htmlContent}
            onChange={handleChange}
            rows={12}
            placeholder="<html><body><h1>Votre email</h1></body></html>"
            className="w-full border border-[#e4eaf5] rounded-xl px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#093e98]/30 focus:border-[#093e98] resize-y"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            onClick={handlePreview}
            className="px-5 py-2.5 rounded-xl border border-[#093e98] text-[#093e98] text-sm font-medium hover:bg-[#e4eaf5] transition-colors"
          >
            Aperçu
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl bg-[#093e98] text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création...' : 'Créer le brouillon'}
          </button>
        </div>
      </form>

      {/* Aperçu */}
      {previewHtml && (
        <div className="lg:w-[640px] flex-shrink-0">
          <div className="bg-white rounded-2xl border border-[#e4eaf5] p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#093e98] mb-3">Aperçu de l&apos;email</h3>
            <EmailPreview html={previewHtml} subject={form.subject || undefined} />
          </div>
        </div>
      )}
    </div>
  );
}
