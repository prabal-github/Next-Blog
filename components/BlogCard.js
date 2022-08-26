import React from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'
import axios from 'axios'


const Card = ({ post }) => {
    let articles=[]
    getArticles().then((data)=>{console.log(data.data);});
    // console.log(articles);
    return (
        <div className="pb-10 px-10">
            <div className=" w-full lg:max-w-full lg:flex">
                {/* <div className="border-r border-b border-l rounded-2xl border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-yellow-100 p-6 flex flex-col justify-between leading-normal"> */}
                <div className={styles.effect}>
                    <div className="mb-3">
                        <div className="text-gray-900 font-bold text-xl mb-2 text-center uppercase">{post.attributes.title.length <= 17 ? post.attributes.title : post.attributes.title.slice(0, 17) + '...'}</div>
                        <p className="text-gray-700 text-base">{post.attributes.content.slice(0, 100)}...</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="text-sm">
                            <p className="text-gray-700">{post.attributes.publishedAt.split("T")[0]}</p>
                        </div>
                        <Link href={'/blog/' + post.id}>
                            <button className={styles.buttonEffect}>View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

const getArticles = async (id='') => {
    const res = await axios.get(`http://localhost:6969/api/posts/${id}`);
    const data = res.data ? res.data : [];
    // console.log(data);
    return (data)
  }

export default Card