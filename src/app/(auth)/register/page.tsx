export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Create account</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded border px-3 py-2" placeholder="Email" />
        <input className="w-full rounded border px-3 py-2" placeholder="Username" />
        <input type="password" className="w-full rounded border px-3 py-2" placeholder="Password" />
        <button className="w-full rounded bg-black px-4 py-2 text-white">Sign Up</button>
      </form>
    </main>
  );
}
