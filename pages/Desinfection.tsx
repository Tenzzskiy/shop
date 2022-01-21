import styles from './Desinfection/Desinfection.module.scss'
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences.js";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Certificates} from "../components/Certificates/Certificates";
import {Shop} from "../components/Shop/Shop";
import React from "react";

const Index = ({  }) => {
    return (
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда оборудования для дезинфекции'
    mainImg="/header/Desinfection/main.jpg"
/>
            <Preferences
                count={2}
            title='Почему это важно'
            leftTitle='Безопасность'
            leftText=' В текущей неблагоприятной
             санэпидемиологической обстановке жизненно важно обеспечить
            санитарную безопасность на мероприятиях любого профиля.'
            leftImg='/Preferences/Desinfection/1.png'
            rightTitle='Гарантия качества'
            rightText='Мы работаем исключительно с сертифицированными
            специализированными санитарными средствами и оборудованием.'
            rightImg='/Preferences/Desinfection/2.png'
            />
            <Certificates />
            <Shop page={9} />
            <Sale />
            <Releases
            text1='Портал для дезинфекции на входе'
            text2='Стойка для дезинфекции рук и ног'
            text3='Дезинфекция помещения до и после мероприятия'
            text4='Аренда бактерицидный рециркуляторов и санитайзеров'
            text5='температурный контроль на входной группе'
            img1='/releases/Desinfection/1.png'
            img2='/releases/Desinfection/2.png'
            img3='/releases/Desinfection/3.jpg'
            img4='/releases/Desinfection/4.png'
            img5='/releases/Desinfection/5.png'


            />
            <Seo
                image1='/Seo/Desinfection/1.png'
                image2='/Seo/Desinfection/2.jpg'
                text1='Банальные, но неопровержимые выводы, а также акционеры
                крупнейших компаний, которые представляют собой яркий пример
                континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит
                несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
                 простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей
                  насущным потребностям.  экономическая повестка сегодняшнего дня требует от нас анализа
                 системы обучения кадров, соответствующей насущным потребностям.'
                text2='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример
                 континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит
                  несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
                   простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей
                 насущным потребностям.'
                text3='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример
                 континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит
                  несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
                   простого факта: экономическая повестка
                 сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей насущным потребностям.  экономическая
                  повестка сегодняшнего дня требует от нас анализа системы
                 обучения кадров, соответствующей насущным потребностям.'
                text4='Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, которые представляют собой яркий пример
                 континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит
                  несомненную пользу обществу. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством
                   простого факта: экономическая повестка сегодняшнего дня требует от нас анализа системы обучения кадров, соответствующей
                    насущным потребностям.'

            />
        </Layout>
    )
}

export default Index;