import React, { useState, useEffect } from "react";

export function RanColor() {
  //useState
  const [color, setColor] = useState([0, 0, 0]);
  //useEffect
  useEffect(() => {
    const colorElem = document.querySelector(".rgb");
    colorElem.style.color = `rgb(${color.join(",")})`;
  });
  const handleRandom = () => {
    setColor(
      color.map(() => {
        return Math.floor(Math.random() * 256);
      })
    );
  };

  return (
    <div>
      <p className="rgb">Random Today Color (RGB) 🎨 : {color.join(",")}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}
