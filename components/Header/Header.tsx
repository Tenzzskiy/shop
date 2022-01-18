import styles from './Header.module.scss'
import React, {FunctionComponent, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import cn from 'classnames'


const Header:FunctionComponent = ({ }) =>{
    const route = useRouter()
    const [scroll, setScroll] = React.useState(0);
    const [lastScroll,setLastScroll] = useState(1)
    const handleScroll = () => {
        setScroll(window.scrollY);
        setLastScroll(scroll)
    };
    React.useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return(
   <>
       <div className={cn(styles.header,
            scroll>lastScroll ? styles.header_fixed : null
        )} >

            <div className={styles.top_header} >
                    <div className={styles.top_header_container}>
                        <div className={styles.top_header_container_content}>
                            <div className={styles.logo}>
                                <img src="/header/Logotype.svg" alt=""/>
                            </div>
                            <div className={styles.busket}>
                                <img src="/header/busket.svg" alt=""/>
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
                            <Link href='/' ><a className={cn(styles.a,
                                route.asPath === '/' ? styles.a_active : null

                            )} >Плазмы</a></Link>
                            <Link href='/Screens'><a className={cn(styles.a,
                                route.asPath === '/Screens' ? styles.a_active : null

                            )}
                            >Светодиодные экраны</a></Link>
                            <Link href='/VideoWalls'><a className={cn(styles.a,
                                route.asPath === '/VideoWalls' ? styles.a_active : null

                            )}>Видеостены</a></Link>
                            <Link href='/TouchPanel'><a className={cn(styles.a,
                                route.asPath === '/TouchPanel' ? styles.a_active : null

                            )} >Сенсорные тач-панели</a></Link>
                            <Link href='/Projectors'><a className={cn(styles.a,
                                route.asPath === '/Projectors' ? styles.a_active : null

                            )}>Проекторы</a></Link>
                            <Link href='/Laptops'><a className={cn(styles.a,
                                route.asPath === '/Laptops' ? styles.a_active : null

                            )}>Ноутбуки</a></Link>
                            <Link href='/Sound'><a className={cn(styles.a,
                                route.asPath === '/Sound' ? styles.a_active : null

                            )}>Звук, Свет и окружение</a></Link>
                            <Link href='/Desinfection'><a className={cn(styles.a,
                                route.asPath === '/Desinfection' ? styles.a_active : null

                            )}>Дезинфекция</a></Link>



                        </div>
                    </div>
               </div>

       </div>
   </>
    )
}

export default Header;