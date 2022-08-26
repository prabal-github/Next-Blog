import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogCard from '../components/BlogCard'
import Header from '../components/Header'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Very Beautiful Blog Page</title>
      </Head>

      <Header />
      
      {/* <div className='my-12 grid sm:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-2'> */}
      <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {posts.data.map((post) => (          
            <BlogCard post={post} key={post.id} />
        )
        )}
      </div>

    </>
  )
}

export async function getStaticProps() {

  const postResponse = await axios.get("http://localhost:6969/api/posts");

  return {
    revalidate: 10,
    props: {
      posts: postResponse.data
    }
  }
}
