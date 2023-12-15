'use client'
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import CardHeaderServicio from "./CardHeaderServicio"
import Link from "next/link"

export default function CarruselServicio() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 13000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full top-8">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden h-{490px}" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap pl-20  [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Link href="/id">
                <CardHeaderServicio
                  img="image/perroenfermo.jpg"
                  alt="Cuidado de perros"
                  title="Como saber si tu perro esta enfermo"
                  description="Reconocer si un perro está enfermo puede ser un desafío, ya que no pueden comunicar su malestar de la misma manera que los humanos. Sin embargo, hay varios signos y comportamientos que pueden indicar que un perro no se siente bien. Aquí hay algunos indicadores clave a tener en cuenta: "
                />
              </Link>
            </li>
            <li>
              <Link href="/id">
                <CardHeaderServicio
                  img="image/cuidados2.jpg"
                  alt="Cuidado de perros 2"
                  title="Cuando se vacuna tu amigo"
                  description="La frecuencia de vacunación en perros varía según la edad del animal, el tipo de vacuna, las leyes locales, y las recomendaciones del veterinario. A continuación, te proporciono un cronograma general de vacunación para perros, pero es importante recordar que este puede variar dependiendo de factores individuales y geográficos: "
                />
              </Link>
            </li>
            <li>
              <Link href="/id">
                <CardHeaderServicio
                  img="image/porquegato.jpg"
                  alt="Porque tener un gato"
                  title="Porque tener un gato"
                  description="Porque tener un gato es una de las mejores decisiones que puedes tomar. Los gatos son animales muy independientes, pero también son muy cariñosos y divertidos. Además, son muy limpios y no necesitan demasiados cuidados. "
                />
              </Link>
            </li>
            <li>
              <Link href="/id">
                <CardHeaderServicio
                  img="image/veterinaria.jpg"
                  alt="Cuidado de perros"
                  title="Como saber si tu perro esta enfermo"
                  description="Reconocer si un perro está enfermo puede ser un desafío, ya que no pueden comunicar su malestar de la misma manera que los humanos. Sin embargo, hay varios signos y comportamientos que pueden indicar que un perro no se siente bien. Aquí hay algunos indicadores clave a tener en cuenta: "
                />
              </Link>
            </li>
            <li>
              <Link href="/id">
                <CardHeaderServicio
                  img="image/porquegato.jpg"
                  alt="Cuidado de perros"
                  title="Como saber si tu perro esta enfermo"
                  description="Reconocer si un perro está enfermo puede ser un desafío, ya que no pueden comunicar su malestar de la misma manera que los humanos. Sin embargo, hay varios signos y comportamientos que pueden indicar que un perro no se siente bien. Aquí hay algunos indicadores clave a tener en cuenta: "
                />
              </Link>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 top-{-8rem} flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}