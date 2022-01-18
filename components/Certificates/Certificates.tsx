import styles from './Certificates.module.scss'


export const Certificates = () =>{
    return(
        <>
        <div className={styles.certificates}>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Сертификаты на оборудование и антисептики </div>
                <div className={styles.grid}>
                    <img src="/Certificates/1.jpg" alt=""/>
                    <img src="/Certificates/2.jpg" alt=""/>
                    <img src="/Certificates/3.jpg" alt=""/>
                    <img src="/Certificates/4.jpg" alt=""/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}