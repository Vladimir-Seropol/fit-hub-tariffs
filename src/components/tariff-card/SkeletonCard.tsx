export default function SkeletonCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        relative
        w-full
        min-h-[150px] xl:min-h-[240px]
        rounded-2xl xl:rounded-[40px]
        border-2 border-neutral-700
        bg-neutral-800/50
        overflow-hidden
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-neutral-800/80" />

      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative opacity-0 p-5">
        <div className="h-4 w-24 mb-3"></div>
        <div className="h-8 w-20 mb-2"></div>
        <div className="h-3 w-16 mb-3"></div>
        <div className="h-3 w-full"></div>
      </div>
    </div>
  );
}