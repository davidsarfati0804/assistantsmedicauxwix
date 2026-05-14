import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'Clé API Brevo manquante' }, { status: 500 });

  const { id } = await params;
  const body = await request.json();

  try {
    const response = await fetch(`https://api.brevo.com/v3/emailCampaigns/${id}`, {
      method: 'PUT',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return NextResponse.json({ error: err.message || 'Erreur Brevo' }, { status: response.status });
    }
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Erreur inconnue' }, { status: 500 });
  }
}

export async function GET(
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
      `https://api.brevo.com/v3/emailCampaigns/${id}`,
      {
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || 'Erreur lors de la récupération de la campagne' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur inconnue' },
      { status: 500 }
    );
  }
}
