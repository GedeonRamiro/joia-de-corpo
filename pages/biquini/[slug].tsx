import { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../../components/Header"
import { client } from '../../utils/prismic-configuration';
import { RiWhatsappFill } from 'react-icons/ri'
import formatReal from "../../utils/FormatCurrent";
import { useState } from "react";


type Product = {
    id: string
    slug: string
    image: string
    name: string
    description: string
    price: string
    category: string
    pieceSize:[
       { size: string, active: boolean}
    ]
  }

  type ContentPros = {
    product: Product
  }



const Biquini = ( {product}: ContentPros) => {

    const [sizeProduct, setSizeProduct] = useState('')
     
    const buttonAction = (size: string) => {
        setSizeProduct(size)
    }
    
    const openWhatsapp = (product: Product) => {
        const url = window.location.href;
        window.open(`https://api.whatsapp.com/send?phone=${+5586988493093}
                    &text='Olá, fiquei interessado no produto: 
                    ${product.name} - 
                    ${formatReal(Number(product.price))} - 
                    Tamanho: ${sizeProduct} - 
                    ${url} '`
        )
    }

    return (
       <>
            <Head>
                <title>Biquíni - Joia de Corpo</title>
            </Head>
            <Header>
                <div className="container mx-auto">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                        <figure className="rounded-lg">
                                <Image
                                    className="rounded-lg w-32" 
                                    src={product.image} 
                                    alt={product.name}
                                    width={700}
                                    height={700}
                                    objectFit='contain'
                                    quality={100}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8J1k1GwAFHAH+8T2VRwAAAABJRU5ErkJggg==' />  
                        </figure> 
                            <div>
                                <h1 className="text-2xl">{product.name}</h1>
                                <h4 className="pt-6 pb-2 text-sm">{product.description}</h4>
                                <span className='text-2xl font-bold'>{formatReal(Number(product.price))}</span>
                                <p className="font-semibold my-2">Tamanhos Disponível</p>
                                <div className="flex">
                                    {product.pieceSize && product.pieceSize.map((size, index) => (
                                        size.active === true ? (
                                            <button onClick={() => buttonAction(size.size)} key={index} className={` ${sizeProduct === size.size ? 'bg-pink-400 border-none' : ''} cursor-pointer w-9 h-9 font-semibold text-gray-800 flex justify-center items-center rounded-md border border-gray-400 text-sm mr-2`}>{size.size}</button>
                                        ) : (
                                            <button key={index} className="bg-gray-200 cursor-default w-9 h-9 font-semibold flex text-gray-400 justify-center items-center rounded-md border border-gray-400 text-sm mr-2">{size.size}</button>
                                        )
                                    ))}
                                </div>
                                
                                <button onClick={() => openWhatsapp(product)} className={`sm:btn-md btn mt-4 bg-pink-400 hover:bg-pink-500 border-none ${sizeProduct ? '' : 'btn-disabled'}`}>
                                    <RiWhatsappFill className="text-2xl mr-2" />
                                    Fazer pedido
                                </button> 
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

    try {
        const resultProduct = await client.getByUID('produto', String(slug), {})
        
        const product = {
            image: resultProduct.data['foto-produto'].url,
            name: resultProduct.data.nome,
            description: resultProduct.data.descricao,
            price: resultProduct.data.preco,
            category: resultProduct.data.categoria,
            pieceSize: [
               { size: 'P' ,active: resultProduct.data['tamanho-p']},
               { size: 'M' ,active: resultProduct.data['tamanho-m']},
               { size: 'G' ,active: resultProduct.data['tamanho-g']},
            ]
        
        }
          
        return {
            props: {
                product,
            }
          
        }
        
    } catch (error) {
        if(error) {
            return {
              redirect: {
                permanent: false,
                destination: '/'
              }
            }
          }
    }

    return {
        props: {
           
        }
    }
}