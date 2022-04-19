import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../../components/Header"
import Produto from '../../public/images/produto.png'

type Props = {
    slug: string
}

const Biquini = ({slug}: Props) => {

    console.log('SLUG:', slug)

    return (
       <>
            <Head>
                <title>Biquíni - Joia de Corpo</title>
            </Head>
            <Header>
                <div className="container mx-auto">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                        <figure className="">
                                <Image
                                    className="rounded-lg" 
                                    src={Produto} 
                                    alt='titulo'
                                    width={720}
                                    height={700}
                                    objectFit='contain'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fEOxHgAGnwJNrlOKngAAAABJRU5ErkJggg=='
                                />
                        </figure> 
                            <div>
                                <h1 className="text-2xl">Bota Coturno Segurança Preta</h1>
                                <h4 className="py-6 text-sm">Bota de Segurança ideal para trabalho pesado , Confeccionada em couro com o solado de borracha</h4>
                                <p className="font-semibold mb-2">Tamanhos Disponível</p>
                                <div className="flex">
                                    <div className="bg-pink-300 w-9 h-9 font-semibold text-gray-800 flex justify-center items-center rounded-md border border-pink-400 text-sm mr-2">P</div>
                                    <div className="bg-gray-200 w-9 h-9 font-semibold flex text-gray-400 justify-center items-center rounded-md border border-gray-400 text-sm mr-2">M</div>
                                    <div className="bg-pink-300 w-9 h-9 font-semibold text-gray-800 flex justify-center items-center rounded-md border border-pink-400 text-sm mr-2">G</div>
                                </div>
                                <button className="sm:btn-md btn mt-4 bg-pink-400 hover:bg-pink-500 border-none">Fazer pedido</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
       </>
    )
}

export default Biquini

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    const { slug }: any = params

    return {
        props: {
            slug
        }
    }
}