import React from "react";

function App2() {
    const myRef = React.useRef(null)
  React.useEffect(() => {
    // const { top } = myRef.getBoundingClientRect();
    // document.addEventListener("mousemove", (event) => {
    //   console.log("My Events", event);
    // });
    // window.addEventListener('scroll', (event)=> {
    //     console.log("My Events", event.target);
    // });
    // console.log("my div-4 value",top)
  });
  const handleScroll = (e)=> {
   
        const tempButton = e.target.getBoundingClientRect();
        const page = e.target.textContent
        console.log("The e value",page)
        console.log("The tempButton value",tempButton)

  }
  return (
    <div className="div-container">
      <div className="div-box div-1">
        <h2>Learn Animation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea
          ipsa odio ab incidunt minima repudiandae voluptate et rerum veniam,
          reprehenderit repellendus hic beatae eos ratione excepturi vitae
          itaque rem.
        </p>
      </div>
      <div className="div-box div-2">
        <div className="div-2__paragraph">
          <div>
            <h2>This is heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur unde esse dolor repellendus sunt minima, debitis
              vitae. Quidem a aut ad consequatur, reprehenderit.
            </p>
          </div>
          <div>
            <h2>This is heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur unde esse dolor repellendus sunt minima, debitis
              vitae. Quidem a aut ad consequatur, reprehenderit.
            </p>
          </div>
        </div>
      </div>
      <div className="div-box div-3">
      <h2>Learn Animation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ea
          ipsa odio ab incidunt minima repudiandae voluptate et rerum veniam,
          reprehenderit repellendus hic beatae eos ratione excepturi vitae
          itaque rem.
        </p>
      </div>
      <div className="div-box div-4" ref = {myRef} onMouseMove={handleScroll}>div-4</div>
      <div className="div-box div-5">div-5</div>
      <div className="div-box div-6">div-6</div>
      <div className="div-box div-7">div-7</div>
      <div className="div-box div-8">div-8</div>
      <div className="div-box div-9">div-9</div>
      <div className="div-box div-10">div-10</div>
    </div>
  );
}

export default App2;
