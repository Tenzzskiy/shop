import React, {FunctionComponent, ReactNode} from "react";
import styles from './Offer.module.scss'
import {OfferCard} from "./OfferCard/OfferCard";
import {useState} from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react';
import data from './../Shop/cart_arenda-plasm77.ru.json'
import {ShopItem} from "../Shop/ShopItem/ShopItem";
interface OfferProps{
    children?:ReactNode,

}

export const Offer:FunctionComponent  = ({ }:OfferProps) =>{
    // const [currentSlide, setCurrentSlide] = React.useState(0);
    // const [loaded, setLoaded] = useState(false);
    // const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    //     initial: 0,
    //     loop: false,
    //     rtl: true,
    //     slides: {
    //         perView: 4.2,
    //         spacing: 10
    //     },
    //     slideChanged(slider) {
    //         setCurrentSlide(slider.track.details.rel);
    //     },
    //     created() {
    //         setLoaded(true);
    //     }
    // });


    const items1 =  data.mainAdditionals.slice(0,4).map(elem  =>
        <OfferCard price={elem.price} title={elem.name} img={elem.img} key={elem.id}/> )
    const items2 =  data.mainAdditionals.slice(4,8).map(elem  =>
        <OfferCard price={elem.price} title={elem.name} img={elem.img} key={elem.id}/> )
    const items3 =  data.mainAdditionals.slice(8,10).map(elem  =>
        <OfferCard price={elem.price} title={elem.name} img={elem.img} key={elem.id}/> )
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 1.02
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });



    return(
        <>
            <div className={styles.offer}>
            <div className={styles.container}>
            <div className={styles.content}>


            <div className={styles.title}>
                С этим товаром часто берут
            </div>
                <div className="navigation-wrapper">
                    {/*<div ref={sliderRef} className="keen-slider">*/}
                    {/*    <div className="keen-slider__slide number-slide1"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide2"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide3"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide4"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide5"><OfferCard/></div>*/}
                    {/*    <div className="keen-slider__slide number-slide6"><OfferCard/></div>*/}
                    {/*</div>*/}
                    {/*{loaded && instanceRef.current && (*/}
                    {/*    <>*/}
                    {/*        <Arrow*/}
                    {/*            left*/}
                    {/*            onClick={(e: any) =>*/}
                    {/*                e.stopPropagation() || instanceRef.current?.prev()*/}
                    {/*            }*/}

                    {/*        />*/}

                    {/*        <Arrow*/}
                    {/*            onClick={(e: any) =>*/}
                    {/*                e.stopPropagation() || instanceRef.current?.next()*/}
                    {/*            }*/}

                    {/*        />*/}
                    {/*    </>*/}
                    {/*)}*/}

                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            <div className={styles.flex}>
                                {items1}
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            <div className={styles.flex}>
                                {items2}
                            </div>
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            <div className={styles.flex}>
                                {items3}
                                <div className={styles.empty}> </div>
                                <div className={styles.empty}> </div>
                            </div>
                        </div>


                    </div>

                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />

                            <Arrow
                                onClick={(e: any) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide ===
                                    instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </>
                    )}

                </div>
                {loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys()
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                > </button>
                            );
                        })}
                    </div>
                )}


            </div>
            </div>
            </div>
        </>
    )
}
// function Arrow(props: {
//     disabled: boolean;
//     left?: boolean;
//     onClick: (e: any) => void;
// }) {
//
//     return (
//         <div className={`button-block ${
//             props.left ? "button-block--left" : "button-block--right"
//         } `} >
//         <svg
//             onClick={props.onClick}
//             className={`arrow ${
//                 props.left ? "arrow--left" : "arrow--right"
//             } `}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//         </div>
//     );
// }

function Arrow(props: {
    disabled: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabeld = props.disabled ? "arrow--disabled" : "";
    return (
        <div className={`button-block ${
            props.left ? "button-block--left" : "button-block--right"
        } ${disabeld}`} >
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
        </div>
    );
}
