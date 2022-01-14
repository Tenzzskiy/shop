import styles from './FeedBack.module.scss'


const FeedBack = ( { }) => {

    return (
        <>
            <div className={styles.feedback}>
                {/*<img src="/Group 1623.png" alt=""/>*/}
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