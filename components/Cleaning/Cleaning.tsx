import React, {FunctionComponent} from "react";
import styles from './Cleaning.module.scss'


export const Cleaning:FunctionComponent = ( { }) =>{

    return(

        <>
                <div className={styles.cleaning}>

                <div className={styles.container}>
                    <img className={styles.virus} src="virus.svg" alt=""/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Обеспечим безопасность вашего мероприятия
                    </div>
                    <div className={styles.subtitle}>
                        Большой ассортимент сертифицированного
                        оброрудования и средств защиты
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                        <img src="/desinfection_icon_1.svg" alt=""/>
                        <div> Дезинфекция воздуха и поверхностей в помещении</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/desinfection_icon_2.svg" alt=""/>
                            <div> Аренда санитайзеров, автоматов с масками и перчатками</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/desinfection_icon_3.svg" alt=""/>
                            <div> Проведение санитарного контроля на входе</div>
                        </div>
                        <div className={styles.item}>
                            <img src="/desinfection_icon_4.svg" alt=""/>
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