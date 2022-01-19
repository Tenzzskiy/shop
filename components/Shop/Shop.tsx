import React, {FunctionComponent, ReactNode, useState} from "react";
import styles from './Shop.module.scss'
import {ShopItem} from "./ShopItem/ShopItem";
import data from './cart_arenda-plasm77.ru.json'


interface ShopProps{
    children?:ReactNode,
}
export const Shop:FunctionComponent = ( { children,...props}:ShopProps) =>{

    const [step,setStep] = useState(12);
    const [buttonStyle,setButtonStyle] = useState(styles.button)
       const items =  data.mainCatalogue.slice(0,step).map(elem  =>
           <ShopItem
               count={1}
               key={elem.id}
               img={elem.img}
               price={elem.price}
               title={elem.name}/> )
        const Else = () =>{
           setStep(24)
            setButtonStyle(styles.button_none)
            console.log(data);
        }
    return(
        <>
            <div className={styles.shop}>
            <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.title}>
                Каталог
            </div>
                <div className={styles.select}>
                    <select name="filter">
                        <option value="1">1</option>
                        <option value="2">1</option>
                        <option value="3">1</option>
                        <option value="4">1</option>
                    </select>
                </div>
                <div className={styles.grid}>
                    {items}

                </div>
                <div className={buttonStyle}>
                    <button onClick={Else}> Показать еще</button>
                </div>
            </div>

            </div>

            </div>
        </>
    )
}