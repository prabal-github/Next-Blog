import React from 'react'

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    let paths=[]
    const articles = await getArticles();
    
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }

  const getArticles = async (id='') => {
    const res = await axios.get(`http://localhost:6969/api/posts/${id}`);
    const data = res.data ? res.data : [];
    // console.log(data);
    return (data)
  }

const Article = () => {
  return (
    <div></div>
  )
}

export default Article