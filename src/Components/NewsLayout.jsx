import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
function NewsLayout({category}) {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(()=>{
      
          let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}` 
          axios.get(url)
         fetch(url)
          .then((res)=>res.json())
          .then((data)=>setArticles(data.articles))
          .catch((error)=>{
            console.log(error);
          })
       
        },[category])
       
  return (
      <div>
         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
         <div className='d-flex justify-content-center align-items-center flex-wrap'>
            { articles.map((article,idx) => {
              return  <NewsCard 
                    key={idx} 
                    author={article.author} 
                    title={article.title} 
                    description={article.description} 
                    url={article.url}
                    image={article.urlToImage}
                    
                ></NewsCard>
                })}
         </div>
      </div>
       
  )
}

export default NewsLayout