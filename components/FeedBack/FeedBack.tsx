import styles from './FeedBack.module.scss'
import React,{FunctionComponent} from "react";

const FeedBack:FunctionComponent = ( { }) => {

    return (
        <>
            <div className={styles.feedback}>
                <img src="/caontacts.svg" alt=""/>
                <div className={styles.feedback_container}>

                <div className={styles.feedback_content}>
                    <div className={styles.feedback_flex}>
                    <div className={styles.title}>
                        Остались вопросы?
                    </div>
                        <div className={styles.description}>
                            Звоните, проконсультируем и всё расскажем
                        </div>
                        <div className={styles.number}>
                            +7 495 321-54-76
                        </div>
                        <div className={styles.request}>
                            Или оставьте заявку
                        </div>

                        <div className={styles.contacts}>
                            <input type="text"/>
                        <button>Отправить заявку </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default FeedBack;