import React from 'react';
import NewsItem from './NewsItem'
export default function News(props) {

 

  return (
    <>
      <div className="container-fluid pt-5" id="mainContainer" style={{background:"#000"}}>
          
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className={`text-${props.textMode}`}>
              News Adda Latest Articles
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            
            <div className="col-md-10 col-12">
              <div className="row row-cols-1 row-cols-md-4 g-4 pb-5">
              {/* <span className="text-light btn bg-danger mx-auto" onClick={props.numPostFunc} style={{position:'absolute', right:"15px",top:"-5%", zIndex:999, maxWidth:"105px"}}>
                  Load More
              </span> */}
              <NewsItem numberOfPost={props.numberOfPost} postCategory={props.postCategory} textMode={props.textMode} screenMode={props.screenMode}/>
              <span className="text-light btn bg-danger mx-auto" onClick={props.numPostFunc}>
                  Load More
              </span>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <h2 className={`text-${props.textMode}`}>
                Categories
              </h2>
              
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="general" onClick={props.changeCategoryCLick}>General</button>
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="science" onClick={props.changeCategoryCLick}>Science</button>
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="business" onClick={props.changeCategoryCLick}>Business</button>
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="sports" onClick={props.changeCategoryCLick}>Sports</button>
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="technology" onClick={props.changeCategoryCLick}>Technology</button>
                  <button className={`btn mt-2 border border-danger d-block text-${props.textMode}`} color="red"value="entertainment" onClick={props.changeCategoryCLick}>Entertainment</button>
            </div>
          </div>
      </div>
    </>
  )
}
