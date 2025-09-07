export default function CartPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Cart</h1>
      <div className="mt-6 rounded border p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">E-commerce Product Description Pro</div>
            <div className="text-sm text-neutral-500">By Alice · GPT-4o</div>
          </div>
          <div className="font-semibold">$9</div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <a href="/checkout" className="rounded bg-black px-4 py-2 text-white">Checkout</a>
      </div>
    </main>
  );
}
