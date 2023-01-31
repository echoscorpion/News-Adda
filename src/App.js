import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


function App() {

  document.body.style.background="#000";
  

  const [numberOfPost, setnumberOfPost] = useState(0);

  const increasePost = (start, end)=> {
  
    setnumberOfPost(numberOfPost+8)
    console.log(numberOfPost)
  
  }
    return (

      <div>
          <Navbar/>
          <News numPostFunc={increasePost} numberOfPost={numberOfPost}/>
      </div>
    )

}

export default App;
