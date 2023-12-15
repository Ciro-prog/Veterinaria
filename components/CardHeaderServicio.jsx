import React from "react";
export default function CarruselServicio({img, alt,title, description}) {

return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-64" src={img} alt={alt}/>
    <div className="px-6 py-4">
      <div className="font-bold text-black text-xl mb-2">{title}</div>
      <p className="text-black text-base">
        {description}
      </p>
    </div>
  </div>

    );
    }

