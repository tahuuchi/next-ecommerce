import Link from 'next/link';
import Image from 'next/image';

export default function BlockProduct() {
    return (
        <div className="wrapProduct">
            <div className="product">
                <Link href="/product/product-1" passHref>
                    <a>
                        <div className="productInfo">
                            <div className="pName"><span>Sữa chua vinamilk Hero dâu</span></div>
                            <div className="pPrice"><span>$80.000 USD</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-3-detail.png" alt="Product 1" layout="fill" />
                    </a>
                </Link>
            </div>
            <div className="product">
                <Link href="/product/product-2" passHref>
                    <a>
                        <div className="productInfo">
                            <div className="pName"><span>Sữa chua vinamilk Hero dâu</span></div>
                            <div className="pPrice"><span>$80.000 USD</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-tuoi-vinamilk/wp-content/themes/suanuoc/tpl/sua-nuoc-100/images/package/packshot-dau.png" alt="Product 1" layout="fill" />
                    </a>
                </Link>
            </div>
            <div className="product">
                <Link href="/product/product-3" passHref>
                    <a>
                        <div className="productInfo">
                            <div className="pName"><span>Sữa chua vinamilk Hero dâu</span></div>
                            <div className="pPrice"><span>$80.000 USD</span></div>
                        </div>
                        <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-4-detail.png" alt="Product 1" layout="fill" />
                    </a>
                </Link>
            </div>
        </div>
    )
}