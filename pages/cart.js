/* eslint-disable @next/next/link-passhref */
import Image from 'next/image'
import Link from 'next/link';

export default function Cart() {
    return (
        <div className="pageContent container mx-auto">
            <div className="cartContent pt-8">
                <h2 className="text-xl font-bold">My cart</h2>
                <h2 className="pt-6 text-lg font-semibold">Review your Order</h2>
                <div className="order flex">
                    <div className="w-full w-2/3">
                        <div className="wOrder w-full py-4">
                            <div className="lsOrder w-full md:pr-10 py-4 ">
                                <div className="flex w-full justify-between">
                                    <div className="oProduct flex">
                                        <span className="pr-10">
                                            <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-3-detail.png" alt="Product 1" width={100} height={100} />
                                        </span>
                                        <span>
                                            <strong>Lightweight Jacket</strong>
                                        </span>
                                    </div>
                                    <div className="oPrice">$249.99</div>
                                </div>
                                <div className="mt-4 flex pb-8 border-b border-gray-300">
                                    <button className="border border-gray-300 p-1 px-2 mr-4 text-gray-400"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button>
                                    <input type="number" className="w-full border border-gray-300 py-1 px-3" value="1" />
                                </div>
                            </div>

                            <div className="lsOrder w-full md:pr-10 py-4 ">
                                <div className="flex w-full justify-between">
                                    <div className="oProduct flex">
                                        <span className="pr-10">
                                            <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-3-detail.png" alt="Product 1" width={100} height={100} />
                                        </span>
                                        <span>
                                            <strong>Lightweight Jacket</strong>
                                        </span>
                                    </div>
                                    <div className="oPrice">$249.99</div>
                                </div>
                                <div className="mt-4 flex pb-8 border-b border-gray-300">
                                    <button className="border border-gray-300 p-1 px-2 mr-4 text-gray-400"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button>
                                    <input type="number" className="w-full border border-gray-300 py-1 px-3" value="1" />
                                </div>
                            </div>

                            <div className="lsOrder w-full md:pr-10 py-4 ">
                                <div className="flex w-full justify-between">
                                    <div className="oProduct flex">
                                        <span className="pr-10">
                                            <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-3-detail.png" alt="Product 1" width={100} height={100} />
                                        </span>
                                        <span>
                                            <strong>Lightweight Jacket</strong>
                                        </span>
                                    </div>
                                    <div className="oPrice">$249.99</div>
                                </div>
                                <div className="mt-4 flex pb-8 border-b border-gray-300">
                                    <button className="border border-gray-300 p-1 px-2 mr-4 text-gray-400"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 6L6 18"></path><path d="M6 6l12 12"></path></svg></button>
                                    <input type="number" className="w-full border border-gray-300 py-1 px-3" value="1" />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="w-full flex w-1/3">
                        <div className="total w-full md:pl-10">
                            <hr className="pb-6" />
                            <div className="item flex justify-between w-full py-2">
                                <span className="md:pr-4">Subtotal</span>
                                <span className="text-right">$249.99</span>
                            </div>
                            <div className="item flex justify-between w-full py-2">
                                <span className="md:pr-4">Taxes</span>
                                <span className="text-right">Calculated at checkout</span>
                            </div>
                            <div className="item flex justify-between w-full py-2">
                                <span className="md:pr-4">Estimated Shipping</span>
                                <span className="text-right"><strong>FREE</strong></span>
                            </div>
                            <hr className="m4-6" />
                            <div className="item flex justify-between w-full py-2">
                                <span className="md:pr-4"><strong>Total</strong></span>
                                <span className="text-right"><strong>$340.30</strong></span>
                            </div>
                            <div className="checkout text-center pt-8">
                                <Link href="/checkout" passHref >
                                    <span className="px-12 py-4 bg-black text-white" >
                                        Proceed to Checkout
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}