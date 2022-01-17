import React, {FunctionComponent} from "react";
import styles from './Conditions.module.scss'


export const Conditions:FunctionComponent = ( { }) =>{
    return(
        <>
            <div className={styles.conditions}>
                <img src="/condition_background_2.svg" alt=""/>
                <img src="/conditions_background.svg" alt=""/>

                <div className={styles.container}>
                    <div className={styles.content}>
                    <div className={styles.title}>
                        В стоимость аренды входит:
                    </div>
                        <div className={styles.steps}>
                        <div className={styles.number}>1 </div>
                        <div className={styles.number}> 2</div>
                        <div className={styles.number}>3 </div>
                        <div className={styles.number}>4 </div>
                        <div className={styles.text}>Монтаж оборудования </div>
                        <div className={styles.text}>Комплект коммутации </div>
                        <div className={styles.text}>Первичная настройка </div>
                        <div className={styles.text}>Демонтаж оборудования </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}