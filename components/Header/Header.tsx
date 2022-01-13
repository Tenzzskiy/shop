import styles from './Header.module.scss'

const Header = ({ }) =>{
    return(
   <>
       <div className={styles.header}>

            <div className={styles.top_header}>
                    <div className={styles.top_header_container}>
                        <div className={styles.top_header_container_content}>
                            <div className={styles.logo}>
                                <img src="/Logotype.png" alt=""/>
                            </div>
                            <div className={styles.busket}>
                                <img src="/busket.svg" alt=""/>
                                <span> Корзина</span>
                            </div>
                            <div className={styles.contacts}>
                            <div className={styles.number}> +7 495 321-54-76</div>
                            <div className={styles.mail}> info@arenda-plazm77.ru</div>
                            </div>
                        </div>
                </div>
            </div>

               <div className={styles.bottom_header}>
                    <div className={styles.bottom_header_container}>
                        <div className={styles.content}>
                        <div> Плазмы</div>
                        <div> Светодиодные экраны</div>
                        <div> Видеостены</div>
                        <div> Сенсорные тач-панели</div>
                        <div> Проекторы</div>
                        <div> Ноутбуки</div>
                        <div> Звук, Свет и окружение</div>
                        <div> Дезинфекция</div>


                        </div>
                    </div>
               </div>

       </div>
   </>
    )
}

export default Header;