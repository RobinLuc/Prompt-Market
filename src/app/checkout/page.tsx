export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded border px-3 py-2" placeholder="Email for delivery" />
        <input className="w-full rounded border px-3 py-2" placeholder="Discount code (optional)" />
        <div className="rounded border p-3 text-sm text-neutral-600">Payment is simulated in MVP.</div>
        <a href="/success" className="inline-block rounded bg-black px-4 py-2 text-white">Pay $9</a>
      </form>
    </main>
  );
}
