import styles from './FeedBack.module.scss'
import React,{FunctionComponent} from "react";
import {useWindowSize} from "../../Hooks/useWindowSize";

const FeedBack:FunctionComponent = ( { }) => {
    const size = useWindowSize();
    return (
        <>

            <div className={styles.feedback}>
                {size.width < 720 ? <img className={styles.img} src="/contacts/contacts_360.svg" alt=""/> : null}
                {size.width > 1200 ? <img className={styles.img} src="/contacts/caontacts.svg" alt=""/> : null}
                { size.width > 720 && size.width < 1200?

                    <img className={styles.img} src="/contacts/contacts_768.svg" alt=""/> :  null
                }


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