import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/logo.png'
import {useRouter} from 'next/router'
import Footer from './Footer'

type LayoutProps = {
    children: React.ReactNode;
 }

const Header = ({ children }: LayoutProps) => {

    const menuArray = [
        {href: '/', pathname: '/', name: 'Home'},
        {href: '/biquini', pathname: '/biquini', name: 'Biquíni'},
        {href: '/lingerie', pathname: '/lingerie', name: 'Lingerie'},
        {href: '/pijama', pathname: '/pijama', name: 'Pijama'},
        {href: '/sobre', pathname: '/sobre', name: 'Quem somos?'},
      ]
    

    const { asPath } = useRouter()

    return (
        <>
        <div className="drawer h-screen">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="flex flex-col drawer-content">
                <div className="w-full navbar bg-pink-300 ">
                    <div className="container mx-auto">
                        <div className="flex-none sm:hidden ">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap={'round'} strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            </label>
                        </div> 
                        <Link href={'/'}>
                            <a className="flex-none  sm:hidden ">
                                <Image src={Logo} alt='Logo' width={30} height={30} />
                            </a> 
                        </Link>
                        <div className="flex-1 px-2 mx-2">
                            <div className="items-stretch  hidden sm:flex justify-center mt-2">
                                <Link href={'/'}>
                                    <a className="flex-none mx-4 ">
                                        <Image src={Logo} alt='Logo' width={30} height={30} />
                                    </a> 
                                </Link>
                                {menuArray.map((menu, index) => (
                                    <Link key={index} href={menu.href}>
                                        <a className={`btn btn-ghost btn-sm font-medium rounded-btn no-animation mx-2 ${menu.href === asPath ? 'bg-pink-400' : ''}` }>
                                            {menu.name}
                                        </a> 
                                    </Link>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>
                {children}
                <Footer />
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="p-4 overflow-y-auto menu w-80 bg-pink-50">
                    {menuArray.map((menu, index) => (
                        <Link key={index} href={menu.href}>
                            <a className={`btn btn-ghost btn-sm font-medium rounded-btn no-animation ${menu.href === asPath ? 'bg-pink-500' : ''}` }>
                                {menu.name}
                            </a> 
                        </Link>
                    ))}               
                </ul>
            </div>
        </div>
        </>

    )
}

export default Header