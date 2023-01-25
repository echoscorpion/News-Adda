import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const [numberOfPost, setnumberOfPost] = useState(6);
  const increasePost = ()=> {
    setnumberOfPost(numberOfPost + 6)
  }
    return (
      <div>
        <Navbar/>
        <News numPostFunc={increasePost} numberOfPost={numberOfPost}/>
      </div>
    )

}

export default App;
