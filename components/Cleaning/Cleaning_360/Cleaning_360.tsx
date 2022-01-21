import React, {FunctionComponent} from "react";
import styles from './Cleaning_360.module.scss'
import {useWindowSize} from "../../../Hooks/useWindowSize";



export const Cleaning_360:FunctionComponent = ( { }) =>{
        const size = useWindowSize();
    return(

        <>
                <div className={styles.cleaning}>
                    <img className={styles.img1} src="/Desinfection/virus_360_1.svg" alt=""/>
                    <img className={styles.img2} src="/Desinfection/virus_360_2.svg" alt=""/>
                <div className={styles.container}>
                    {/*img*/}
                <div className={styles.content}>
                    <div className={styles.title}>
                        Обеспечим безопасность вашего мероприятия
                    </div>
                    <div className={styles.subtitle}>
                        <div>
                            Большой ассортимент сертифицированного
                            оброрудования и средств защиты

                            {size.width}
                        </div>

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                        <img src="/Desinfection/desinfection_icon_1.svg" alt=""/>
                        <div> Дезинфекция воздуха и поверхностей в помещении</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_2.svg" alt=""/>
                            <div> Аренда санитайзеров, автоматов с масками и перчатками</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_3.svg" alt=""/>
                            <div> Проведение санитарного контроля на входе</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/Desinfection/desinfection_icon_4.svg" alt=""/>
                            <div> Выезд мед.работника для проведения экспресс  ПЦР-тестов</div>
                        </div>

                    </div>
                    <div className={styles.button}>
                        <button> Каталог дезинфекции</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}