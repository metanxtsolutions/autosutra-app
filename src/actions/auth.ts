"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";

export type LoginActionState = {
  error: string | null;
};

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: (formData.get("from") as string) || "/leads",
    });
    return { error: null };
  } catch (error) {
    // signIn() redirects internally on success by throwing Next.js's
    // special NEXT_REDIRECT signal, which must be rethrown, not treated
    // as a login failure, or the redirect never happens.
    if (error instanceof AuthError) {
      return { error: "Incorrect email or password." };
    }
    throw error;
  }
}
