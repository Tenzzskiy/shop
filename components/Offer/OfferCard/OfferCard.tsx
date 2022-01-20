import React from "react";
import styles from './OfferCard.module.scss'
import {Selector} from "../../Select/Select";



export const OfferCard= ( {price,title,img,...props }) =>{

    return(

        <>
            <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.img}>
                <picture>
                    <img src={img} alt=""/>
                </picture>
            </div>
                <div className={styles.title}> {title}</div>
                <div className={styles.subTitle}>
                    <div>Детали: </div>
                    <div>с полочкой-держателем </div>
                   </div>
                <div className={styles.flex}>
                    <div className={styles.select}>
                    <Selector />
                    </div>
                    <div className={styles.price}> {props.price}₽</div>
                    <div className={styles.busket}>
                        <picture>
                            <img src="/ShopItem/whiteBusket.svg" alt=""/>
                        </picture>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}