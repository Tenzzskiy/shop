import React, {FunctionComponent, ReactNode} from "react";
import styles from './MediumHeader.module.scss'

interface MediumHeaderComponentProps{
    children?:ReactNode,
    title:string,
    button_text:string,
    mainImg:string
}
const MediumHeaderComponent:FunctionComponent = ( {title,button_text,mainImg }:MediumHeaderComponentProps):JSX.Element =>{

    return(
        <>
            <div className={styles.header_component}>
                <img className={styles.background} src={mainImg} alt=""/>
                <div className={styles.container}>

                    <div className={styles.content}>
                        <div className={styles.title}>{title} </div>
                        <div className={styles.button}><button> {button_text}</button> </div>
                        <div className={styles.free}> Это бесплатно</div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default MediumHeaderComponent;