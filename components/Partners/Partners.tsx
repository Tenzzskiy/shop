import React, {FunctionComponent} from "react";
import styles from './Partners.module.scss'
import {useWindowSize} from "../../Hooks/useWindowSize";
import {Partners_360} from "./Partners_360/Partners_360";


export const Partners:FunctionComponent = ( { }) =>{
    const size = useWindowSize();
    return(
        <>
            {size.width > 720 ?
                <div className={styles.partners}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                Наши клиенты
                            </div>
                            <div className={styles.grid}>
                                <div className={styles.faded}><img src="/Clients/client_1.svg" alt=""/></div>
                                <div><img src="/Clients/client_2.svg" alt=""/></div>
                                <div className={styles.faded}><img src="/Clients/client_3.svg" alt=""/></div>
                                <div ><img src="/Clients/client_4.svg" alt=""/></div>
                                <div className={styles.faded}><img src="/Clients/client_5.svg" alt=""/></div>
                                <div><img src="/Clients/client_6.svg" alt=""/></div>

                            </div>

                        </div>
                    </div>
                </div> : null

            }
            {size.width < 720 ?
                <Partners_360 /> : null
            }
        </>
    )
}