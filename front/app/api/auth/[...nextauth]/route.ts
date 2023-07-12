import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import FaceBookProvider from "next-auth/providers/facebook";
import request, { gql } from "graphql-request";

const hygraphAPI = process.env.GRAPHCMS_WRITE_ENDPOINT ?? ''

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
    async session({ session }) {

      // ! Steps

      // 1. Check if user exists in hygraph
      // 2. If not, create user in hygraph
      // 3. Return session

      // const query = gql`
      //   query MyQuery {
      //     auth0Users {
      //       email
      //     }
      //   }
      // `

      // const mutation = gql`
      //   mutation MyMutation {
      //     createAuth0User(data: {email: "${email}"}) {
      //       id,
      //       email
      //     }
      //   },
      // `

      return session
  },
}
})

export { handler as GET, handler as POST }