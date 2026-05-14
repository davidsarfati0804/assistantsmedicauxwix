import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Clé API Brevo manquante' }, { status: 500 });
  }

  const { id } = await params;

  try {
    const response = await fetch(
      `https://api.brevo.com/v3/emailCampaigns/${id}/sendNow`,
      {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Erreur lors de l'envoi de la campagne" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, message: 'Campagne envoyée avec succès' });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}
