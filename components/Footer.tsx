import Image from "next/image"
import Logo from '../public/images/logo.png'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'


const Footer = () => {

    const openWhatsapp = () => {
        window.open(`https://api.whatsapp.com/send?phone=${+5586988493319}&text=${'Olá, gostaria de saber como posso comprar o produto de vocês.' }`)
    }

    const openInstagram = () => {
        window.open("https://www.instagram.com/joiadecorpo/");
    }

    return (
      
            <footer className="footer footer-center p-10 bg-gray-800 text-primary-content">
                <div>
                    <Image src={Logo} alt='Logo' width={60} height={60} />
                    <p className="font-bold">
                        Joia de Corpo. Moda íntima
                    </p> 
                    <p>Copyright © 2022 - Todos os direitos reservados</p>
                </div> 
                <div>
                    <div className="grid grid-flow-col gap-4">
                       <RiWhatsappFill onClick={openWhatsapp} className='text-3xl cursor-pointer' />
                       <RiInstagramFill onClick={openInstagram} className='text-3xl cursor-pointer' />
                    </div>
                </div>
        </footer>
       
    )
}

export default Footer