import Router from 'next/router';
import { useEffect, useState } from 'react';
import { server } from '../config';
import { fetcher } from '../lib/api';
import { setToken } from '../lib/auth';
import { useUser } from '../lib/authContext';
import { SubmitHandler, useForm } from 'react-hook-form';


type FormValues = {
  identifier: string;
  password: string;
};


export function Login() {


  const [error, setError] = useState(undefined);
  const [data, setData] = useState({
    identifier: '',
    password: ''
  })



  const { register, formState, handleSubmit } = useForm<FormValues>();
  const { user, loading } = useUser();


  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {

    const response = await fetcher(`${server}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password
      })
    })

    setToken(response);

    if (response.jwt) {
      setError(undefined);
      Router.push('/blog');
    } else {
      setError(response.error.message)
    }
  }



  useEffect(() => {

  }, [formState])

  return (
    <section className='login-page min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0'>
      <header className='max-w-lg mx-auto'>
        <a href='#'>
          <h1 className='text-4xl font-bold text-white text-center'>Welcome</h1>
        </a>
      </header>
      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <section>
          <h3 className='font-bold text-center text-2xl'>Login</h3>
        </section>
        <section className='mt-10'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="email">Email</label>
              <input {...register('identifier', { required: 'Email is required', pattern: { value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Does not look like an email to me'}})} type='email' required className={`bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3`} />
              {formState.errors.identifier?.message && (console.log(formState.errors.identifier?.message))}
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3' htmlFor="password">Password</label>
              <input {...register('password')} className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
              {/* {error.password && <p className='text-red-500 text-xs italic'>Please enter your password.</p>} */}
            </div>
            <div className='flex justify-end'>
              <a href='#' className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>Forgot your password?</a>
            </div>
            <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' type='submit' >Sign In</button>
          </form>
          <h1 >{error}</h1>
        </section>
      </main>
      <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
        <p className='text-white text-xs'>Don't have an account?<a className='font-bold hover:underline'> Request one here!</a></p>
      </div>
    </section>
  )
}
