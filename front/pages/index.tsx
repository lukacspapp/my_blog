
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { Login } from '../components/Login';

export default function Home() {
  const { data: session }: any = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);
  }, [session]);

  return (
    <div>
      <Head>
        <title>Strapi - Next - NextAuth</title>
      </Head>
      <h1>{session ? 'Authenticated' : 'Not Authenticated'}</h1>
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
        </button>
      </Link>
      <Login />
    </div>
  );
}