import type { Metadata } from "next";
import { LoginForm } from "@/components/leads/login-form";

export const metadata: Metadata = {
  title: "Sign in — AutoSutra",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm space-y-6 rounded-3xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-1 text-center">
          <h1 className="font-heading text-xl font-semibold text-ink">
            AutoSutra Leads
          </h1>
          <p className="text-sm text-muted-foreground">
            Internal team access only.
          </p>
        </div>
        <LoginForm from={from} />
      </div>
    </div>
  );
}
