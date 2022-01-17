import styles from './Header.module.scss'
import React,{FunctionComponent} from "react";
import Link from "next/link";

const Header:FunctionComponent = ({ }) =>{
    return(
   <>
       <div className={styles.header}>

            <div className={styles.top_header}>
                    <div className={styles.top_header_container}>
                        <div className={styles.top_header_container_content}>
                            <div className={styles.logo}>
                                <img src="/Logotype.svg" alt=""/>
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
                            <Link href='/' activeClassName='active'><a>Плазмы</a></Link>
                            <Link href='/Screens'><a>Светодиодные экраны</a></Link>
                            <Link href='/VideoWalls'><a>Видеостены</a></Link>
                            <Link href='/TouchPanel'><a>Сенсорные тач-панели</a></Link>
                            <Link href='/Projectors'><a>Проекторы</a></Link>
                            <Link href='/Laptops'><a>Ноутбуки</a></Link>
                            <Link href='/Sound'><a>Звук, Свет и окружение</a></Link>
                            <Link href='/Desinfection'><a>Дезинфекция</a></Link>



                        </div>
                    </div>
               </div>

       </div>
   </>
    )
}

export default Header;