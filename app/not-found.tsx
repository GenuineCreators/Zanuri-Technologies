import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6 lg:px-8 xl:px-10">
      <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        Page not found
      </span>
      <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">The page you are looking for does not exist.</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        You may have followed an outdated link or typed the address incorrectly. Head back to the homepage and continue exploring Zanuri Technologies.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground">
        Go home
      </Link>
    </div>
  );
}
