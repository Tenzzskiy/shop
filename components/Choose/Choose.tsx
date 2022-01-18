import React, { FunctionComponent} from "react";
import styles from './Choose.module.scss'


export const Choose:FunctionComponent = ({  }) =>{
   return(
       <>
       <div className={styles.choose}>
       <div className={styles.container}>
       <div className={styles.content}>
       <div className={styles.title}>
           Как выбрать проектор

       </div>
           <div className={styles.subTitle}>
               Учитывайте следующие критерии
           </div>
           <div className={styles.grid}>

               <picture>
                   <img src="/Choose/1.svg" alt=""/>
               </picture> <picture>
                   <img src="/Choose/2.svg" alt=""/>
               </picture> <picture>
                   <img src="/Choose/3.svg" alt=""/>
               </picture>

           <div>1. Тип вашего контента (презентация, фото, видео)</div>
           <div>2. Размер экрана, на который планируется трансляция </div>
           <div>3. Разрешение проектора (XGA, WXGA, FullHD) </div>
           </div>

       </div>


       </div>
       </div>
       </>
   )

}