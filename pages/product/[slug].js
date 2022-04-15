import Link from 'next/link';
import Image from 'next/image'
import Slider from '../../components/Slider';
export default function Product() {

    const loop = Array.from(Array(4).keys());

    return (
        <div className="pageContent w-full">
            <div className="flex">
                <div className="flex-1 w-full md:w-2/3">
                    <div className="relative">
                        <Slider product={[{ title: 'ok' }]} />
                        <div className="productInfo">
                            <div className="pName font-medium text-xl"><span>Sữa chua vinamilk Hero dâu</span></div>
                            <div className="pPrice font-medium"><span>$80.000 USD</span></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full md:w-1/3">
                    <div className="productContent p-4">
                        <div className="des">
                            <p>
                                Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a brushed fleece inside, and a relaxed unisex fit, this jacket is just the stuff of the dreams, so be quick to grab yourself one!
                            </p>
                            <p>Long sleeve ripstop jacket colorblocked in black. Rough pattern in obsidian black and brown printed throughout. Printed graphic in white throughout. Logo-woven webbing trim in white and black throughout. Bungee-style drawstring at hood featuring rubberized logo hardware. Zip closure at front. Rubberized logo appliqué at chest. Welt pockets and textile logo patch in orange at waist. Elasticized cuffs. Partially lined. Black hardware.
                            </p>
                        </div>
                        <div className="rate pt-8">
                            <div className="flex flex-row justify-between items-center"><div className="flex flex-row py-6 text-accent-9"><span className="inline-block ml-1 "><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"></path></svg></span><span className="inline-block ml-1 "><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"></path></svg></span><span className="inline-block ml-1 "><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"></path></svg></span><span className="inline-block ml-1 "><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"></path></svg></span><span className="inline-block ml-1  text-accent-5"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"></path></svg></span></div><div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div></div>
                        </div>
                        <div className="addCart w-full mt-4 bg-black text-white text-center p-4">
                            <button>ADD TO CART</button>
                        </div>

                        <div className="info pt-8">
                            <div className="toggleContent">
                                <div className="head cursor-pointer inline-flex border-b border-gray-300 pb-4 w-full">
                                    <span className="arrow">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" className="Collapse_icon__JsuEg"><path d="M9 18l6-6-6-6"></path></svg>
                                    </span>
                                    <span className="pl-2 font-medium text-gray-700">Care</span>
                                </div>
                                <div className="content pt-4 h-0 overflow-hidden">
                                    <p>This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19.</p>
                                </div>
                            </div>
                            <div className="toggleContent">
                                <div className="head cursor-pointer inline-flex border-b border-gray-300 pb-4 w-full">
                                    <span className="arrow">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" className="Collapse_icon__JsuEg"><path d="M9 18l6-6-6-6"></path></svg>
                                    </span>
                                    <span className="pl-2 font-medium text-gray-700">Detail</span>
                                </div>
                                <div className="content pt-4 h-0 overflow-hidden">
                                    <p>This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Related Products */}
            <div className="w-full mt-16 border border-gray-300 p-8">
                <h2 className="text-xl font-bold">Related Products</h2>
                <div className="related pt-8">
                    <div className="grid grid-col-1 md:grid-col-4 grid-flow-col gap-8">
                        {loop.map((val) => {
                            return (
                                <div className="box border border-gray-300 p-4" key={`related-${val}`}>
                                    <Link href={`/product/1`} passHref>
                                        <a>
                                            <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-tuoi-vinamilk/wp-content/themes/suanuoc/tpl/sua-nuoc-100/images/package/packshot-dau.png" alt="Product 1" width={300} height={250} />
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}