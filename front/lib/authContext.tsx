import { createContext, useContext, useEffect, useState } from "react";
import { getUserFromLocalCookie } from "./auth";


let userState: any;

const User = createContext({ user: null, loading: false})

export const UserProvider = ({ value, children }) => {
  const { user } = value

  useEffect(()=> {
    if (!userState && user) {
      userState = user
    }
  }, []);

  return <UserProvider value={value}>{children}</UserProvider>
}

export const useUser = () => useContext(User)

export const useFetcher = () => {
  const [data, setData] = useState({
    user: userState || null,
    loading: userState === undefined,
  })

  useEffect(() => {
    if (userState !== undefined) return;

    let isMounted = true;

    const user = getUserFromLocalCookie();
    if (isMounted) {
      setData({ user, loading: false });
    }

    return () => {
      isMounted = false;
    }
  }, []);

  return data;
}