interface Params { params: { id: string } }

export default function PromptDetailPage({ params }: Params) {
  const { id } = params;
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Prompt #{id}</h1>
          <p className="mt-1 text-sm text-neutral-500">Compatible with GPT-4o, Claude 3.5 · By Alice</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold">$9</span>
          <button className="rounded bg-black px-4 py-2 text-white">Buy now</button>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-12 gap-6">
        <section className="col-span-12 lg:col-span-8 space-y-4">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Overview</h2>
            <p className="mt-2 text-sm text-neutral-600">Use cases, prerequisites, tips.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Examples</h2>
            <div className="mt-2 space-y-3">
              <div className="rounded border p-3">
                <div className="text-xs font-mono text-neutral-500">Input</div>
                <pre className="mt-1 whitespace-pre-wrap text-sm">Describe a product: eco-friendly water bottle</pre>
                <div className="mt-3 text-xs font-mono text-neutral-500">Output</div>
                <pre className="mt-1 whitespace-pre-wrap text-sm">A compelling description ...</pre>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Usage Guide</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Set variables: {`{product}`}, {`{tone}`}</li>
              <li>Paste into your LLM tool</li>
              <li>Review and iterate</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Changelog</h2>
            <ul className="mt-2 text-sm text-neutral-600">
              <li>v1.1 - Improve tone options</li>
              <li>v1.0 - Initial release</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Reviews</h2>
            <div className="mt-2 space-y-3">
              <div className="rounded border p-3">
                <div className="text-sm font-medium">Bob · ⭐ 5</div>
                <p className="mt-1 text-sm text-neutral-700">Great prompt, saved me hours!</p>
              </div>
              <div className="rounded border p-3">
                <div className="text-sm font-medium">Alice · ⭐ 4</div>
                <p className="mt-1 text-sm text-neutral-700">Works well. Looking forward to more examples.</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-span-12 lg:col-span-4 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-600">Includes</h3>
            <ul className="mt-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Prompt text</li>
              <li>Usage guide</li>
              <li>License</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-600">Ratings</h3>
            <p className="mt-2 text-sm">⭐ 4.8 (120)</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
