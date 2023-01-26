import React from 'react'
import NewsItem from './NewsItem'

export default function News(props) {
  return (
    <>
      <div className="container-fluid mt-5">
          <h1>
              News Adda Lates Articles
          </h1>
          <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
            <NewsItem numberOfPost={props.numberOfPost}/>
          </div>
          <button className="btn btn-danger btn-large my-5 d-block mx-auto" onClick={props.numPostFunc}>
            Load More
          </button>
      </div>
    </>
  )
}
