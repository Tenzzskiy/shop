import styles from './SEO.module.scss'
import React, {FunctionComponent, ReactNode} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";

interface SeoProps{
    children?:ReactNode,
    image1?:string,
    image2:string
    text1?:string,
    text2?:string,
    text3?:string,
    text4?:string,
    otherText?:string,
}
const Seo:FunctionComponent = ({children, image1,image2,text1,text2,text3,text4,otherText}:SeoProps) =>{
    const size=useWindowSize();
    return(
        <div className={styles.seo}>
        <div className={styles.container}>


                <div className={styles.title}>
                    Информация
                </div>
            <div className={styles.content}>
            <div className={styles.grid}>
                    <div className={styles.box1}><img src={image1} alt=""/>
                        {size.width < 1100 && size.width > 600 ?
                            <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/> :null
                        }

                        {size.width > 1100 ?
                            <>
                                <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/>
                            </>
                            :
                            null

                        }

                    </div>
                    <div className={styles.box2}>{text1}</div>
                    <div className={styles.box3}>{text2} </div>
                <div className={styles.box4}><img src={image2} alt=""/>

                    {size.width < 1100 && size.width > 600 ?
                        <img src="/Seo/background_768.svg" className={styles.background_image} alt=""/> :null
                    }

                    {size.width > 1100 ?
                        <>
                            <img src="/Seo/background_image.svg" className={styles.background_image} alt=""/>
                        </>
                        :
                        null

                    }

                </div>
                {size.width > 1100 ?
                    <>
                        <div className={styles.box5}>{text3}{otherText}</div>
                        <div className={styles.box6}>{text4}</div>
                    </>
                    :
                    null

                }

                {size.width < 1100 && size.width > 600 ?
                    <>
                        <div className={styles.box5}>{text3}</div>
                        <div className={styles.box6}>{otherText}{text4}</div>
                    </>
                   :
                    null

                }



            </div>
            </div>
        </div>
        </div>
    )
}

export default Seo;