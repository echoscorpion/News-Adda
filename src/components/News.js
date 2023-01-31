import React, {useState} from 'react';
import NewsItem from './NewsItem'


export default function News(props) {

  const [categoryChange, setcategoryChange] = useState('')
  
  const changeCategory = (event) => {

    let btnCat = event.target.getAttribute("value");
    setcategoryChange(btnCat)
    
  }

  return (
    <>
      <div className="container-fluid mt-5">
          
          <div className="row">
            <div className="col-md-6 col-12">
              <h1 className='text-left'>
              News Adda Lates Articles
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            
            <div className="col-md-10 col-12">
              <div className="row row-cols-1 row-cols-md-4 g-4 pb-5">
              {/* <span className="text-light btn bg-danger mx-auto" onClick={props.numPostFunc} style={{position:'absolute', right:"15px",top:"-5%", zIndex:999, maxWidth:"105px"}}>
                  Load More
              </span> */}
              <NewsItem numberOfPost={props.numberOfPost} postCategory={categoryChange}/>
              <span className="text-light btn bg-danger mx-auto" onClick={props.numPostFunc}>
                  Load More
              </span>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <h2>
                Categories
              </h2>
              
                  <button className='btn mt-2 border border-danger d-block' value="general" onClick={changeCategory}>General</button>
                  <button className='btn mt-2 border border-danger d-block' value="science" onClick={changeCategory}>Science</button>
                  <button className='btn mt-2 border border-danger d-block' value="business" onClick={changeCategory}>Business</button>
                  <button className='btn mt-2 border border-danger d-block' value="sports" onClick={changeCategory}>Sports</button>
                  <button className='btn mt-2 border border-danger d-block' value="technology" onClick={changeCategory}>Technology</button>
                  <button className='btn mt-2 border border-danger d-block' value="entertainment" onClick={changeCategory}>Entertainment</button>
            </div>
          </div>
      </div>
    </>
  )
}
