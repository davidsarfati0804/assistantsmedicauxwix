import { NextResponse } from 'next/server';

// Retired: partial form contents must never be emailed before submission.
// Submitted requests are stored and notified through Netlify Forms.
export async function POST() {
  return NextResponse.json({ error: 'Les alertes avant validation sont désactivées.' }, { status: 410 });
}
