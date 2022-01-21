import styles from './Relises.module.scss'
import React from "react";


const Releases = ( {children,text1,text2,text3,text4,text5,...props }) =>{
    return(
        <>
            <div className={styles.releases}>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.title}>
                        Реализованные проекты

                    </div>
                    <div className={styles.grid}>
                        <div className={styles.box1}><img src={props.img1} alt=""/> <div className={styles.box1_description}><span>{ text1} </span> </div></div>
                        <div className={styles.box2}> <img src={props.img2} alt=""/> <div className={styles.box2_description}><span> {text2}</span> </div></div>
                        <div className={styles.box3}><img src={props.img3} alt=""/> <div className={styles.box3_description}><span> {text3}</span> </div> </div>
                        <div className={styles.box4}> <img src={props.img4} alt=""/><div className={styles.box4_description}><span>{text4} </span> </div> </div>
                        <div className={styles.box5}><img src={props.img5} alt=""/> <div className={styles.box5_description}><span>{text5} </span> </div> </div>
                    </div>

                </div>

            </div>

            </div>
        </>
    )
}

export default Releases;