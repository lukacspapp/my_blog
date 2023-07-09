import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import FaceBookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    }),
    FaceBookProvider({
      clientId: process.env.FACEBOOK_ID || '',
      clientSecret: process.env.FACEBOOK_SECRET || ''
    })
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({session}) {
      return session
    },
  },

})

export { handler as GET, handler as POST }