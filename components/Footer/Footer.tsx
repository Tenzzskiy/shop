import styles from './Footer.module.scss'
import React, {FunctionComponent} from 'react'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Footer_768} from "./Footer_768/Footer_768";
import {Footer_320} from "./Footer_320/Footer_320";

const Footer:FunctionComponent = ({ }):JSX.Element =>{
    const [Data] = React.useState(new Date);
    const size = useWindowSize();
    return(
       <>
           {size.width > 1250 ?
               <div className={styles.footer}>

                   <div className={styles.footer_container}>
                       <div className={styles.content}>
                           <div className={styles.flex1}>

                               <div className={styles.item1}><img src="/header/Logotype.svg" alt=""/> </div>
                               <div className={styles.item2}> info@arenda-plazm77.ru</div>
                               <div className={styles.item3}>+7 495 321-54-76 </div>
                               <div className={styles.item4}>109382, Москва, пр. Егорьевский, д.2а </div>
                           </div>
                           <div className={styles.flex2}>
                               <div> Главная</div>
                               <div>Светодиодные экраны </div>
                               <div>Видеостены </div>
                               <div>Сенсорные тач-панели </div>
                           </div>
                           <div className={styles.flex3}>
                               <div> Проекторы</div>
                               <div > Ноутбуки</div>
                               <div > Звук, Свет и окружение</div>
                               <div >Наши новости </div>

                           </div>
                           <div className={styles.flex4}>
                               <div className={styles.item13}>
                                   <img src="/VK.svg" alt=""/>
                                   <img src="/FB.svg" alt=""/>
                                   <img src="/IG.svg" alt=""/>
                               </div>
                               <div className={styles.item14}>{size.width} </div>
                               <div className={styles.item15}> Политика конфиденциальности</div>

                           </div>
                       </div>
                       <div className={styles.item16}> © Arenda-plazm77, {Data.getFullYear()}</div>

                   </div>

               </div>
                : null
           }
           {size.width>700   && size.width<1250 ?
               <Footer_768 /> : null
           }
           {size.width<700 ?
              <Footer_320 /> : null
           }




       </>
    )
}

export default Footer;