import React, {FunctionComponent, useState} from "react";
import styles from './Sale.module.scss'


const Sale:FunctionComponent = (  { })  =>{

    return(
        <>
<div className={styles.sale}>

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

</div>
        </>
    )
}

export default Sale;