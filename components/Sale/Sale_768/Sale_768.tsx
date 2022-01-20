import React, {FunctionComponent} from "react";
import styles from './Sale_768.module.scss'


const Sale_768:FunctionComponent = (  { })  =>{

    return(
        <>
            <div className={styles.sale}>
                <img className={styles.sale_svg} src="/sale.svg" alt=""/>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.offer}>
                            <div className={styles.title}>Закажи сейчас со скидкой ! </div>
                            <div className={styles.promo}> По промокоду “PLAZMA77”</div>

                        </div>
                        <div className={styles.percents}>
                            10%

                        </div>
                        <div className={styles.timer}>
                            <div className={styles.sale_title}> До завершения акции:</div>
                            <div className={styles.time}> 12312312312</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sale_768;