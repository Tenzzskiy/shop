
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import React from "react";
import {Choose} from "../components/Choose/Choose";
import {Conditions} from "../components/Conditions/Conditions";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";
const Projectors = ({  }) => {
    return (
        <Layout >
<MediumHeaderComponent
    button_text='Рассчитать стоимость'
    title='Аренда проекторов'
    mainImg="/header/Projectors/main.jpg"
/>
            <Preferences
                count={1}
                title='Преимущества аренды проекторов'
                leftImg="/Preferences/Projectors/1.png"
                leftText='Универсальное средство для трансляции презентаций
                и видеороликов для малых аудиторий и больших залов. '
                leftTitle=' Доступность и удобство'
            />
            <Choose />
            <Conditions />
            <Shop page={6} />
            <Cleaning />
            <Sale />
            <Releases
                img1='/releases/Projectors/1.png'
                img2='/releases/Projectors/2.png'
                img3='/releases/Projectors/3.jpg'
                img4='/releases/Projectors/4.png'
                img5='/releases/Projectors/5.png'


                text1='Применение проектора на форумах'
                text2='Применение проектора для бизнес встреч'
                text3='Применение проектора на форумах и корпоративах'
                text4='Применение проектора на тренингах'
                text5='Применение проектора в игровых зонах'
            />
            <Seo
            image1='/Seo/Projectors/1.png'
            image2='/Seo/Projectors/2.svg'
            text1=' Банальные, но неопровержимые выводы, а
             также акционеры крупнейших компаний, которые представляют
             собой яркий пример континентально-европейского типа политической
             культуры, будут превращены в посмешище, хотя само их существование
             приносит несомненную пользу обществу. Высокий уровень вовлечения
             представителей целевой аудитории является четким доказательством
             простого факта: экономическая повестка сегодняшнего дня требует от
             нас анализа системы обучения кадров, соответствующей насущным потребностям.
               экономическая повестка сегодняшнего дня требует от нас анализа
            системы обучения кадров, соответствующей насущным потребностям.'
            text2='Банальные, но неопровержимые выводы,
             а также акционеры крупнейших компаний, которые представляют собой
             яркий пример континентально-европейского типа политической культуры,
              будут превращены в посмешище, хотя само их существование приносит
               несомненную пользу обществу. Высокий уровень вовлечения представителей
               целевой аудитории является четким доказательством простого факта:
               экономическая повестка сегодняшнего дня требует от нас анализа системы
               обучения
             кадров, соответствующей насущным потребностям. '
            text3='Банальные, но неопровержимые выводы,
            а также акционеры крупнейших компаний, которые представляют собой яркий
             пример континентально-европейского типа политической культуры, будут
              превращены в посмешище, хотя само их существование приносит несомненную
               пользу обществу. Высокий уровень вовлечения представителей целевой
               аудитории является четким доказательством простого факта: экономическая
                повестка сегодняшнего дня требует от нас анализа системы обучения
                 кадров, соответствующей насущным потребностям.  экономическая
                 повестка сегодняшнего дня требует от нас анализа системы обучения
                  кадров,
             соответствующей насущным потребностям. '
            text4='Банальные, но неопровержимые выводы,
            а также акционеры крупнейших компаний, которые
            представляют собой яркий пример континентально-европейского
             типа политической культуры, будут превращены в посмешище,
             хотя само их существование приносит несомненную пользу обществу.
              Высокий уровень вовлечения представителей целевой аудитории является
               четким доказательством простого факта: экономическая повестка
                сегодняшнего дня требует от нас анализа системы обучения кадров,
             соответствующей насущным потребностям. '
            />
        </Layout>
    )
}

export default Projectors;