import styles from './Footer_768.module.scss'
import React from "react";


export const Footer_768 = () =>{
    const [Data] = React.useState(new Date);
    return(
        <div className={styles.footer}>

            <div className={styles.footer_container}>
                <div className={styles.content}>


                    <div className={styles.flex1}>
                        <div className={styles.first}>
                            <div className={styles.item1}><img src="/header/Logotype.svg" alt=""/> </div>
                            <div className={styles.item2}> info@arenda-plazm77.ru</div>
                        </div>
                        <div className={styles.second}>
                            <div className={styles.item3}>+7 495 321-54-76 </div>
                            <div className={styles.item4}>
                                <div className={styles.telegram}>
                                <picture>
                                    <img src="/telegram.svg" alt=""/>
                                </picture>
                                Telegram</div>
                            <div className={styles.whatsapp}>
                                <picture>
                                    <img src="whatsapp.svg" alt=""/>
                                </picture>
                                WhatsApp</div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.border}> </div>

                <div className={styles.content2}>
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
                <div className={styles.box3}>
                        <div className={styles.item13}>
                            <img src="/VK.svg" alt=""/>
                            <img src="/FB.svg" alt=""/>
                            <img src="/IG.svg" alt=""/>
                        </div>

                        <div className={styles.item15}> Политика конфиденциальности</div>
                    <div className={styles.item16}> © Arenda-plazm77, {Data.getFullYear()}</div>
                </div>
                </div>
            </div>

        </div>
    )
}