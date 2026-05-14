import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Clé API Brevo manquante' }, { status: 500 });
  }

  try {
    const body = await request.json();

    const response = await fetch('https://api.brevo.com/v3/emailCampaigns', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || 'Erreur lors de la création de la campagne' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}
