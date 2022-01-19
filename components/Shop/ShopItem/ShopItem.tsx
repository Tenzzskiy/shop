import React, {FunctionComponent, ReactNode} from "react";
import styles from './ShopItem.module.scss'

interface ShopItemProps{
    children?:ReactNode,
    price?:number,
    count?:number,
    img?:string,
    title?:string
}
export const ShopItem:FunctionComponent = ( { children,price,count,img,title,...props} : ShopItemProps) =>{
    return(
        <>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <picture>
                        <img src={img} alt=""/>
                    </picture>
                </div>
                <div className={styles.flex}>
                    <div className={styles.title}>{title}</div>
                    {count === 1 ?
                        <>
                        <div className={styles.detail}>

                            <span> Рарешение:</span>
                            <p>4k,FullHD</p>
                        </div>
                            <div className={styles.detail}>

                                <span>Выходы:</span>
                                <p>AV, Wi-Fi, HDMI, USB 2.0</p>
                            </div>

                        </> : null
                    }

                    <div className={styles.card_footer}>
                        <select name="time">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        <span> {price}₽ </span>
                        <div className={styles.bucket}>
                            <img src="/ShopItem/busket.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}