import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Mesdocs Groupement d'Employeurs – Assistants Médicaux";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#093e98',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '12px 24px',
            marginBottom: '32px',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          Association loi 1901 · Référencé par l'Assurance Maladie
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '24px',
            maxWidth: '820px',
          }}
        >
          Mesdocs Groupement d'Employeurs
        </div>

        <div
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: '760px',
            marginBottom: '48px',
          }}
        >
          Mise à disposition d'assistants médicaux pour médecins libéraux. CPAM finance jusqu'à 38 000 €/an.
        </div>

        <div
          style={{
            background: '#ffffff',
            color: '#093e98',
            borderRadius: '12px',
            padding: '16px 36px',
            fontSize: '22px',
            fontWeight: 700,
          }}
        >
          assistants-medicaux.com
        </div>
      </div>
    ),
    { ...size }
  );
}
