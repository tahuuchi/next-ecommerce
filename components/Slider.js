import React from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(next)
            })
        })
    }
}

export default function Slider(props) {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            loop: true,
            slides: {
                perView: 4,
                spacing: 2,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )
    const loop = Array.from(Array(10).keys());
    return (
        <div className="slider">
            <div className="w-full max-w-full overflow-x-hidden flex p-8">
                <div ref={sliderRef} className="keen-slider">
                    {loop.map((val) => {
                        return (
                            <div key={`img-${val}`} className="keen-slider__slide boxImage">
                                <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-4-detail.png" alt="Product 1" layout="fill" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full max-w-full overflow-x-hidden flex pt-6">
                <div ref={thumbnailRef} className="keen-slider boxThumbnail">
                    {loop.map((val) => {
                        return (
                            <div key={`thumb-${val}`} className="keen-slider__slide">
                                <Image className="object-contain" src="https://www.vinamilk.com.vn/sua-chua-vinamilk/wp-content/uploads/2021/01/packshot-4-detail.png" alt="Product 1" layout="fill" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
