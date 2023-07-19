import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import FaceBookProvider from "next-auth/providers/facebook";
import { createAuth0User, getAuth0Users } from "../../../../lib/services";

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

      const users = await getAuth0Users()
      let isUserRegistered = false

      if (users.map((user) => user.email).includes(session.user?.email)) {
        return session
      } else {
        const response = await createAuth0User(session.user?.email!)
        console.log('❤️',response)


        if (response.errors) {
          return response.errors

        }

        return {
          ...session,
          user: response.data?.createAuth0User
        }

      }



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

      // const { auth0Users } = await request(graphqlAPI, query) as any


  },
}
})

export { handler as GET, handler as POST }