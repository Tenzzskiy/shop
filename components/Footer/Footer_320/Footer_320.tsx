import styles from './Footer_320.module.scss'
import React from "react";


export const Footer_320 = () =>{
    const [Data] = React.useState(new Date);
    return(
        <>
            <div className={styles.footer}>

            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.head_footer}>
                        <div className={styles.img}>
                            <picture>
                                <img src="/header/Logotype.svg" alt=""/>
                            </picture>
                        </div>
                        <div className={styles.mail}>info@arenda-plazm77.ru </div>
                        <div className={styles.adress}>109382, Москва, пр. Егорьевский, д.2а </div>
                    </div>
                        <div className={styles.contacts}>
                            <picture>
                                <img src="/header/footer_contacts.svg" alt=""/>
                            </picture>
                        </div>


                </div>


            </div>

                <div className={styles.content2}>
                    <div className={styles.border}> </div>
                <div className={styles.grid}>
                <div>
                    Главная

                </div>
                    <span className={styles.border}> </span>
                <div>Светодиодные экраны </div>
                    <span className={styles.border}> </span>
                <div> Видеостены</div>
                    <span className={styles.border}> </span>
                <div>Сенсорные тач-панели </div>
                    <span className={styles.border}> </span>
                <div>Проекторы </div>
                    <span className={styles.border}> </span>
                <div>Ноутбуки </div>
                    <span className={styles.border}> </span>
                <div>Звук, Свет и окружение </div>
                    <span className={styles.border}> </span>
                <div>Дезинфекция </div>
                    <span className={styles.border}> </span>
                <div>Наши новости </div>
                    <span className={styles.border}> </span>
                </div>
                </div>

                <div className={styles.content3}>
                <div className={styles.flex}>
                    <div className={styles.item1}>
                        <img src="/VK.svg" alt=""/>
                        <img src="/FB.svg" alt=""/>
                        <img src="/IG.svg" alt=""/>
                    </div>
                    <div className={styles.item14}> Yandex metrika badge-widget  </div>
                <div className={styles.item15}>Политика конфиденциальности </div>
                <div className={styles.item16}>© Arenda-plazm77, 2021 </div>
                </div>
                </div>
            </div>

        </>
    )
}