import Container from "../Shared/Container";


export default function ItemDetailsSkeleton() {
  return (
    <div className="mt-20 min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
      <Container>
        <nav className="mb-8 flex gap-2 items-center">
          <div className="h-4 w-12 bg-slate-200 rounded" />
          <div className="h-4 w-4 bg-slate-100 rounded" />
          <div className="h-4 w-20 bg-slate-200 rounded" />
          <div className="h-4 w-4 bg-slate-100 rounded" />
          <div className="h-4 w-32 bg-slate-200 rounded" />
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-square rounded-2xl bg-slate-200 border border-slate-100" />

          <div className="flex flex-col">
            <div className="h-4 w-24 bg-slate-200 rounded mb-4" />

            <div className="h-10 w-3/4 bg-slate-200 rounded mb-2 sm:h-12" />
            <div className="h-10 w-1/2 bg-slate-200 rounded mb-6 sm:h-12" />
            <div className="flex items-center gap-4 mb-8">
              <div className="h-5 w-24 bg-slate-200 rounded" />
              <div className="h-5 w-16 bg-slate-200 rounded" />
            </div>

            <div className="border-t border-b border-slate-100 py-6 mb-6">
              <div className="h-8 w-32 bg-slate-200 rounded" />
            </div>

            <div className="space-y-3 mb-8">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-5/6 bg-slate-200 rounded" />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-slate-200 rounded-full" />
              <div className="h-4 w-40 bg-slate-200 rounded" />
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="h-14 flex-1 bg-slate-200 rounded-xl" />
              <div className="h-14 flex-1 bg-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
