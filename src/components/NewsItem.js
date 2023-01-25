import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function NewsItem(props) {
  const [postData, setdata] = useState([])

  const getData = async () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2a63954fee844c3d842d1ffb7addd94c`)
    .then(resp => {setdata(resp.data.articles);})

    };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {postData.filter((item, index) => index < props.numberOfPost).map(({ name, title, body, id, url, urlToImage, description }) => (
          <div className="col" key={url}>
          <div className="card">
          <img src={urlToImage} className="card-img-top" alt={title}/>
          <div className="card-body">
              <h5 className="card-title">{title.substring(0,60)+"..."}</h5>
              <p className="card-text">{description.substring(0,90) + "..."}</p>
          </div>
          </div>
          </div>
      ))}
    </>
  )
}
