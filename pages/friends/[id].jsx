export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(friend =>{
        return {
            params: { id: friend.id.toString() }
        }
    })
       
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return{
        props: {friend: data}
    }
}
const Details = ({friend}) => {
  return (
    <div>
      <h1>{friend.name}</h1>
      <p>{friend.email}</p>
      <p>{friend.website}</p>
      <p>{friend.address.city}</p>

    </div>
  )
}

export default Details
