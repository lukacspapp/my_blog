import { getSession } from 'next-auth/react';
import React from 'react'
import { Login } from '../../components/Login'

type Props = {}

export default function login({}: Props) {
  return (
    <div>
      <Login />
    </div>
  )
}



export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}