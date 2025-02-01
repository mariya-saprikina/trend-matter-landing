export default function CtaCard({text, index}: {text: string; index: number}) {
  return (
    <div
      className={`flex items-center justify-center bg-white max-w-[240px] h-14 shadow-lg text-center rounded-md text-dark_grey font-semibold ${Math.floor(index / 5) % 2 === 1 ? 'translate-x-1/4' : ''}`}
    >
      <div className="flex items-center justify-center gap-2">
        <span>🌟</span> {/* Replace with your icon */}
        <p className="text-style-body2 font-light">{text}</p>
      </div>
    </div>
  );
}
