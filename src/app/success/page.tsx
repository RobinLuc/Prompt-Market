export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Payment Success</h1>
      <p className="mt-2 text-neutral-600">Thanks! Your prompt is ready to copy/download.</p>
      <div className="mt-6 rounded border p-4">
        <div className="font-medium">Prompt text</div>
        <pre className="mt-2 whitespace-pre-wrap text-sm">[PROMPT TEXT HERE WITH {variables}]</pre>
      </div>
      <div className="mt-6 flex gap-3">
        <a href="/prompts/1" className="rounded border px-4 py-2">Back to Prompt</a>
        <a href="/search" className="rounded bg-black px-4 py-2 text-white">Find more prompts</a>
      </div>
    </main>
  );
}
