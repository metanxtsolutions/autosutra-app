import type { NextAuthConfig } from "next-auth";

// Edge-safe base config: no Credentials provider here, since its
// authorize() callback needs Prisma and bcrypt, neither of which run on
// the Edge runtime middleware uses. Providers are added in auth.ts, which
// is only ever imported by the Node.js-runtime API route and server
// components, never by middleware.ts.
export const authConfig = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.id = user.id;
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
