# my_blog
{/* <h1>{session ? 'Authenticated' : 'Not Authenticated'}</h1>
      {session && (
        <div style={{ marginBottom: 10 }}>
          <h3>Session Data</h3>
          <div>Email: {session.user.email}</div>
          <div>JWT from Strapi: Check console</div>
        </div>
      )}
      {session ? (
        //@ts-ignore
        <button onClick={signOut}>Sign out</button>
      ) : (
        <Login/>
      )}
      <Link href="/protected">
        <button
          style={{
            marginTop: 10,
          }}
        >
          Protected Page
  sdfa      </button>
      </Link> */}


      import NextAuth, { Awaitable, RequestInternal, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare, hash } from "bcrypt";
import { GraphQLClient } from "graphql-request";
import { request, gql } from 'graphql-request'


const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    user: nextUser(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

const CreateNextUserByEmail = gql`
  mutation CreateNextUserByEmail($email: String!, $password: String!) {
    newUser: createNextUser(data: { email: $email, password: $password }) {
      id
    }
  }
`;

const GetUserProfileById = gql`
  query GetUserProfileById($id: ID!) {
    user: nextAuthUser(where: { id: $id }) {
      name
      bio
    }
  }
`;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jamie@hygraph.com"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password"
        },
      },
      authorize: async ({ email, password }) => {
        const { user } = await client.request(GetUserByEmail, {
          email,
        });

        if (!user) {
          const { newUser } = await client.request(
            CreateNextUserByEmail,
            {
              email,
              password: await hash(password, 12),
            }
          );

          return {
            id: newUser.id,
            username: email,
            email,
          };
        }

        const isValid = await compare(password, user.password);

        if (!isValid) {
          throw new Error("Wrong credentials. Try again.");
        }

        return {
          id: user.id,
          username: email,
          email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.sub;
      return Promise.resolve(session);
    },
  },
})
