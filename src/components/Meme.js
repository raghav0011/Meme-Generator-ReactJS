import React from "react";

function Meme() {
  return (
    <div className="main--container">
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
    </div>
  );
}

export default Meme;
