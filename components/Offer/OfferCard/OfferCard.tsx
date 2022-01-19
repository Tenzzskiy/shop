import React, {FunctionComponent, ReactNode} from "react";
import styles from './OfferCard.module.scss'


interface OfferCardProps{
    children?:ReactNode,
    price?:number,
    title?:string,
    img?:string,
}


export const OfferCard:FunctionComponent = ( {price,title,img }:OfferCardProps) =>{

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
                    <div className={styles.select}> </div>
                    <div className={styles.price}> {price}₽</div>
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