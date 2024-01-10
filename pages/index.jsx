import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
     <title> Friendlist | Home</title>
     <meta name="keywords" content="friends" />
    </Head>
    <div >
     <h1 className={styles.title}>home page</h1> 
     <p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ac orci phasellus
        egestas tellus. Vel fringilla est ullamcorper eget. Pellentesque
        adipiscing commodo elit at imperdiet dui. Ante in nibh mauris cursus
        mattis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim
        sodales. Elit scelerisque mauris pellentesque pulvinar pellentesque
        habitant morbi tristique. Mauris nunc congue nisi vitae.</p>
        <Link  className={`${styles.btn} link`} href='./friends'>
        see friends
        </Link>
    </div>
    </>
  )
}
