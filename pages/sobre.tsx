import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import imgSobre from '../public/images/imgsobre.jpg'

const Company = () => {
    return (
        <>
        <Head>
            <title>Informações CAT INFO!</title>
        </Head>
        <Header>
            <div className="my-10 md:my-20">
                <div className="container mx-auto">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                            <h1 className="font-bold text-3xl my-4">CAT INFO</h1>
                            <p className="leading-normal mb-4">Os gatos, assim como todos os felinos, foram originados a partir da evolução do miacis, um mamífero predador, que habitou a Terra no Período Paleoceno, há aproximadamente 55 milhões de anos, época em que surgiram os mais antigos mamíferos carnívoros.[21] O primeiro felino identificado por meio de fósseis é o Dinictis, datado de 37 milhões de anos, do qual derivou o proailurus, ancestral comum de todos os gatos, o qual viveu há aproximadamente de 20 milhões de anos.</p>
                        </div>
                        <div className="md:w-1/2 md:py-6 text-center mx-6 sm:mx-0">
                            <Image
                                className="rounded-lg" 
                                src={imgSobre} 
                                alt={'sobre a empresa'} 
                                objectFit='cover'
                                width={720} 
                                height={410}
                                quality={100}
                                placeholder='blur'
                                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    </>
    )
}

export default Company