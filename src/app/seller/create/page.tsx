'use client';
import { useState } from 'react';

export default function CreatePromptPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(9);
  const [description, setDescription] = useState('');

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Create Prompt</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded border px-3 py-2" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea className="w-full rounded border px-3 py-2" placeholder="Description" rows={6} value={description} onChange={e=>setDescription(e.target.value)} />
        <div className="flex gap-3">
          <input type="number" className="w-32 rounded border px-3 py-2" placeholder="Price" value={price} onChange={e=>setPrice(Number(e.target.value))} />
          <select className="rounded border px-2 py-1">
            <option>GPT-4o</option>
            <option>Claude 3.5</option>
          </select>
        </div>
        <textarea className="w-full rounded border px-3 py-2" placeholder="Usage guide / Variables" rows={6} />
        <button className="rounded bg-black px-4 py-2 text-white">Save draft</button>
      </form>
    </main>
  );
}
