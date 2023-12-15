import Carousel from "@/components/Carrusel"
import Header from "@/components/Header"
import CarouselProducts from "@/components/CarouselProducts"
import CardHome from "@/components/CardHome"
import UbicacionHome from "@/components/UbicacionHome"
import {Footer} from "@/components/Footer"

const images = [ {
  src: 'image/empresa.png',
  alt: 'Empresa',
},
{
  src: 'image/empresa-1.png',
  alt: 'Empresa',
},
{
  src: 'image/empresa-2.png',
  alt: 'Empresa',

},
{
  src: 'image/empresa-3.png',
  alt: 'Empresa',

},
{
  src: 'image/empresa-4.png',
  alt: 'Empresa',

},]
export default function Home() {
  return (
    <>
      <div>
      <Header />

      <img src="image/ccc3.png" alt="ccc" className="w-full h-auto absolute object-fill"/>
      <Carousel images={images}/>
      <CarouselProducts/>
      </div>
      <div>
      <img src="image/ccc2.png" alt="ccc" className="w-full h-[1200px] absolute object-fill"/>
      <CardHome/>
      <UbicacionHome/>
      </div>
    </>
  )
}
