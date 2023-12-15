'use client'
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import Link from "next/link"

export default function CarouselProducts() {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 10000,
      animationTimingFunc: "linear",
      perView: 4, // Display 4 products in the slider
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Product carousel --> */}
      <div className="glide-08 relative w-full overflow-x-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="image/product-1.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/product-2.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/product-3.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/product-4.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/product-5.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/product-3.png"
                className="m-auto h-25 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Product carousel --> */}
      <Link  href ="/products" className="absolute w-auto h-[25px] rounded-[45px] border p-4 text-white border-cyan-700 bg-cyan-700 text-center justify-center inline-flex items-center focus:outline-none hover:scale-125 hover:text-white  text-lg top-[57rem] right-8"> Nuestros productos</Link>    </>
  )
}