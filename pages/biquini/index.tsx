import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Header from "../../components/Header"
import imgSobre from '../../public/images/imgsobre.jpg'
import bannerBiquini from '../../public/images/banner-categoria.png'

const Biquini = () => {
    return (
        <>
            <Head>
                <title>Biquíni - Joia de Corpo</title>
            </Head>
            <Header>
            <div className="container mx-auto">
                <div className='flex justify-center mt-10'>
                    <Image src={bannerBiquini} 
                    className=""                     
                    alt='titulo'
                    width={844}
                    height={167}
                    quality={100}/>
                </div>
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold mt-10">BIQUÍNI</h2>
                    <p className="text-center sm:text-base text-sm sm:mx-0 mx-2">Veja aqui toda linha de produtos dedicados as mulheres que procuram além do charme, tendências e qualidade que podemos oferecer.</p>
                <div className="grid gap-2 sm:gap-6 my-10 md:my-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                    <div className="card text-center sm:shadow-2xl sm:mx-2" key='img'>
                        <figure className="px-2">
                                <Image
                                    className="rounded-lg" 
                                    src={imgSobre} 
                                    alt='titulo'
                                    width={720}
                                    height={410}
                                    objectFit='cover'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                                <div className="flex-col flex justify-between">
                                    <div>
                                        <h2 className="text-center text-xl font-semibold mt-2">R$ 54,90</h2> 
                                        <p className='my-2 text-sm sm:text-base'>{'Camisa azul Polo Azul + Branco - Tamanho G'?.slice(0,50) + '...'}</p>
                                    </div>
                                    <div className="justify-center card-actions mb-4">
                                        <Link href={`/biquini`}>
                                            <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                        </Link>
                                    </div>
                                </div>
                    </div> 
                </div>
            </div>        
            </Header>
        </>
    )
}   

export default Biquini