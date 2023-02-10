import Router, { useRouter } from 'next/router';
import LoginIcon from '@mui/icons-material/Login';
import { signIn } from 'next-auth/react';


export function Login() {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      identifier: e.currentTarget.identifier.value,
      password: e.currentTarget.password.value,
    };
console.log(body)
    const response = await signIn('credentials', {
      redirect: false,
      email: body.identifier,
      password: body.password,
    });

    if (response.error) {
      alert(response.error);
    } else {
      router.reload();
    }
  }



  return (
    <>
      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Welcome</h1>
      </header>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section className="mt-10">
          <form className="flex flex-col" action="#" onSubmit={onSubmit}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
              <input  type="text" name='identifier' id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
              <input type="password"  name='password' id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit"> Sign In <LoginIcon fontSize='small'/></button>
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
    </>

  )
}
