import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem';



const Blogs = () => {
    const [articles, setArticles] = useState([]);
    const query = `
    query GetUserArticles($page: Int!) {
        user(username: "meenakshi710") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

const variables = { page: 0 };



const fetchBlog =  async () =>{
    const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query,
        variables,
    }),
});

const result = await data.json();
console.log(result);
const articles = result.data.user.publication.posts;
console.log(articles);
setArticles(articles);
}
useEffect(() => {
  fetchBlog();

  
}, [])

  return(
    <>
   <div className='container'>
                <div className = "row">
                {articles.map((element)=>{
                    return <div className = "container mt-5" key = {element.title}>
                    <BlogItem title = {element.title?element.title.slice(0,45):""} brief = {element.brief} imageUrl = {element.coverImage} slug = {element.slug}/>

                    </div>
                })}
                    
                    
                </div> 
                </div>
    
    
    
       </>
  )
  
}

export default Blogs