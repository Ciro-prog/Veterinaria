import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className=" md:ml-auto flex items-center m text-base justify-between z-10 bg-emerald-50 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  top-0 left-0 right-0 z-0">
        <img
          src="image/luffilogo-horizontal.png"
          className="flex mb-4 md:mb-0 w-52 h-12"
        />
      </div>
      <div className="flex container items-baseline justify-around ">
        <Link
          href="/sobreLuffi"
          className="text-cyan-700 text-1xl font-semibold font-inter mr-5 "
        >
          Sobre Luffi
        </Link>
        <Link
          href="/cuidadoySalud"
          className="text-cyan-700 text-1xl font-semibold font-inter mr-5"
        >
          Cuidado y Salud
        </Link>
        <Link
          href="/petshop"
          className="text-cyan-700 text-1xl font-extrabold font-inter mr-5"
        >
          Pets Shop
        </Link>
        <Link
          href="/contacto"
          className="w-[166px] h-[45px] rounded-[45px] border text-cyan-700 border-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:bg-cyan-700 hover:text-white  text-lg"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
