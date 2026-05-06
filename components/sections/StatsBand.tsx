export default function StatsBand({ text }: { text: string }) {
  return (
    <section className="bg-[#093e98] py-14 px-6 text-center">
      <h2 className="text-[32px] font-light text-white max-md:text-[22px]">{text}</h2>
    </section>
  );
}
