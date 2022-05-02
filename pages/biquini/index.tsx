import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Header from "../../components/Header"
import bannerBiquini from '../../public/images/banner-categoria.png'
import { GetServerSideProps } from "next"
import * as prismic from '@prismicio/client'
import { client } from '../../utils/prismic-configuration';
import formatReal from "../../utils/FormatCurrent"

type Products = {
    id: string
    slug: string
    image: string
    name: string
    description: string
    price: string
    category: string
  }

  type ContentPros = {
    products: Products[]
  }

const Biquini = ( {products}: ContentPros ) => {
    
    return (
        <>
            <Head>
                <title>Biquíni - Joia de Corpo</title>
            </Head>
            <Header>
            <div className="container mx-auto">
                <div className='flex justify-center mt-10 mx-4 sm:mx-0'>
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
                    {products && products.map(product => (
                         <div className="card text-center sm:shadow-2xl sm:mx-2" key={product.id}>
                         <figure className="px-2">
                                 <Image
                                     className="rounded-lg" 
                                     src={product.image} 
                                     alt={product.name}
                                     width={720}
                                     height={410}
                                     objectFit='cover'
                                     quality={100}
                                     placeholder='blur'
                                     blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8J1k1GwAFHAH+8T2VRwAAAABJRU5ErkJggg==' />                         </figure> 
                                 <div className="flex-col flex justify-between">
                                     <div>
                                         <h2 className="text-center text-xl font-semibold mt-2">{formatReal(Number(product.price))}</h2> 
                                         <p className='my-2 text-sm sm:text-base'>{product.description ?.slice(0,50) + '...'}</p>
                                     </div>
                                     
                                     <div className="justify-center card-actions mb-4">
                                         <Link href={`/biquini/${product.slug}`}>
                                             <button className="sm:btn-md btn btn-sm bg-pink-400 hover:bg-pink-500 border-none">Comprar</button> 
                                         </Link>
                                     </div>
                                 </div>
                     </div> 

                    ))}
                   
                </div>
            </div>        
            </Header>
        </>
    )
}   

export default Biquini

export const  getServerSideProps: GetServerSideProps = async () => {
    
    const resultProducts = await client.query(
        prismic.Predicates.at('document.type', 'produto'),
      );

    const products = resultProducts.results.map((data) => ({
            id: data.id,
            slug: data.uid,
            image: data.data['foto-produto'].url,
            name: data.data.nome,
            description: data.data.descricao,
            price: data.data.preco,
            category: data.data.categoria,
        }
    )).filter((data) => data.category === 'Biquini')

    
    return {
        props: {
            products
        }
    }
}