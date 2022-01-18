import styles from './SoundSale.module.scss'
import React, {FunctionComponent} from "react";

export const SoundSale = ( ) =>{
    return (

        <>
        <div className={styles.soundSale}>
            <img className={styles.background} src="/sale.svg" alt=""/>
        <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.flex}>
            <div className={styles.img}>
                <img src="/3+.svg" alt=""/>
                <img src="3++.svg" alt=""/>
            </div>
                <div className={styles.sales}>
                <div className={styles.title}>
                    Приятные скидки!
                </div>
                    <div className={styles.text}>
                        за аренду 3х и более позиций!
                    </div>
                </div>


            </div>

        </div>

        </div>
        </div>
        </>
    )
}