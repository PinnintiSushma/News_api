import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fetch = () => {
    const[Data,setData]=useState("")
    const fetchData=async()=>{
        await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=899ed552b91749a7897fc0bfa58b2a7a")
        .then((res)=>
        setData(res.data.articles))
    };
    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div >
      <h1><u>TOP HEADLINES</u></h1>
      <div style={{marginLeft:'380px'}}>
        {Data?
        Data.map((items,index)=>{
          return(
          <div>
              <div className='container my-3 p-3'style={{width:"600px",boxShadow:"2px 2px 10px grey",borderRadius:"10px"}}>
              <h5 className='container my-3'><b>{items.title}</b></h5>
              <img src={items.urlToImage} alt="Image not found"className="img-fluid"style={{width:"auto",height:"300px"}}/>
              <p>{items.content}</p>
              <a href ={items.url} target="blank">View more</a>
              </div>
              </div>
          )
      })
        :"Loading.."}
      </div>
    </div>
  )
}

export default Fetch
