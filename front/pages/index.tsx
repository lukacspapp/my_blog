import { Login } from '../components/Login'
import { useUser } from '../lib/authContext';



export function IndexPage() {

  const { user, loading } = useUser();

  return (
    <>
      <Login />
    </>
  )
}

export default IndexPage
