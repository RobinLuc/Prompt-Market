import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { I18nProvider } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Market",
  description: "Discover, buy, and use high-quality AI prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const t = localStorage.getItem('theme'); const r = document.documentElement; if (t === 'dark') r.setAttribute('data-theme','dark'); else if (t === 'light') r.setAttribute('data-theme','light'); } catch (e) {} })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <header className="border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
              <a href="/" className="font-semibold">Prompt Market</a>
              <div className="flex items-center gap-3">
                {/* @ts-expect-error Server Component imports client */}
                <LanguageSwitcher />
                {/* @ts-expect-error Server Component imports client */}
                <ThemeToggle />
              </div>
            </div>
          </header>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
