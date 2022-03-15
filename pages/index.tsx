import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import bannerBiquini from '../public/images/banner-biquini.png'
import bannerLingerie from '../public/images/banner lingerie.jpg'
import bannerPijama from '../public/images/banner-pijama.jpg'


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
              <Image src={bannerBiquini} width="1550" height="500"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle border-none  bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <Image src={bannerLingerie} width="1550" height="500"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide3" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
              <Image src={bannerPijama} width="1550" height="500"></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
            </div>
        </div>
      </Header>
    </>
  )
}

export default Home
