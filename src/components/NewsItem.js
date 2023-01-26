import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function NewsItem(props) {
  const [postData, setdata] = useState([])

  const getData = async () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2a63954fee844c3d842d1ffb7addd94c`)
    .then(resp => {setdata(resp.data.articles);})
    .catch(e => {console.log(e);});
    };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {postData.filter((item, index) => index < props.numberOfPost).map(({ name, title, content, id, url, urlToImage, description }) => (
          <div className="col" key={url}>
              <div className="card">
              <img src={urlToImage} className="card-img-top" alt={title} style = {{height:220, objectFit:"cover"}} />
              <div className="card-body">
                  {/* 
                  on compilation substring was causing issue because some character were not even 60 or 90
                  <h5 className="card-title" style = {{fontSize:18}} >{title.substring(0,60)+"..."}</h5>
                  <p className="card-text" style = {{fontSize:14}}>{description.substring(0,90)+"..."}</p> */}
                  <h5 className="card-title" style = {{fontSize:18}} >{title.length > 60 ? title.substring(0,60)+"..." : title}</h5>
                  <p className="card-text" style = {{fontSize:14}}>{description ? description.substring(0,90)+"..." : description}</p>
                  <button className="btn btn-primary btn-small" type="button" data-bs-toggle="offcanvas" data-bs-target={'#'+url}aria-controls="offcanvasRight">Read More</button>
              </div>
              </div>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id={url} aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <img src={urlToImage} className="card-img-top mb-3" alt={title}/>
                <h5 className="mb-3" id="offcanvasRightLabel">{title}</h5>
                <p>
                  {content}
                </p>
              </div>
            </div>
          </div>
          
      ))}

    </>
  )
}
