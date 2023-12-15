'use client'
import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
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
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full overflow-x-hidden ">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="image/empresa.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/empresa-1.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/empresa-2.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/empresa-3.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/empresa-4.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li>
              <img
                src="image/empresa-5.png"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}