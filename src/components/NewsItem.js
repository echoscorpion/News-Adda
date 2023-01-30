import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function NewsItem(props) {
  const [postData, setdata] = useState([])
  
  
  const getData = async () => {
    const newsCategory = props.postCategory;
    const getUrl = `http://newsapi.org/v2/top-headlines?country=in&category=${newsCategory}&apiKey=2a63954fee844c3d842d1ffb7addd94c`
    axios.get(getUrl)
    .then(resp => {setdata(resp.data.articles);})
    .catch(e => {console.log(e);});
    };
  useEffect(() => {
    getData();
  });

  return (
    <>
      {postData.filter((item, index) =>  index < props.numberOfPost).map(({ author, title, content, publishedAt, url, urlToImage, description }) => (
          <div className="col" key={url}>
              <div className="card  position-relative" style={{height:422}}>
              <img src={urlToImage} className="card-img-top" alt={title} style = {{height:220, objectFit:"cover"}} />
              <div className="card-body">
                  {/* 
                  on compilation substring was causing issue because some character were not even 60 or 90
                  <h5 className="card-title" style = {{fontSize:18}} >{title.substring(0,60)+"..."}</h5>
                  <p className="card-text" style = {{fontSize:14}}>{description.substring(0,90)+"..."}</p> */}
                  {author
                  ?<div className="author bg-danger p-1 position-absolute text-light" style={{top:4,left:4,width:"auto", fontSize:11}}>{"By: "+ author}</div>
                  :''}
                  
                  <h5 className="card-title" style = {{fontSize:18}} >{title.length > 60 ? title.substring(0,53)+"..." : title}</h5>
                  <p className="card-text" style = {{fontSize:14}}>{description ? description.substring(0,80)+"..." : description}</p>
                  <button className="btn btn-link btn-small" type="button" data-bs-toggle="offcanvas" data-bs-target={'#'+url}aria-controls="offcanvasRight">Read More</button>
              </div>
              </div>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id={url} aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <img src={urlToImage} className="card-img-top mb-3" alt={title}/>
                {author
                  ?<span className="author mb-2 text-danger" style={{top:4,left:4,width:"auto", fontSize:11}}><b>{"By: "+ author}</b></span>
                  :''
                }
                {publishedAt
                  ?<span className="author mb-2 text-danger" style={{top:4,left:4,width:"auto", fontSize:11}}><b>{" / "+publishedAt}</b></span>
                  :''
                  }
                <h5 className="mb-3 mt-2" id="offcanvasRightLabel">{title}</h5>
                <p>
                  {content}
                </p>
                <div className="prevNxt" style={{display:"none"}}>
                <button className="btn btn-danger btn-large my-5 d-block mx-auto" onClick={props.numPostFunc} style={{width:"125px"}}>
                  Previous
                </button>
                <button className="btn btn-danger btn-large my-5 d-block mx-auto" onClick={props.numPostFunc} style={{width:"125px"}}>
                  Next
                </button>
                </div>
              </div>
            </div>
          </div>
          
      ))}

    </>
  )
}
