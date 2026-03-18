export default function Loading() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 xl:px-10">
      <div className="hero-surface p-6 md:p-8 xl:p-10">
        <div className="grid gap-8 xl:grid-cols-[1fr_1.02fr] xl:gap-12">
          <div className="animate-pulse space-y-5">
            <div className="h-8 w-72 rounded-full bg-card/80" />
            <div className="space-y-3">
              <div className="h-12 w-full rounded-2xl bg-card/80" />
              <div className="h-12 w-[92%] rounded-2xl bg-card/80" />
              <div className="h-12 w-[78%] rounded-2xl bg-card/80" />
            </div>
            <div className="space-y-3 pt-2">
              <div className="h-5 w-full rounded-full bg-card/70" />
              <div className="h-5 w-[88%] rounded-full bg-card/70" />
            </div>
            <div className="flex gap-4 pt-2">
              <div className="h-14 w-44 rounded-2xl bg-card/80" />
              <div className="h-14 w-44 rounded-2xl bg-card/70" />
            </div>
          </div>
          <div className="min-h-[420px] animate-pulse rounded-[2rem] border border-border/60 bg-card/80 shadow-soft xl:min-h-[640px]" />
        </div>
      </div>
    </section>
  );
}
