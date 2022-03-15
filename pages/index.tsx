import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import bannerBiquini from '../public/images/banner-biquini.png'
import bannerLingerie from '../public/images/banner lingerie.jpg'
import bannerPijama from '../public/images/banner-pijama.jpg'


const Home: NextPage = () => {
  return (
    <>
      <Head>
       <title>Joia de Corpo</title>
      </Head>
      <Header>
        <div className="container mx-auto">
            <Image src={bannerBiquini} width="1700" height="429"></Image>
            <Image src={bannerLingerie} width="1700" height="429"></Image>
            <Image src={bannerPijama} width="1700" height="429"></Image>
        </div>
      </Header>
    </>
  )
}

export default Home
