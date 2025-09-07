export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Prompt 市场</h1>
        <p className="mt-3 text-neutral-600">
          发现、购买并使用高质量的 AI 提示词。查看示例、使用指南与版本更新。
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/search" className="rounded bg-black px-5 py-2 text-white">浏览 Prompts</a>
          <a href="/login" className="rounded border px-5 py-2">登录</a>
          <a href="/register" className="rounded border px-5 py-2">注册创作者</a>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h3 className="font-medium">高质量示例</h3>
          <p className="mt-2 text-sm text-neutral-600">输入→输出示例，开箱即用。</p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-medium">模型适配</h3>
          <p className="mt-2 text-sm text-neutral-600">支持 GPT、Claude、Gemini、Llama 等。</p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-medium">版本迭代</h3>
          <p className="mt-2 text-sm text-neutral-600">版本记录与更新通知，持续优化。</p>
        </div>
      </section>
    </main>
  );
}
