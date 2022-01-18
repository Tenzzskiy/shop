import styles from './Certificates.module.scss'


export const Certificates = () =>{
    return(
        <>
        <div className={styles.certificates}>
            <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Сертификаты на оборудование и антисептики </div>
                <div className={styles.grid}>
                    <picture>
                        <img src="/Certificates/1.png" alt=""/>
                    </picture>
                    <picture>
                        <img src="/Certificates/2.png" alt=""/>
                    </picture>
                    <picture>
                        <img src="/Certificates/3.png" alt=""/>
                    </picture>
                    <picture>
                        <img src="/Certificates/4.png" alt=""/>
                    </picture>


                </div>
            </div>
            </div>
        </div>
        </>
    )
}