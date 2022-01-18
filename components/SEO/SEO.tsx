import styles from './SEO.module.scss'
import React, {FunctionComponent, ReactNode} from "react";

interface SeoProps{
    children?:ReactNode,
    image1?:string,
    image2:string
    text1?:string,
    text2?:string,
    text3?:string,
    text4?:string,
}
const Seo:FunctionComponent = ({children, image1,image2,text1,text2,text3,text4}:SeoProps) =>{
    return(
        <div className={styles.seo}>
        <div className={styles.container}>


                <div className={styles.title}>
                    Информация
                </div>
            <div className={styles.content}>
            <div className={styles.grid}>
                    <div className={styles.box1}><img src={image1} alt=""/> <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/> </div>
                    <div className={styles.box2}>{text1}</div>
                    <div className={styles.box3}>{text2} </div>
                <div className={styles.box4}><img src={image2} alt=""/> <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/> </div>
                <div className={styles.box5}>{text3}</div>
                <div className={styles.box6}>{text4}</div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Seo;