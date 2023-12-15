"use client";
import React from "react";
import Link from "next/link";

const UbicacionHome = () => {
  return (
    <section className="flex w-full bg-transparent py-5 dark:bg-gray-900 justify-center items-center">
    <div className="flex z-0 justify-center items-center">
      <img className="w-[1100px] h-[514px] rounded-[35px]" src="image/map-home.png" alt="Ubicacion" />
    </div>

    <div className=" absolute  z-10 pt-80 pl-[530px]">
  <Link href="https://goo.gl/maps/7y8ySjZ2o8JvGv6U6" className="w-[190px] h-[45px]   rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white text-lg">
    Realizar una consulta
  </Link>
  
</div>

  </section>
  );
};

export default UbicacionHome;
