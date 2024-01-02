import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


function App() {  

  const [numberOfPost, setnumberOfPost] = useState(0);

  const increasePost = (start, end)=> {
  
    setnumberOfPost(numberOfPost+8)
    console.log(numberOfPost)
  
  }

  const [categoryChange, setcategoryChange] = useState('')
  
  const changeCategory = (event) => {
    let selectbtnCat = event.target.getAttribute("color");
    console.log(selectbtnCat)
    event.target.style.background= (selectbtnCat);
    event.preventDefault();

    let btnCat = event.target.getAttribute("value");
    setcategoryChange(btnCat)
    setnumberOfPost(0)
  }

  const [screenMode, setscreenMode] = useState("dark")
  const [modeText, setModeText] = useState("light")

  const handleScreenMode = ()=>{

    if (screenMode === "dark"){
      setscreenMode("light")
      setModeText("dark")
      document.getElementById("mainContainer").style.backgroundColor="white";

    }
    else {
      setscreenMode("dark")
      setModeText("light")
      document.getElementById("mainContainer").style.backgroundColor="black";
    }

  }
    return (
      <>
       <Navbar screenDisplayMode={handleScreenMode}/>

      <News numPostFunc={increasePost} numberOfPost={numberOfPost} textMode={modeText} postCategory={categoryChange} changeCategoryCLick={changeCategory} screenMode={screenMode}/>
      </>
         
    )

}

export default App;
