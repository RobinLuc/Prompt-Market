export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Login</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded border px-3 py-2" placeholder="Email" />
        <input type="password" className="w-full rounded border px-3 py-2" placeholder="Password" />
        <button className="w-full rounded bg-black px-4 py-2 text-white">Sign In</button>
      </form>
    </main>
  );
}
