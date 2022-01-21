import React, {FunctionComponent, useState} from "react";
import styles from './Sale.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import Sale_768 from "./Sale_768/Sale_768";
import Sale_360 from "./Sale_360/Sale_360";


const Sale:FunctionComponent = (  { })  =>{
const size =useWindowSize();
    return(
        <>
            {size.width > 1200 ?
                <div className={styles.sale}>
                    <img className={styles.sale_svg} src="/sale.svg" alt=""/>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.offer}>
                                <div className={styles.title}>Закажи сейчас со скидкой ! </div>
                                <div className={styles.promo}> По промокоду “PLAZMA77”</div>
                                <div className={styles.sale_title}> До завершения акции:</div>
                                <div className={styles.time}> 12312312312</div>
                            </div>
                            <div className={styles.percents}>
                                10%

                            </div>
                        </div>
                    </div>

                </div> : null
            }
            {size.width < 1200 && size.width>720 ? <Sale_768 /> : null}
            {size.width < 720 ? <Sale_360 /> : null}
        </>
    )
}

export default Sale;