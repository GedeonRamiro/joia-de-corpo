import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
              <Image src={bannerBiquini} width="1550" height="700" objectFit='cover'></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle border-none  bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <Image src={bannerLingerie} width="1550" height="700" objectFit='cover'></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide3" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
              <Image src={bannerPijama} width="1550" height="700" objectFit='cover'></Image>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❮</a> 
                  <a href="#slide1" className="btn btn-circle border-none bg-pink-500 hover:bg-pink-300">❯</a>
                </div>
              </div> 
            </div>

            <div className="grid gap-4 my-6 mx-4 sm:mx-0 sm:grid-cols-1 md:grid-cols-3 ">
              <Link href={'/biquini'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerBiquini} width="500" height="300" objectFit='cover'></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white">BIQUÍNI </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
              <Link href={'/lingerie'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerLingerie} width="500" height="300" objectFit='cover'></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white" >LINGERIE </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
              <Link href={'/pijama'}>
                <a className="border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm">
                  <Image className='rounded-t-lg' src={bannerPijama} width="500" height="300" objectFit='cover'></Image>
                  <div className='flex justify-center items-center'>
                    <p className="text-center text-sm sm:text-base my-1 font-bold text-white">PIJAMA </p>
                      <WiDirectionLeft className='text-white rotate-180 ml-2' />
                  </div>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 mx-4 sm:mx-0 mt-4">
              <h4 className="text-lg sm:text-3xl">Biquíni</h4> 
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden ">
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
               
              </div>
            </div> 

            <div className="grid grid-cols-1 mx-4 sm:mx-0 mt-4">
              <h4 className="text-lg sm:text-3xl">Lingerie</h4> 
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden ">
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
               
              </div>
            </div> 

            <div className="grid grid-cols-1 mx-4 sm:mx-0 mt-4">
              <h4 className="text-lg sm:text-3xl">Pijama</h4> 
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden ">
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
                <div className="card snap-center w-80 flex-shrink-0 mr-2">
                  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">Shoes!</h2>
                    <p className='font-light text-sm'>If a dog chews shoes whose shoes does he choose?</p>
                    <span>R$ 89,90</span>
                  </div>
                </div>
               
              </div>
            </div> 

            <div className='my-20'>
              <h4 className="text-center font-semibold">DEPOIMENTOS DE CLIENTES</h4>

              <div className="snap-mandatory snap-x flex sm:justify-center overflow-scroll overflow-y-hidden ">
                <div className="card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg my-10 mx-4">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h2 className='font-semibold'>Maria das Graças</h2>
                      <p className='text-sm font-semibold'>21/03/2022</p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='text-base'>Bota Treino Academia Sneaker Fitness Nude em Couro Legítimo</p>
                  </div>
                </div>

                <div className="card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg my-10 mx-4">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h2 className='font-semibold'>Maria das Graças</h2>
                      <p className='text-sm font-semibold'>21/03/2022</p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='text-base'>Bota Treino Academia Sneaker Fitness Nude em Couro Legítimo</p>
                  </div>
                </div>
                <div className="card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg my-10 mx-4">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h2 className='font-semibold'>Maria das Graças</h2>
                      <p className='text-sm font-semibold'>21/03/2022</p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='text-base'>Bota Treino Academia Sneaker Fitness Nude em Couro Legítimo</p>
                  </div>
                </div>
                <div className="card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg my-10 mx-4">
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h2 className='font-semibold'>Maria das Graças</h2>
                      <p className='text-sm font-semibold'>21/03/2022</p>
                    </div>
                  </div>
                  <div className='mt-4'>
                    <p className='text-base'>Bota Treino Academia Sneaker Fitness Nude em Couro Legítimo</p>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
        
       
      </Header>
    </>
  )
}

export default Home
