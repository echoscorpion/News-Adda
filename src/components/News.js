import React, {useState} from 'react';
import NewsItem from './NewsItem'

export default function News(props) {

  const [categoryChange, setcategoryChange] = useState('general')

  const changeCategory = (e) => {
    let btnCat = e.target.value
    setcategoryChange(btnCat)
  }
  return (
    <>
      <div className="container-fluid mt-5">
          <h1 className='text-center'>
              News Adda Lates Articles
          </h1>
          <div className="row mt-5">
            
            <div className="col-md-10 col-12">
              <div className="row row-cols-1 row-cols-md-4 g-4">
              <NewsItem numberOfPost={props.numberOfPost} postCategory={categoryChange}/>
              <button className="btn btn-danger btn-large my-5 d-block mx-auto" onClick={props.numPostFunc}>
              Load More
                </button>
              </div>
            </div>
            <div className="col-md-2 col-12">
              <h2>
                Categories
              </h2>
              
                  <button className='btn d-block' value="general" onClick={changeCategory}>General</button>
                  <button className='btn d-block' value="science" onClick={changeCategory}>Science</button>
                  <button className='btn d-block' value="business" onClick={changeCategory}>Business</button>
                  <button className='btn d-block' value="sports" onClick={changeCategory}>Sports</button>
                  <button className='btn d-block' value="technology" onClick={changeCategory}>Technology</button>
                  <button className='btn d-block' value="entertainment" onClick={changeCategory}>Entertainment</button>
            </div>
          </div>
      </div>
    </>
  )
}
