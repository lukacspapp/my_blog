import { useSession } from "next-auth/react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";



export default function RegisterPage() {

  const { data: session }: any = useSession();


  return (
    <div>
    <Register />
    </div>
  )
}
