import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import bannerBiquini from '../public/images/banner-biquini.png'
import bannerLingerie from '../public/images/banner lingerie.jpg'
import bannerPijama from '../public/images/banner-pijama.jpg'
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'


const Home: NextPage = () => {
  return (
    <>
      <Head>
       <title>Joia de Corpo</title>
      </Head>
      <Header>
        <div className="container mx-auto">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
              <Image src={bannerBiquini} width="1550" height="700"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle border-none  bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <Image src={bannerLingerie} width="1550" height="700"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide3" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
              <Image src={bannerPijama} width="1550" height="700"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
            </div>

            <div className="grid gap-4 my-6 mx-4 sm:mx-0 sm:grid-cols-1 md:grid-cols-3 ">
              <Link href={'/biquini'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerBiquini} width="500" height="300"></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white">BIQUÍNI </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
              <Link href={'/lingerie'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerLingerie} width="500" height="300"></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white">LINGERIE </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
              <Link href={'/pijama'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerPijama} width="500" height="300"></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white">PIJAMA </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
            </div>
            
        </div>
      </Header>
    </>
  )
}

export default Home
