import Link from "next/link"
import { useEffect } from "react"
import {useRouter } from 'next/router'


const PageNotFound = () => {
  const router = useRouter();
  useEffect (()=>{
    setTimeout(()=>{
    router.push('/')
    }, 3000)
  },[])
  return (
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>Page does not exist</h2>
      <p>
      Go back to 
        <Link className="link" href='/'> Home page</Link>
      </p>
    </div>
  )
}

export default PageNotFound
