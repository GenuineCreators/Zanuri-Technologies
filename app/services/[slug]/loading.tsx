export default function LoadingServiceDetail() {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 xl:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="animate-pulse space-y-6 pt-6">
          <div className="h-4 w-40 rounded-full bg-card/80" />
          <div className="h-14 w-14 rounded-2xl bg-card/80" />
          <div className="space-y-3">
            <div className="h-12 w-full rounded-2xl bg-card/80" />
            <div className="h-12 w-[72%] rounded-2xl bg-card/80" />
          </div>
          <div className="space-y-3">
            <div className="h-5 w-full rounded-full bg-card/70" />
            <div className="h-5 w-[90%] rounded-full bg-card/70" />
            <div className="h-5 w-[84%] rounded-full bg-card/70" />
          </div>
        </div>
        <div className="min-h-[420px] animate-pulse rounded-[2rem] border border-border/60 bg-card/80 shadow-soft" />
      </div>
    </section>
  );
}
