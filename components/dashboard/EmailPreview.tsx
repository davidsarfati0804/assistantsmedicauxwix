'use client';
import { useState } from 'react';

interface EmailPreviewProps {
  html: string;
  subject?: string;
}

export default function EmailPreview({ html, subject }: EmailPreviewProps) {
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop');

  const width = mode === 'desktop' ? 600 : 375;

  return (
    <div className="flex flex-col gap-3">
      {subject && (
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">Objet :</span> {subject}
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMode('desktop')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            mode === 'desktop'
              ? 'bg-[#093e98] text-white'
              : 'bg-[#e4eaf5] text-[#093e98] hover:bg-[#d0daf0]'
          }`}
        >
          Bureau
        </button>
        <button
          onClick={() => setMode('mobile')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            mode === 'mobile'
              ? 'bg-[#093e98] text-white'
              : 'bg-[#e4eaf5] text-[#093e98] hover:bg-[#d0daf0]'
          }`}
        >
          Mobile
        </button>
        <span className="text-xs text-gray-400 ml-2">{width}px</span>
      </div>
      <div className="flex justify-center bg-gray-100 rounded-xl p-4 overflow-auto">
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          style={{ width: `${width}px`, minHeight: 400 }}
        >
          <iframe
            srcDoc={html}
            title="Aperçu email"
            style={{ width: '100%', height: 600, border: 'none', display: 'block' }}
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}
