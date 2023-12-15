import React from "react";
import CarruselServicio from "./CarruselServicio";

export default function HeaderServicio() {
 

  return (
    <>
      <header className="relative text-gray-400 body-font">
        <div className="relative w-full h-[700px]">
          <img
            src="image/ccc1.png"
            alt="background image"
            className="absolute inset-0 h-[700px] w-screen overflow-hidden"
          />
            <CarruselServicio/>
        </div>
      </header>
    </>
  );
}
