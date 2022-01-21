import styles from './left.module.scss'
import React from "react";





export const Left =({img,title,description }) =>{
    return(
        <>
            <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.grid}>
            <div className={styles.img}>
                <img  className={styles.background_img} src={img} alt=""/>
            </div>
                <div  className={styles.flex}>
                <div className={styles.title}>
                    {title}
                </div>
                    <div className={styles.description}>
                        {description}
                    </div>

                </div>
            </div>
            </div>
            </div>
        </>
    )
}