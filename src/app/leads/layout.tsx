import type { Metadata } from "next";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Leads — AutoSutra",
  robots: { index: false, follow: false },
};

export default async function LeadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/leads" className="font-heading text-lg font-semibold text-ink">
            AutoSutra Leads
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">{session?.user?.name}</span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
