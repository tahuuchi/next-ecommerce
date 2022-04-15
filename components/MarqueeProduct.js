import Link from 'next/link';
import Image from 'next/image'

export default function MarqueeProduct() {
    return (
        <div className="wrapMarqueeProduct">
            <div className="product">
                <Link href="/product" passHref>
                    <div className="blockP">
                        <div className="productName">
                            <div className="pName"><span>Sữa chua vinamilk 1</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-3-detail.png" alt="Product 1" width={360} height={200} />
                    </div>
                </Link>
            </div>
            <div className="product">
                <Link href="/product" passHref>
                    <div className="blockP">
                        <div className="productName">
                            <div className="pName"><span>Sữa chua vinamilk 2</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-tuoi-vinamilk/wp-content/themes/suanuoc/tpl/sua-nuoc-100/images/package/packshot-dau.png" alt="Product 1" width={360} height={200} />
                    </div>
                </Link>
            </div>
            <div className="product">
                <Link href="/product" passHref>
                    <div className="blockP">
                        <div className="productName">
                            <div className="pName"><span>Sữa chua vinamilk 3</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-4-detail.png" alt="Product 1" width={360} height={200} />
                    </div>
                </Link>
            </div>
        </div>
    )
}