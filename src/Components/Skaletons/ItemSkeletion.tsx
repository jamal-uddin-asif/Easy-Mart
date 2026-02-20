export default function ItemSkeleton() {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm animate-pulse">
      <div className="relative h-45 bg-slate-200" />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="h-3 w-16 bg-slate-200 rounded" />

          <div className="h-3 w-10 bg-slate-200 rounded" />
        </div>

        <div className="h-5 w-3/4 bg-slate-200 rounded mb-3" />

        <div className="space-y-2 mb-4">
          <div className="h-3 w-full bg-slate-200 rounded" />
          <div className="h-3 w-5/6 bg-slate-200 rounded" />
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="h-6 w-16 bg-slate-200 rounded" />

          <div className="h-9 w-24 bg-slate-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
