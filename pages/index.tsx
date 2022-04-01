import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bannerBiquini from '../public/images/banner-biquini.png'
import bannerLingerie from '../public/images/banner lingerie.jpg'
import bannerPijama from '../public/images/banner-pijama.jpg'
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'
import * as prismic from '@prismicio/client'
import { client } from '../utils/prismic-configuration';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Slides = {
  id: string,
  url: string,
  description: string
}

type ContentPros = {
  slides: Slides[]
}

const Home: NextPage<ContentPros> = ( {slides} ) => {

  const [slideActive, setSlideActive] = useState('')
  console.log(slideActive)
  
  return (
    <>
      <Head>
       <title>Joia de Corpo</title>
      </Head>
      <Header>
        <div className="container mx-auto">   
            <div className="carousel w-full">
              {slides.map((slide, index) =>(
                 <div id={`item${index + 1}`} className="carousel-item w-full" key={slide.id}>
                     <Image src={slide.url} alt={slide.description} width="1550" height="700" objectFit='cover'></Image>
                 </div> 
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
               {slides.map((slide, index) =>(
                  <a 
                    onClick={() => setSlideActive(`#item${index + 1}`)} 
                    href={`#item${index + 1}`} 
                    key={slide.id} 
                    className={`btn btn-xs sm:btn-sm btn-circle ${slideActive === `#item${index + 1}` ?  'bg-pink-400 border-pink-300 border-2' : ''} `}>
                      {index + 1}
                  </a> 
                ))}
            </div>

            <div className="grid gap-4 my-0 sm:my-6 mx-4 sm:mx-0 sm:grid-cols-1 md:grid-cols-3 ">
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

export const getStaticProps: GetStaticProps = async () => {

  const resultSlide = await client.query(
    prismic.Predicates.at('document.type', 'slide')
  );

  const produto = await client.query(
    prismic.Predicates.at('document.type', 'produto')
  );

  const slides = resultSlide.results.map((data) => ({
    id: data.id,
    url: data.data.banner.url,
    description: data.data.descricao,

    }
  ))

  //console.log('SLIDE', slide);
  //console.log('PRODUTO', produto.results);


  return {
    props: {
      slides
    }
  }

}
