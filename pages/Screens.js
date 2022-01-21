
import Layout from "../components/Layout/Layout";
import {Conditions} from "../components/Conditions/Conditions";
import {Preferences} from "../components/Preferences/Preferences";
import React, {FunctionComponent, ReactNode} from "react";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import {Cleaning} from "../components/Cleaning/Cleaning";
import Sale from "../components/Sale/Sale";
import Releases from "../components/Relises/Relises";
import Seo from "../components/SEO/SEO";
import {Shop} from "../components/Shop/Shop";



const Screens = ({  })=> {
    return (
        <Layout >
        <HeaderComponent
            title='Аренда  светодиодных экранов'
            mainImg='/header/Screen/main.jpg'
            button_text='Рассчитать стоимость'
        />
            <Preferences count={1}
                         leftImg='/Preferences/Screen/1.jpg'
                         title=' Преимущества светодиодных экранов'
                         leftTitle='Зрелищность '
                         leftText='Выгодно выделяют ваш стенд, презентацию или сцену,
                         а также зрелищно организуют пространство в вашем заведении! '
            />

            <Conditions />
            <Shop page={3} />
            <Cleaning />
            <Sale />
            <Releases

                img1='/releases/Screen/1.jpg'
                img2='/releases/Screen/2.jpg'
                img3='/releases/Screen/3.jpg'
                img4='/releases/Screen/4.jpg'
                img5='/releases/Screen/5.jpg'
                text1='Угловая LED фотозона'
                text2='Брендированный экспостенд'
                text3='LED экраны в оформлении сцены для презентации нового продукта'
                text4='Светодиодный экран для оформления сцены'
                text5='Светодиодный экран для оформления фотозоны'
            />
           <Seo
               image1='/Seo/Screen/1.jpg'
               image2='/Seo/Screen/2.jpg'
               text1='Банальные, но неопровержимые выводы, а также
               акционеры крупнейших компаний, которые представляют
               собой яркий пример континентально-европейского типа
                политической культуры, будут превращены в посмешище,
                 хотя само их существование приносит несомненную пользу
                 обществу. Высокий уровень вовлечения представителей
                 целевой аудитории является четким доказательством простого
                  факта: экономическая повестка сегодняшнего дня требует от
                  нас анализа системы обучения кадров, соответствующей насущным
                   потребностям.  экономическая повестка сегодняшнего дня требует
                   от нас анализа системы
                обучения кадров, соответствующей насущным потребностям. '
               text2='Банальные, но неопровержимые выводы, а также
                акционеры крупнейших компаний, которые представляют
                 собой яркий пример континентально-европейского типа
                  политической культуры, будут превращены в посмешище,
                   хотя само их существование приносит несомненную пользу
                    обществу. Высокий уровень вовлечения представителей целевой
                     аудитории является четким доказательством простого факта:
                      экономическая повестка сегодняшнего дня требует от нас анализа
                      системы
               обучения кадров, соответствующей насущным потребностям. '
               text3='Банальные, но неопровержимые выводы, а
                также акционеры крупнейших компаний, которые
                 представляют собой яркий пример континентально-европейского
                 типа политической культуры, будут превращены в посмешище, хотя
                  само их существование приносит несомненную пользу обществу.
                   Высокий уровень вовлечения представителей целевой аудитории
                    является четким доказательством простого факта: экономическая
                     повестка сегодняшнего дня требует от нас анализа системы обучения
                     кадров, соответствующей насущным потребностям.  экономическая повестка
                      сегодняшнего дня требует от нас анализа системы
                обучения кадров, соответствующей насущным потребностям. '
               text4=' Банальные, но неопровержимые выводы, а
               также акционеры крупнейших компаний, которые представляют
                собой яркий пример континентально-европейского типа политической
                 культуры, будут превращены в посмешище, хотя само их существование
                  приносит несомненную пользу обществу. Высокий уровень вовлечения
                   представителей целевой аудитории является четким доказательством
                    простого факта: экономическая повестка сегодняшнего дня требует
                     от нас анализа системы обучения
                кадров, соответствующей насущным потребностям.'

           />
        </Layout>
    )
}

export default Screens;