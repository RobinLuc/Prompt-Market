export default function MyPromptsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">My Prompts</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/prompts/1" className="rounded border p-4">
          <div className="aspect-[3/2] w-full rounded bg-neutral-100" />
          <h3 className="mt-2 font-medium">E-commerce Product Description Pro</h3>
          <div className="text-sm text-neutral-500">$9 · 120 sales</div>
        </a>
      </div>
    </main>
  );
}
