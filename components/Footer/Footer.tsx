import styles from './Footer.module.scss'
import React from 'react'

const Footer = ({ }):JSX.Element =>{
    const [Data] = React.useState(new Date);
    return(
       <>
       <div className={styles.footer}>

       <div className={styles.footer_container}>
           <div className={styles.box1}><img src="/Logotype.png" alt=""/> <div>info@arenda-plazm77.ru</div></div>
           <div className={styles.box2}><span> +7 495 321-54-76</span><div> 109382, Москва, пр. Егорьевский, д.2а</div> </div>
           <div className={styles.box3}> Главная</div>
           <div className={styles.box4}> Проекторы</div>

           <div className={styles.box6}> Сенсорные тач-панели</div>
           <div className={styles.box7}> Светодиодные экраны</div>

           <div className={styles.box9}> Ноутбуки</div>
           <div className={styles.box10}> Видеостены</div>

           <div className={styles.box12}> Звук, Свет и окружение</div>
           <div className={styles.box13}> Наши новости</div>
           <div className={styles.box14}>
           <div className={styles.networks}>
           <div className={styles.img_flex}>
               <img src="VK.svg" alt=""/>
               <img src="FB.svg" alt=""/>
               <img src="IG.svg" alt=""/>
           </div>
           <div className={styles.yandex}> Yandex metrika badge-widget  </div>
           <div className={styles.security}> Политика конфиденциальности</div>
               <div className={styles.footer_final}>© Arenda-plazm77, {Data.getFullYear()}  </div>
           </div>
           </div>
            <div>


            </div>





       </div>

       </div>

       </>
    )
}

export default Footer;