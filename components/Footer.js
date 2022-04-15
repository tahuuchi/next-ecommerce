import Link from 'next/link';
import Logo from '../public/logo.png';
import Image from 'next/image';
export default function Footer() {

    return (
        <div className="w-full py-8  border-t border-gray-200">
            <div className="container flex mx-auto justify-start">
                <a className="pr-4 w-18 h-14 flex items-center mr-8">
                    <Image src={Logo} width={50} alt="logo" className="object-contain" />
                </a>
                <div className="flex mr-16">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Terms of use</Link>
                        </li>
                        <li>
                            <Link href="/">Shipping & Returns</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Terms of use</Link>
                        </li>
                        <li>
                            <Link href="/">Shipping & Returns</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-8">
                <div className="btfooter w-full border-t border-gray-200 py-6">
                    <div className="flex justify-between">
                        <div className="flex-1">
                            © 2022 Vinamilk, Inc. All rights reserved.
                        </div>
                        <div className="flex-1 text-right">
                            Created by Eton
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}