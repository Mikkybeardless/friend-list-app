import Link from "next/link"
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/logo.png' alt="logo" width ={128} height={80} />
      </div>
    
     <Link className="link" href="/">Home</Link>
     <Link className="link" href="/about">About</Link>
     <Link className="link" href="/friends">Friend List</Link>
    </nav>
   

    
  )
}

export default Navbar
