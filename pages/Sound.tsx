
import Layout from "../components/Layout/Layout";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {Preferences} from "../components/Preferences/Preferences";
import {Cleaning} from "../components/Cleaning/Cleaning";
import {SoundSale} from "../components/SoundSale/SoundSale";
const Sound = ({  }) => {
    return (
        <Layout >
            <MediumHeaderComponent
                button_text='Рассчитать стоимость'
                title='Звук, свет и окружение'
                mainImg="/header/Sound/main.jpg"
            />
            <Preferences
            count={6}
            rightTitle='Предусмотреть все нюансы'
            rightText='Мы приложим все наши усилия и богатый
             опыт для того, чтобы всё прошло зрелищно и гладко.
             Для этого у нас в ассортименте есть всё необходимое!'
            rightImg='/Preferences/Sound/1.jpg'
            title='Что нужно для идеального мероприятия'
            />
            <SoundSale />
            <Cleaning />
        </Layout>
    )
}



export default Sound;