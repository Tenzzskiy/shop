import styles from './Preferences_360.module.scss'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {PreferenceCard} from "../PreferenceCard/PreferenceCard";




export const Preferences_360 = ( {mainTitle,leftImg,rightImg,secondLeftImg,secondRightImg,leftText,leftSecondText,leftTitle,
                                     leftSecondTitle,rightText,rightSecondTitle,rightSecondText,rightTitle}) =>{
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

    return(
        <><div className={styles.container}>
            <div className={styles.mainTitle}>{mainTitle}</div>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1"><PreferenceCard img={leftImg} title={leftTitle} description={leftText}/></div>
                    <div className="keen-slider__slide number-slide2"><PreferenceCard img={rightImg} title={rightTitle} description={rightText}/></div>
                    <div className="keen-slider__slide number-slide3"><PreferenceCard img={secondLeftImg} title={leftSecondTitle} description={leftSecondText}/></div>
                    <div className="keen-slider__slide number-slide4"><PreferenceCard img={secondRightImg} title={rightSecondTitle} description={rightSecondText}/></div>

                </div>

            </div>
            {loaded && instanceRef.current && (
                <div className={styles.dots}>

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
            )}
        </div>
        </>
    )
}