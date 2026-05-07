interface ResumeBannerProps {
  children: React.ReactNode;
}

export default function ResumeBanner({ children }: ResumeBannerProps) {
  return (
    <div className="max-w-[900px] mx-auto px-6 pt-10">
      <div className="bg-[#f5f8ff] border-l-4 border-[#093e98] rounded-r-xl px-8 py-6">
        <p className="text-[12px] uppercase tracking-wider text-[#093e98] font-semibold mb-3">En résumé</p>
        <p className="text-[15px] text-gray-700 leading-[1.75]">{children}</p>
      </div>
    </div>
  );
}
