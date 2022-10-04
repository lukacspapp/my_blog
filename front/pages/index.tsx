import { Login } from '../components/Login'
import { useUser } from '../lib/authContext';



const IndexPage = ({ reviews }) => {

  const { user, loading } = useUser();

  console.log(reviews);


  return (
    <>
      <Login />
    </>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:1337/api/reviews');
  const reviews = await res.json();

  return {
    props: { reviews: reviews.data } ,
  }
}

export default IndexPage
