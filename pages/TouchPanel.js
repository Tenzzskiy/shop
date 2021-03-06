
import Layout from "../components/Layout/Layout";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import React from "react";
import {Preferences} from "../components/Preferences/Preferences";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";


const TouchPanel = ({  }) => {
    return (
        <Layout >
            <HeaderComponent
                button_text='Рассчитать стоимость'
                title='Аренда сенсорных тач -панелей'
                mainImg="/header/TouchPanel/main.jpg"
            />
            <Preferences
                count={2}
                title='Ваши выгоды с PLAZMA77'
                leftImg="/Preferences/TouchPanel/1.png"
                rightImg="/Preferences/TouchPanel/2.png"
                leftText='Позволяют презентовать информацию с возможностью
                многопользовательтского взаимодействия без дополнительных устройств! '
                rightText=' Наша IT команда
                 разработает интерфейс любой сложности по
                 вашему тех.заданию: от брендированного каталога
                  до сложной интерактивной игры!'
                leftTitle=' Встроенный процессор и ОС'
                rightTitle='Любой контент! '
            />
            <Conditions />
            <Shop page={5} />
            <Cleaning />
            <Sale />
            <Releases
                img1='/releases/TouchPanel/1.png'
                img2='/releases/TouchPanel/2.png'
                img3='/releases/TouchPanel/3.jpg'
                img4='/releases/TouchPanel/4.png'
                img5='/releases/TouchPanel/5.png'


                text1='Интерактивные панели для ознакомления с шоу-программой'
                text2='Тач-панель при фотозоне для отбора готовых фото'
                text3='Брендированный стенд с интерактивными панелями на презентации нового продукта'
                text4='Интерактичный стол с занимательной игрой для гостей'
                text5='Сенсорная панель'
            />
            <Seo
            image1='/Seo/TouchPanel/1.png'
            image2='/Seo/TouchPanel/2.svg'
            text1='Банальные, но неопровержимые выводы,
            а также акционеры крупнейших компаний, которые
            представляют собой яркий пример континентально-европейского
             типа политической культуры, будут превращены в посмешище, хотя
              само их существование приносит несомненную пользу обществу.
               Высокий уровень вовлечения представителей целевой аудитории
                является четким доказательством простого факта: экономическая
                 повестка сегодняшнего дня требует от нас анализа системы обучения
                 кадров, соответствующей насущным потребностям.  экономическая повестка
                  сегодняшнего дня требует от нас анализа системы
            обучения кадров, соответствующей насущным потребностям. '
            text2=' Банальные, но неопровержимые выводы,
            а также акционеры крупнейших компаний, которые представляют собой яркий
            пример континентально-европейского типа политической культуры, будут
             превращены в посмешище, хотя само их существование приносит несомненную
             пользу обществу. Высокий уровень вовлечения представителей целевой
             аудитории является четким доказательством простого факта: экономическая
              повестка сегодняшнего дня требует от нас анализа системы обучения кадров,
            соответствующей насущным потребностям.'
            text3=' Банальные, но неопровержимые выводы, а также акционеры
            крупнейших компаний, которые представляют собой яркий пример
            континентально-европейского типа политической культуры, будут
            превращены в посмешище, хотя само их существование приносит
            несомненную пользу обществу. Высокий уровень вовлечения
            представителей целевой аудитории является четким доказательством
            простого факта: экономическая повестка сегодняшнего дня требует от
            нас анализа системы обучения кадров, соответствующей насущным
            потребностям.  экономическая повестка сегодняшнего дня требует от
            нас анализа системы обучения кадров,
             соответствующей насущным потребностям.'
            text4=' Банальные, но неопровержимые выводы,
            а также акционеры крупнейших компаний, которые
            представляют собой яркий пример континентально-европейского
             типа политической культуры, будут превращены в посмешище,
              хотя само их существование приносит несомненную пользу обществу.
              Высокий уровень вовлечения представителей целевой аудитории является
              четким доказательством простого факта: экономическая повестка сегодняшнего
               дня требует от нас анализа системы обучения
             кадров, соответствующей насущным потребностям.'
            />
        </Layout>
    )
}

export default TouchPanel;