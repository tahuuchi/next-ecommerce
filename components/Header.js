import Link from 'next/link';
import Logo from '../public/logo.png';
import Image from 'next/image';
export default function Header() {

    return (
        <div className="headerWrapper border-b border-gray-300 shadow-sm">
            <div className="nav text-gray-800">
                <a className="pr-4 w-18 h-14 flex items-center">
                    <Image src={Logo} width={100} alt="logo" className="object-contain" />
                </a>
                {/* menu */}
                <nav className="flex flex-1">
                    <ul className="menu">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* search input */}
                <div className="search border border-gray-200 px-2 py-2 relative flex flex-1 items-center">
                    <input className="searchInput w-full" />
                    <span className="absolute top-1 right-0.5">
                        <svg className="w-8 text-gray-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                    </span>
                </div>
                {/* cart and user */}
                <div className="flex flex-1 justify-end">
                    <span className="px-4">
                        <div className="relative">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" stroke="currentColor"><path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 5H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span className="numberCart">1</span>
                        </div>
                    </span>
                    <span className="px-4">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 2.61C20.3292 2.099 19.7228 1.69365 19.0554 1.41708C18.3879 1.14052 17.6725 0.998175 16.95 0.998175C16.2275 0.998175 15.5121 1.14052 14.8446 1.41708C14.1772 1.69365 13.5708 2.099 13.06 2.61L12 3.67L10.94 2.61C9.9083 1.57831 8.50903 0.998709 7.05 0.998709C5.59096 0.998709 4.19169 1.57831 3.16 2.61C2.1283 3.64169 1.54871 5.04097 1.54871 6.5C1.54871 7.95903 2.1283 9.35831 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60536C22.3095 7.9379 22.4518 7.22249 22.4518 6.5C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72719 21.351 3.12076 20.84 2.61V2.61Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                    <span className="px-4">
                        <a href="" className="bg-green-700 rounded-full w-6 h-6 inline-block"></a>
                    </span>

                </div>
            </div>
        </div>
    )
}