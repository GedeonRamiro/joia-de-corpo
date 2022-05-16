import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import formatReal from '../utils/formatCurrent';

type Products = {
    id: string;
    slug: string;
    image: string;
    name: string;
    description: string;
    price: string;
    category: string;
};

type ContentPros = {
    products: Products[];
    category: string;
    name: string;
};

const SlideProduct = ({ products, category, name }: ContentPros) => {
    const carouselProducts = useRef<HTMLDivElement>(null);

    const handleLeftClick = (btn: string) => {
        if (carouselProducts.current && btn === category) {
            carouselProducts.current.scrollLeft -= carouselProducts.current.offsetWidth;
        }
    };

    const handleRightClick = (btn: string) => {
        if (carouselProducts.current && btn === category) {
            carouselProducts.current.scrollLeft += carouselProducts.current.offsetWidth;
        }
    };

    return (
        <div className='grid grid-cols-1 mx-4 sm:mx-0 mt-4'>
            <div className='flex justify-between'>
                <h4 className='text-lg sm:text-3xl'>{name}</h4>
                <div className='flex justify-end mb-2'>
                    <button
                        className='bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl'
                        onClick={() => handleLeftClick(category)}
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    <button
                        className='bg-gray-200 text-gray-600 rounded-md mx-1 p-1 text-xl sm:text-2xl'
                        onClick={() => handleRightClick(category)}
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <div className='mb-4 mt-1 border border-b-gray-200'></div>
            <div
                className='snap-mandatory snap-x flex overflow-scroll overflow-y-hidden carousel'
                ref={carouselProducts}
            >
                {products
                    .filter((product) => product.category === category)
                    .map((product) => (
                        <Link href={`/${category.toLowerCase()}/${product.slug}`} key={product.id}>
                            <div className='card snap-center w-80 flex-shrink-0 mr-2 cursor-pointer'>
                                <figure>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width='320'
                                        height='180'
                                        objectFit='cover'
                                    />
                                </figure>
                                <div className='card-body'>
                                    <h2 className='text-base font-bold'>{product.name}</h2>
                                    <p className='font-light text-sm'>
                                        {product.description?.slice(0, 50) + '...'}
                                    </p>
                                    <span className='text-xl font-bold'>
                                        {formatReal(Number(product.price))}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default SlideProduct;
