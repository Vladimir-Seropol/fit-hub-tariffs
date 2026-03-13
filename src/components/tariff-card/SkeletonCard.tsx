export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-neutral-700 p-5 animate-pulse bg-[#1e2426]">
      <div className="h-4 w-24 bg-neutral-700 rounded mb-3"></div>

      <div className="h-8 w-20 bg-neutral-700 rounded mb-2"></div>

      <div className="h-3 w-16 bg-neutral-700 rounded mb-3"></div>

      <div className="h-3 w-full bg-neutral-700 rounded"></div>
    </div>
  );
}
