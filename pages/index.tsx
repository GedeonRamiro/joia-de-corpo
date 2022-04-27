import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import bannerBiquini from '../public/images/banner-biquini.png'
import bannerLingerie from '../public/images/banner lingerie.jpg'
import bannerPijama from '../public/images/banner-pijama.jpg'
import Link from 'next/link'
import { WiDirectionLeft } from 'react-icons/wi'
import * as prismic from '@prismicio/client'
import { client } from '../utils/prismic-configuration';
import { useRef, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


type Slides = {
  id: string,
  url: string,
  description: string
}

type Products = {
  id: string
  slug: string
  image: string
  name: string
  description: string
  price: string
  category: string
}

type Evaluations = {
    id: string
    image: string
    name: string
    description: string
    updateAt: string
}


type ContentPros = {
  slides: Slides[]
  products: Products[]
  evaluations: Evaluations[]
}

const Home: NextPage<ContentPros> = ( {slides, products, evaluations} ) => {

  const [slideActive, setSlideActive] = useState('')

  const carouselBiquini = useRef<HTMLElement>();
  const carouselLingerie = useRef<HTMLElement>();
  const carouselPijama = useRef<HTMLElement>();
  const carouselEvaluations = useRef<HTMLElement>();

  const handleLeftClick = (btn: string) => {
   
    if(carouselBiquini.current && btn === 'btn-biquini') {
      carouselBiquini.current.scrollLeft -= carouselBiquini.current.offsetWidth;
    }

    if(carouselLingerie.current && btn === 'btn-lingerie') {
      carouselLingerie.current.scrollLeft -= carouselLingerie.current.offsetWidth;
    }

    if(carouselPijama.current && btn === 'btn-pijama') {
      carouselPijama.current.scrollLeft -= carouselPijama.current.offsetWidth;
    }

    if(carouselEvaluations.current && btn === 'btn-evaluation') {
      carouselEvaluations.current.scrollLeft -= carouselEvaluations.current.offsetWidth;
    }
  };

  const handleRightClick = (btn: string) => {
  
    if(carouselBiquini.current && btn === 'btn-biquini') {
      carouselBiquini.current.scrollLeft += carouselBiquini.current.offsetWidth;
    }

    if(carouselLingerie.current && btn === 'btn-lingerie') {
      carouselLingerie.current.scrollLeft += carouselLingerie.current.offsetWidth;
    }

    if(carouselPijama.current && btn === 'btn-pijama') {
      carouselPijama.current.scrollLeft += carouselPijama.current.offsetWidth;
    }

    if(carouselEvaluations.current && btn === 'btn-evaluation') {
      carouselEvaluations.current.scrollLeft += carouselEvaluations.current.offsetWidth;
    }
  };

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
                     <Image className="rounded-b-lg" src={slide.url} alt={slide.description} width="1550" height="700" objectFit='cover'></Image>
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

            <div className="hidden sm:grid gap-4 my-0 sm:my-6 mx-4 sm:mx-0 sm:grid-cols-1 md:grid-cols-3">
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
              <div className="flex justify-between">
                <h4 className="text-lg sm:text-3xl">Biquíni</h4> 
                <div className="flex justify-end mb-2">
                    <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleLeftClick('btn-biquini')}>
                      <MdKeyboardArrowLeft />
                    </button>
                    <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleRightClick('btn-biquini')}>
                      <MdKeyboardArrowRight />
                    </button>
                </div>
              </div>
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden carousel" ref={carouselBiquini}>
                {products.filter(product => product.category === 'Biquini').map(product => (
                   <Link href={`/biquini/${product.slug}`} key={product.id}>
                    <div className="card snap-center w-80 flex-shrink-0 mr-2 cursor-pointer">
                      <figure><Image src={product.image} alt={product.name} width="320" height="180" objectFit='cover' /></figure>
                      <div className="card-body">
                        <h2 className="text-base font-bold">{product.name}</h2>
                        <p className='font-light text-sm'>{product.description ?.slice(0,50) + '...'}</p>
                        <span>R$ {product.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}     
              </div>
            </div> 


            <div className="grid grid-cols-1 mx-4 sm:mx-0 mt-4">
              <div className="flex justify-between">
                <h4 className="text-base sm:text-3xl">Lingerie</h4> 
                <div className="flex justify-end mb-2">
                    <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleLeftClick('btn-lingerie')}>
                      <MdKeyboardArrowLeft />
                    </button>
                    <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleRightClick('btn-lingerie')}>
                      <MdKeyboardArrowRight />
                    </button>
                </div>
              </div>
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden carousel" ref={carouselLingerie}>
                {products.filter(product => product.category === 'Lingerie').map(product => (
                  <Link href={`/lingerie/${product.slug}`} key={product.id}>
                    <div className="card snap-center w-80 flex-shrink-0 mr-2 cursor-pointer">
                      <figure><Image src={product.image} alt={product.name} width="320" height="180" objectFit='cover' /></figure>
                      <div className="card-body">
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p className='font-light text-sm'>{product.description ?.slice(0,50) + '...'}</p>
                        <span>R$ {product.price}</span>
                      </div>
                    </div>
                  </Link>   
                  ))}  
              </div>
            </div> 

            <div className="grid grid-cols-1 mx-4 sm:mx-0 mt-4">
            <div className="flex justify-between">
              <h4 className="text-base sm:text-3xl">Pijama</h4> 
              <div className="flex justify-end mb-2">
                  <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleLeftClick('btn-pijama')}>
                    <MdKeyboardArrowLeft />
                  </button>
                  <button className="bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl" onClick={() => handleRightClick('btn-pijama')}>
                    <MdKeyboardArrowRight />
                  </button>
              </div>
            </div>
              <div className='mb-4 mt-1 border border-b-gray-200'></div>
              <div className="snap-mandatory snap-x flex overflow-scroll overflow-y-hidden carousel" ref={carouselPijama}>
                {products.filter(product => product.category === 'Pijama').map(product => (
                   <Link href={`/pijama/${product.slug}`} key={product.id}>
                      <div className="card snap-center w-80 flex-shrink-0 mr-2 cursor-pointer">
                        <figure><Image src={product.image} alt={product.name} width="320" height="180" objectFit='cover' /></figure>
                        <div className="card-body">
                          <h2 className="text-lg font-bold">{product.name}</h2>
                          <p className='font-light text-sm'>{product.description ?.slice(0,50) + '...'}</p>
                          <span>R$ {product.price}</span>
                        </div>
                    </div>
                  </Link>
                  ))}      
              </div>
            </div> 

            <div className='my-20'>
              <h4 className="text-center font-semibold">DEPOIMENTOS DE CLIENTES</h4>

              <div className="snap-mandatory snap-x flex overflow-scroll   overflow-y-hidden carousel"  ref={carouselEvaluations}>
                
                {evaluations.map(evaluation => (
                  <div key={evaluation.id} className="card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg mt-10 mb-2 mx-4">
                    <div className="flex items-center">
                      <div className="avatar">
                        <div className="w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2">
                          <Image src={evaluation.image} alt={evaluation.name} width='80' height='80' objectFit='cover' />
                        </div>
                      </div>
                      <div className='ml-4'>
                        <h2 className='font-semibold'>{evaluation.name}</h2>
                        <p className='text-sm font-semibold'>{evaluation.updateAt}</p>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <p className='sm:text-base text-sm'>{evaluation.description}</p>
                    </div>
                  </div>
                ))}
                

              </div>
              <div className="flex justify-center">
                  <button className="text-gray-600 rounded-md sm:mx-1 text-3xl sm:text-5xl" onClick={() => handleLeftClick('btn-evaluation')}>
                    <MdKeyboardArrowLeft />
                  </button>
                  <button className="text-gray-600 rounded-md sm:mx-1 text-3xl sm:text-5xl" onClick={() => handleRightClick('btn-evaluation')}>
                    <MdKeyboardArrowRight />
                  </button>
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

  const resultProducts = await client.query(
    prismic.Predicates.at('document.type', 'produto')
  );

  const resultEvaluation = await client.query(
    prismic.Predicates.at('document.type', 'avaliacao')
  );

  const slides = resultSlide.results.map((data) => ({
    id: data.id,
    url: data.data.banner.url,
    description: data.data.descricao,

    }
  ))

  const products = resultProducts.results.map((data) => ({
    id: data.id,
    slug: data.uid,
    image: data.data['foto-produto'].url,
    name: data.data.nome,
    description: data.data.descricao,
    price: data.data.preco,
    category: data.data.categoria,

    }
  ))

  const evaluations = resultEvaluation.results.map((data) => ({
    id: data.id,
    image: data.data.foto.url,
    name: data.data.nome,
    description: data.data.comentario,
    updateAt: new Date(data.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }
  ))



  return {
    props: {
      slides,
      products,
      evaluations
    },
    revalidate: 60 * 30 // A cada 30min
  }

}
