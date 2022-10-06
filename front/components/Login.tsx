import Router from 'next/router';
import { useEffect, useState } from 'react';
import { server } from '../config';
import { fetcher } from '../lib/api';
import { setToken } from '../lib/auth';
import { useUser } from '../lib/authContext';
import { SubmitHandler, useForm } from 'react-hook-form';


export function Login() {


  const [error, setError] = useState(undefined);
  const [data, setData] = useState({
    identifier: '',
    password: ''
  })

  const { user, loading } = useUser();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetcher(`${server}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password
      })
    })
    // res is good and has a jwt redirect to /blog
    if (res.jwt) {
      setToken(res);
      Router.push('/blog');
    }
    setToken(res)
  }


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <body className="login-page min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Welcome</h1>
      </header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#" onSubmit={handleSubmit}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
              <input onChange={handleChange} type="text" name='identifier' id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
              <input onChange={handleChange} type="password"  name='password' id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">Don't have an account? <a href="#" className="font-bold hover:underline">Sign up</a>.</p>
      </div>

      <footer className="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" className="hover:underline">Contact</a>
        <span className="mx-3">•</span>
        <a href="#" className="hover:underline">Privacy</a>
      </footer>
    </body>
  )
}
