import React from "react";
import "./App.css";

function App() {
  let myRef = React.useRef(null)
  let cursorRef = React.useRef(null)
  React.useEffect(()=> {
    let myLinks = myRef.current.childNodes
    let myCursorClass = cursorRef.current
    console.log("mycursorClass",myCursorClass)

    window.addEventListener("mousemove",cursor)

    function cursor(e) {
      // console.log('The e',e)
      myCursorClass.style.top = e.pageY + 'px';
      myCursorClass.style.left = e.pageX + 'px';

    }
    myLinks.forEach((link)=> {
      link.addEventListener('mouseleave',()=> {
        myCursorClass.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
    link.addEventListener('mouseover',()=> {
      myCursorClass.classList.add('link-grow')
        link.classList.add('hovered-link')
    })

    })
  },[])
  return <div className='pa-container'>
    <div className="cursor" ref = {cursorRef}></div>
    <nav>
      <h1>Ma Dan</h1>
      <ul className='nav-links' ref={myRef}>
        <li>Home</li>
        <li>Projects</li>
        <li>My Vlogs</li>
        <li>Services</li>
      </ul>
    </nav>
  </div>
}

export default App;
