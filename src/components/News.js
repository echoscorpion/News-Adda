import React from 'react'
import NewsItem from './NewsItem'

export default function News(props) {
  return (
    <>
      <div className="container mt-5">
          <h1>
              News Adda Lates Articles
          </h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            <NewsItem numberOfPost={props.numberOfPost}/>
          </div>
          <button className="btn btn-success my-5 d-block mx-auto" onClick={props.numPostFunc}>
            Load More
          </button>
      </div>
    </>
  )
}
