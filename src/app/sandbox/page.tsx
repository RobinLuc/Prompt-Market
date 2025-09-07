'use client';
import { useState } from 'react';

export default function SandboxPage() {
  const [product, setProduct] = useState('eco-friendly water bottle');
  const [tone, setTone] = useState('friendly');
  const prompt = `You are a copywriter. Write a ${tone} description for {product}.`;
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Sandbox</h1>
      <p className="mt-2 text-sm text-neutral-600">Fill variables to preview prompt text.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input className="rounded border px-3 py-2" value={product} onChange={e=>setProduct(e.target.value)} placeholder="{product}" />
        <input className="rounded border px-3 py-2" value={tone} onChange={e=>setTone(e.target.value)} placeholder="{tone}" />
      </div>
      <div className="mt-6 rounded border p-4">
        <div className="text-sm font-medium">Prompt</div>
        <pre className="mt-2 whitespace-pre-wrap text-sm">{prompt}</pre>
      </div>
    </main>
  );
}
