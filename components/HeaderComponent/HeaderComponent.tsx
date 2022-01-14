import React, {FunctionComponent} from "react";
import styles from './HeaderComponent.module.scss'


const HeaderComponent:FunctionComponent = ( {title,button_text,mainImg }) =>{

    return(
        <>
            <div className={styles.header_component}>
            <div className={styles.container}>
                <img src={mainImg} alt=""/>
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

export default HeaderComponent;