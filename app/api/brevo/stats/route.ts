import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'API key manquante' }, { status: 500 });

  const res = await fetch('https://api.brevo.com/v3/emailCampaigns?limit=50&offset=0&sort=desc', {
    headers: { 'api-key': apiKey, 'accept': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
