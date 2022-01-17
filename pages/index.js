import styles from './../styles/index.module.scss'
import Layout from "../components/Layout/Layout";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import React from "react";
import Sale from "../components/Sale/Sale";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Preferences} from "../components/Preferences/Preferences";
import {Partners} from "../components/Partners/Partners";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";

const Home = ({  }) => {
  return (
    <Layout>
        <HeaderComponent
            button_text='Рассчитать стоимость'
            title='Аренда плазмы'
            mainImg="/backgroundHeaderComponent.png"
        />
        <Preferences
            count={4}
            title='Ваши выгоды с PLAZMA77'
        />
        <Partners />
        <Conditions />
        <Cleaning />
<Sale />
<Releases
    img1='/releases1(1).png'
    img2='/releases1(2).png'
    img3='/releases1(3).png'
    img4='/releases1(4).png'
    img5='/releases1(5).png'
    text1='Плазма на стойке для трансляции спортивных матчей'
    text2='Брендированный экспостенд с плазмой для интерактивной зоны'
    text3='Плазма на стойке для трансляции кибер-спортивных матчей'
    text4='Плазма на брендированной стойке для интерактивной зоны'
    text5='Плазма на брендированной стойке для игровой VR зоны'
/>
        <Seo
            image1='/seo1FirstPicture.png'
            image2='/seo1FirstPicture.png' />
    </Layout>
  )
}

export default Home;
