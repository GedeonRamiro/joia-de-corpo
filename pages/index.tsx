import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import bannerBiquini from '../public/images/banner-biquini.png';
import bannerLingerie from '../public/images/banner lingerie.jpg';
import bannerPijama from '../public/images/banner-pijama.jpg';
import Link from 'next/link';
import { WiDirectionLeft } from 'react-icons/wi';
import * as prismic from '@prismicio/client';
import { client } from '../utils/prismic-configuration';
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import formatReal from '../utils/formatCurrent';
import Caroseul from '../components/Caroseul';
import SlideProduct from '../components/SlideProdutcs';

type Slides = {
    id: string;
    url: string;
    description: string;
};

type Products = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description: string;
    price: string;
    category: string;
};

type Evaluations = {
    id: string;
    image: string;
    name: string;
    description: string;
    updateAt: string;
};

type ContentPros = {
    slides: Slides[];
    products: Products[];
    evaluations: Evaluations[];
};

const Home: NextPage<ContentPros> = ({ slides, products, evaluations }) => {
    const carouselEvaluations = useRef<HTMLDivElement>(null);

    const handleLeftClick = (btn: string) => {
        if (carouselEvaluations.current && btn === 'btn-evaluation') {
            carouselEvaluations.current.scrollLeft -= carouselEvaluations.current.offsetWidth;
        }
    };

    const handleRightClick = (btn: string) => {
        if (carouselEvaluations.current && btn === 'btn-evaluation') {
            carouselEvaluations.current.scrollLeft += carouselEvaluations.current.offsetWidth;
        }
    };

    return (
        <>
            <Head>
                <title>Joia de Corpo</title>
            </Head>
            <Header>
                <div className='container mx-auto'>
                    <Caroseul slides={slides} />

                    <div className='hidden sm:grid gap-4 my-0 sm:my-6 mx-4 sm:mx-0 sm:grid-cols-1 md:grid-cols-3'>
                        <Link href={'/biquini'}>
                            <a className='border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm'>
                                <Image
                                    className='rounded-t-lg'
                                    src={bannerBiquini}
                                    width='500'
                                    height='300'
                                    objectFit='cover'
                                ></Image>
                                <div className='flex justify-center items-center'>
                                    <p className='text-center text-sm sm:text-base my-1 font-bold text-white'>
                                        BIQUÍNI{' '}
                                    </p>
                                    <WiDirectionLeft className='text-white rotate-180 ml-2' />
                                </div>
                            </a>
                        </Link>
                        <Link href={'/lingerie'}>
                            <a className='border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm'>
                                <Image
                                    className='rounded-t-lg'
                                    src={bannerLingerie}
                                    width='500'
                                    height='300'
                                    objectFit='cover'
                                ></Image>
                                <div className='flex justify-center items-center'>
                                    <p className='text-center text-sm sm:text-base my-1 font-bold text-white'>
                                        LINGERIE{' '}
                                    </p>
                                    <WiDirectionLeft className='text-white rotate-180 ml-2' />
                                </div>
                            </a>
                        </Link>
                        <Link href={'/pijama'}>
                            <a className='border-b rounded-lg bg-gradient-to-r from-pink-400 to-pink-300 shadow-sm'>
                                <Image
                                    className='rounded-t-lg'
                                    src={bannerPijama}
                                    width='500'
                                    height='300'
                                    objectFit='cover'
                                />
                                <div className='flex justify-center items-center'>
                                    <p className='text-center text-sm sm:text-base my-1 font-bold text-white'>
                                        PIJAMA{' '}
                                    </p>
                                    <WiDirectionLeft className='text-white rotate-180 ml-2' />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <SlideProduct name='Biquíni' category='Biquini' products={products} />
                    <SlideProduct name='Lingerie' category='Lingerie' products={products} />
                    <SlideProduct name='Pijama' category='Pijama' products={products} />

                    <div className='my-20'>
                        <h4 className='text-center font-semibold'>DEPOIMENTOS DE CLIENTES</h4>

                        <div
                            className='snap-mandatory snap-x flex overflow-scroll   overflow-y-hidden carousel'
                            ref={carouselEvaluations}
                        >
                            {evaluations.map((evaluation) => (
                                <div
                                    key={evaluation.id}
                                    className='card snap-center flex-shrink-0 mr-2 w-80 border p-4 rounded-lg mt-10 mb-2 mx-4'
                                >
                                    <div className='flex items-center'>
                                        <div className='avatar'>
                                            <div className='w-20 rounded-full ring ring-pink-200 ring-offset-base-100 ring-offset-2'>
                                                <Image
                                                    src={evaluation.image}
                                                    alt={evaluation.name}
                                                    width='80'
                                                    height='80'
                                                    objectFit='cover'
                                                />
                                            </div>
                                        </div>
                                        <div className='ml-4'>
                                            <h2 className='font-semibold'>{evaluation.name}</h2>
                                            <p className='text-sm font-semibold'>
                                                {evaluation.updateAt}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <p className='sm:text-base text-sm'>
                                            {evaluation.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <button
                                className='text-gray-600 rounded-md sm:mx-1 text-3xl sm:text-5xl'
                                onClick={() => handleLeftClick('btn-evaluation')}
                            >
                                <MdKeyboardArrowLeft />
                            </button>
                            <button
                                className='text-gray-600 rounded-md sm:mx-1 text-3xl sm:text-5xl'
                                onClick={() => handleRightClick('btn-evaluation')}
                            >
                                <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </Header>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const resultSlide = await client.query(prismic.Predicates.at('document.type', 'slide'));

    const resultProducts = await client.query(prismic.Predicates.at('document.type', 'produto'));

    const resultEvaluation = await client.query(
        prismic.Predicates.at('document.type', 'avaliacao')
    );

    const slides = resultSlide.results.map((data) => ({
        id: data.id,
        url: data.data.banner.url,
        description: data.data.descricao,
    }));

    const products = resultProducts.results.map((data) => ({
        id: data.id,
        slug: data.uid,
        image: data.data['foto-produto'].url,
        name: data.data.nome,
        description: data.data.descricao,
        price: data.data.preco,
        category: data.data.categoria,
    }));

    const evaluations = resultEvaluation.results.map((data) => ({
        id: data.id,
        image: data.data.foto.url,
        name: data.data.nome,
        description: data.data.comentario,
        updateAt: new Date(data.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
    }));

    return {
        props: {
            slides,
            products,
            evaluations,
        },
        revalidate: 60 * 30, // A cada 30min
    };
};
