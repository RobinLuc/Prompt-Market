const mockPrompts = [
  { id: '1', title: 'E-commerce Product Description Pro', price: 9, rating: 4.8, model: 'GPT-4o', tags: ['marketing', 'copywriting'], language: 'EN' },
  { id: '2', title: 'Code Review Assistant', price: 7, rating: 4.6, model: 'Claude 3.5', tags: ['developer', 'code'], language: 'EN' },
  { id: '3', title: '小红书爆款文案生成', price: 12, rating: 4.9, model: 'GPT-4', tags: ['marketing', 'zh'], language: 'ZH' },
];

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Browse Prompts</h1>
      <div className="mt-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3">
          <div className="rounded-lg border p-4">
            <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-600">Filters</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm">Model</label>
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option>Any</option>
                  <option>GPT-4o</option>
                  <option>GPT-4</option>
                  <option>Claude 3.5</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Price</label>
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option>All</option>
                  <option>Under $5</option>
                  <option>$5 - $10</option>
                  <option>$10+</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Language</label>
                <select className="mt-1 w-full rounded border px-2 py-1">
                  <option>All</option>
                  <option>EN</option>
                  <option>ZH</option>
                </select>
              </div>
            </div>
          </div>
        </aside>
        <section className="col-span-12 md:col-span-9">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm text-neutral-500">{mockPrompts.length} results</p>
            <select className="rounded border px-2 py-1 text-sm">
              <option>Featured</option>
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockPrompts.map((p) => (
              <a key={p.id} href={`/prompts/${p.id}`} className="group rounded-lg border p-4 hover:shadow-sm">
                <div className="aspect-[3/2] w-full rounded bg-neutral-100" />
                <h3 className="mt-3 line-clamp-2 font-medium group-hover:underline">{p.title}</h3>
                <div className="mt-1 text-sm text-neutral-500">{p.model} · {p.language}</div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-semibold">${'{'}p.price{'}'}</span>
                  <span className="text-sm">⭐ {p.rating}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
