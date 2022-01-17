import React, {FunctionComponent, ReactNode} from "react";
import styles from './Preferences.module.scss'
import Footer from "../Footer/Footer";
import {number} from "prop-types";

interface PreferencesProps  {
    count:number,
    children?:ReactNode
}

 export const Preferences:FunctionComponent = ( {count = 0,...props }:PreferencesProps ) => {

    return(
       <>
       <div className={styles.preferences}>
       <div className={styles.container}>
       <div className={styles.content}>
            <div className={styles.title}>
                Ваши выгоды с PLAZMA77
            </div>

           {count === 1 ? <LeftPreference /> : null}
           {count === 2 ? <LeftPreference /> : null}
           {count === 2 ? <RightPreference />: null}
           {count === 4 ? <LeftPreference />: null}
           {count === 4 ? <RightPreference />: null}
           {count === 4 ? <LeftPreference />: null}
           {count === 4 ? <RightPreference />: null}
           {count === 5 ? <LeftPreference />: null}
           {count === 6 ? <RightPreference />: null}

       </div>


       </div>


       </div>

       </>
    )
}

const LeftPreference:FunctionComponent = ( { }) =>{
     return(
         <>
             <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.img}>
                        <img src="/preference_test_img.png" alt=""/>
                        <img  className={styles.background_img} src="/background_image.png" alt=""/>
                    </div>

                    <div className={styles.text}>
                                <div className={styles.title_text}>
                                    Клиентоориентированность
                                </div>
                        <div className={styles.description_text}>
                            Гибкая система скидок и бонусов для ивент
                            менеджеров и организаторов мероприятий.
                            Мы за долгосрочное сотрудничество!
                        </div>
                    </div>
                </div>
                 <div className={styles.border}>  </div>
             </div>
         </>
     )
}
const RightPreference:FunctionComponent = ( { }) =>{
     return(
         <>
             <div className={styles.container}>
                 <div className={styles.flex_2}>


                     <div className={styles.text}>
                         <div className={styles.title_text}>
                             Клиентоориентированность
                         </div>
                         <div className={styles.description_text}>
                             Гибкая система скидок и бонусов для ивент
                             менеджеров и организаторов мероприятий.
                             Мы за долгосрочное сотрудничество!
                         </div>
                     </div>
                     <div className={styles.img}>
                         <img src="/preference_test_img.png" alt=""/>
                         <img  className={styles.background_img_2} src="/background_img_2.svg" alt=""/>
                     </div>
                 </div>
                 <div className={styles.border}>  </div>
             </div>
         </>
     )
}


