import Link from 'next/link';
import Image from 'next/image'

export default function Product() {
    const loop = Array.from(Array(12).keys());

    return (
        <div className="pageContent container mx-auto">
            <div className="listProduct mt-8 flex">
                <div className="left-col flex-1 md:w-1/6">
                    <div className="blockL">
                        <h2 className="font-medium text-lg py-2">All categories</h2>
                        <ul>
                            <li><Link href={`/categories/1`}>Sữa chua có đường</Link></li>
                            <li className="active"><Link href={`/categories/2`}>Sữa đặc có đường</Link></li>
                            <li><Link href={`/categories/3`}>Sữa tươi có đường</Link></li>
                        </ul>
                    </div>
                    <div className="blockL pt-10">
                        <h2 className="font-medium text-lg py-2">All tags</h2>
                        <ul>
                            <li><Link href={`/categories/1`}>Ít béo</Link></li>
                            <li><Link href={`/categories/2`}>Ít đường</Link></li>
                            <li><Link href={`/categories/3`}>Sữa chua</Link></li>
                            <li><Link href={`/categories/3`}>Sữa đặc</Link></li>
                            <li><Link href={`/categories/3`}>Sữa bột</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="center-col flex md:w-4/6">
                    <div className="px-8">
                        <div className="results w-full pb-10">Showing 12 results</div>
                        <div className="list w-full">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {loop.map((val) => {
                                    return (
                                        <div className="box border border-gray-300 p-4" key={`related-${val}`}>
                                            <Link href={`/product/1`} passHref>
                                                <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-tuoi-vinamilk/wp-content/themes/suanuoc/tpl/sua-nuoc-100/images/package/packshot-dau.png" alt="Product 1" width={300} height={250} />
                                            </Link>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-col flex md:w-1/6">
                    <div className="blockL pt-10">
                        <h2 className="font-medium text-lg py-2">Relevance</h2>
                        <ul>
                            <li><Link href={`/categories/1`}>Thứ tự a-z</Link></li>
                            <li><Link href={`/categories/2`}>Thứ tự z-a</Link></li>
                            <li><Link href={`/categories/3`}>Giá giảm dần</Link></li>
                            <li><Link href={`/categories/3`}>Giá tăng dần</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}