import styles from './right.module.scss'
import React from "react";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import {Left} from "../LeftPreference_tablet/left";


export const Preferences_768 = ( {count = 0,secondLeftImg,secondRightImg,leftImg,rightImg,leftTitle,rightTitle,leftText,rightText,rightSecondText,leftSecondText,leftSecondTitle,rightSecondTitle,...props } ) => {
    const size = useWindowSize();
    return(
        <>
            <div className={styles.preferences}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.mainTitle}>
                            {props.title}
                        </div>

                        {count === 1 ? <Left img={leftImg} title={leftTitle} description={leftText}/> : null}
                        {count === 2 ? <Left img={leftImg} title={leftTitle} description={leftText}/> : null}
                        {count === 2 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}
                        {count === 4 ? <Left img={leftImg} title={leftTitle} description={leftText}/>: null}
                        {count === 4 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}
                        {count === 4 ? <Left img={secondLeftImg} title={leftSecondTitle}   description={leftSecondText}/>: null}
                        {count === 4 ? <Right  img={secondRightImg}  title={rightSecondTitle}    description={rightSecondText}/>: null}
                        {count === 5 ? <Left img={leftImg} title={leftTitle} description={leftText}/>: null}
                        {count === 6 ? <Right  img={rightImg}  title={rightTitle}  description={rightText}/>: null}


                    </div>


                </div>


            </div>

        </>
    )
}

export const Right =({img,title,description }) =>{
    return(
        <>
            <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.grid}>

                <div  className={styles.flex}>
                <div className={styles.title}>
                    {title}
                </div>
                    <div className={styles.description}>
                        {description}
                    </div>

                </div>
                <div className={styles.img}>
                    <img  className={styles.background_img} src={img} alt=""/>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}