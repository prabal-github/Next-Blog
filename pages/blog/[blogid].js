import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Head from 'next/head';
import styles from '../../styles/BlogPage.module.css'

// export const getStaticPaths = async () => {
//   let paths = [];

//   const articles = await getArticles()

//   articles.data.data.map(article=>{
//     paths.push({ params: { blogid: article.id.toString() } })
//   })

//   return {
//     paths: paths,
//     fallback: false
//   }
// }

export const getServerSideProps = async ({params}) => {
  const article = await getArticles(params.blogid)
  return {
    props: {
      post: article
    }
  }
}

const getArticles = async (params=null) => {

  const res = await axios.get(`http://localhost:6969/api/posts/${params&&params}`);
  const data = res.data ? res.data : [];
  // console.log(data);
  return (data)
}

const BlogDetails = ({ post }) => {
  console.log(post);
  return (
    <h1>{post.data.attributes.title}</h1>
    // <h1>{}</h1>
  )
}


// const BlogDetails = () => {
//   const router = useRouter();
//   const [title, settitle] = useState('')
//   const [content, setcontent] = useState('')
//   const [desc, setdesc] = useState('')
//   useEffect(() => {
//     if (router.query.blogid) {
//       console.log(router.query.blogid);
//       axios.get(`http://localhost:6969/api/posts/${router.query.blogid}`).then((response) => {
//         settitle(response.data.data.attributes.title);
//         setcontent(response.data.data.attributes.content);
//         setdesc(response.data.data.attributes.description);
//       })
//     }
//   }, [])
//   let imgurl='../../public/blog-background.jpg'
//   const mystyle={
//     // backgroundImg: "url("+imgurl+")",
//     backgroundColor: "lightblue",
//     height: '100%',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//   }
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <div className={mystyle} style={{backgroundColor: "lightblue", height: '100%', width:'100%'}}>
//         <div className='flex flex-col m-10 p-10 gap-8 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-100'>

//           <h1 className='text-center text-5xl font-bold'>{title}</h1>
//           <h3 className='text-center text-5xl font-bold'>{desc}</h3>
//           <p>{content}</p>
//         </div>
//       </div>
//     </>
//   )
// }


export default BlogDetails