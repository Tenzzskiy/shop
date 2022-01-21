import React, {FunctionComponent} from "react";
import styles from './Conditions.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Conditions_360} from "./Conditions_360/Conditions_360";


export const Conditions:FunctionComponent = ( { }) =>{
    const size = useWindowSize();
    return(
        <>{size.width < 720 ? <Conditions_360 /> : null}
            {size.width > 720 ?
                <div className={styles.conditions}>

                    <img className={styles.background2} src="/Preferences/background.svg" alt=""/>

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
                </div> : null}


        </>
    )
}