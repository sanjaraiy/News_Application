import axios from 'axios';
import React, { useEffect, useState } from 'react'

function NewsLayout() {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(()=>{
      
          let url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${import.meta.env.VITE_API_KEY}` 
         axios.get(url)
          .then((res)=>res.json())
          .then((data)=>setArticles(data.articles))
          .catch((error)=>{
            console.log(error);
          })
       

    },[])
  return (
       <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
  )
}

export default NewsLayout