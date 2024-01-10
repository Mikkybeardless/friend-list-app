import Link from 'next/link'
import styles from "../../styles/friends.module.css"

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()

  return {
    props: {friends:data}
  }
}

const Friends = ({friends}) => {
  return (
    <div>
      <h1> friends</h1>
      {friends.map((friend)=>(
        <Link className={styles.single} href={`/friends/${friend.id}`} key={friend.id}>
         
         <h3>{friend.name}</h3>
        
        </Link>
      ))}
    </div>
    
  )
}

export default Friends
