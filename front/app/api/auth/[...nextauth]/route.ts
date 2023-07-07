import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    }),
  ],
  callbacks: {
    async session(session) {
      return session
    },
  }
})

export { handler as GET, handler as POST }