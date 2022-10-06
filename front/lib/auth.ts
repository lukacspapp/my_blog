import Router from 'next/router'
import Cookies from 'js-cookie'

interface Data {
  user: {
    id: string;
    username: string;
  },
  jwt: string;
}

export const setToken = (data: Data) => {

  if (typeof window !== 'undefined') {
    return;
  }

  Cookies.set('id', data.user.id)
  Cookies.set('username', data.user.username)
  Cookies.set('jwt', data.jwt)

  if (Cookies.get('username')) {
    Router.push('/blog');
  }
};

export const unsetToken = () => {
  if (typeof window !== 'undefined') {
    return;
  }

  Cookies.remove('id')
  Cookies.remove('jwt')
  Cookies.remove('username')

  Router.push('/')
}

export const getUserFromLocalCookie = () => {
  return Cookies.get('username')
}

export const getIdFromLocalCookie = () => {
  return Cookies.get('id')
}

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt')
}

export const getTokenFromServerSideCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined
  }
  const idCookie = req.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith('id='))

  if (!idCookie) {
    return undefined
  }
  return idCookie.split('=')[1]
}