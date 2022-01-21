import React from "react"
import {useKeenSlider} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './Partners_360.module.scss'
import {useState} from "react";

export const Partners_360 = ({}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    // @ts-ignore
    return (
        <div className={styles.partners_360}>
            <div className={styles.title}>
                Наши клиенты
            </div>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <div className={styles.flex}>
                            <div className={styles.faded}><img src="/Clients/client_1.svg" alt=""/></div>
                            <div className={styles.faded}><img src="/Clients/client_2.svg" alt=""/></div>
                        </div>
                    </div>
                    <div className="keen-slider__slide number-slide2">
                        <div className={styles.flex}>
                            <div className={styles.faded}><img src="/Clients/client_3.svg" alt=""/></div>
                            <div className={styles.faded}><img src="/Clients/client_4.svg" alt=""/></div>
                        </div>

                    </div>
                    <div className="keen-slider__slide number-slide3">
                        <div className={styles.flex}>
                            <div className={styles.faded}><img src="/Clients/client_5.svg" alt=""/></div>
                            <div className={styles.faded}><img src="/Clients/client_6.svg" alt=""/></div>
                        </div>
                    </div>
                    {loaded && instanceRef.current && (
                        <div className={styles.dots}>
                            <div className="dots">
                                {[
                                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instanceRef.current?.moveToIdx(idx)
                                            }}
                                            className={"dot" + (currentSlide === idx ? " active" : "")}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>

    )
}