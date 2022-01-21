import React, {FunctionComponent} from "react";
import styles from './Conditions_360.module.scss'


export const Conditions_360:FunctionComponent = ( { }) =>{
    return(
        <>
            <div className={styles.conditions}>

                <img className={styles.background2} src="/Conditions_360.svg" alt=""/>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            В стоимость аренды входит:
                        </div>
                        <div className={styles.steps}>
                            <div className={styles.common_flex_1}>
                            <div className={styles.flex}>
                                <div className={styles.number}>1 </div>
                                <div className={styles.text}>Монтаж оборудования </div>
                            </div >
                            <div className={styles.flex}>
                                <div className={styles.number}> 2</div>
                                <div className={styles.text}>Комплект коммутации </div>
                            </div>
                            </div>
                            <div className={styles.common_flex2}>
                                <div className={styles.flex}>
                                    <div className={styles.number}>3 </div>
                                    <div className={styles.text}>Первичная настройка </div>
                                </div >
                                <div className={styles.flex}>
                                    <div className={styles.number}> 4</div>
                                    <div className={styles.text}>Демонтаж оборудования </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}