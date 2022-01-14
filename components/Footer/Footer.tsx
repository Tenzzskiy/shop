import styles from './Footer.module.scss'
import React, {FunctionComponent} from 'react'

const Footer:FunctionComponent = ({ }):JSX.Element =>{
    const [Data] = React.useState(new Date);
    return(
       <>
       <div className={styles.footer}>

       <div className={styles.footer_container}>
           <div className={styles.content}>
            <div className={styles.flex1}>
            <div className={styles.item1}><img src="/Logotype.svg" alt=""/> </div>
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
                <div className={styles.item14}> Yandex metrika badge-widget  </div>
                <div className={styles.item15}> Политика конфиденциальности</div>

            </div>
           </div>
           <div className={styles.item16}> © Arenda-plazm77, {Data.getFullYear()}</div>
       </div>

       </div>

       </>
    )
}

export default Footer;