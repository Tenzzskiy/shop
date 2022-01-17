import styles from './LEDScreens/LEDScreens.module.scss'
import Layout from "../components/Layout/Layout";
import {Conditions} from "../components/Conditions/Conditions";
import {Preferences} from "../components/Preferences/Preferences";
import MediumHeaderComponent from "../components/HeaderComponent/MediumHeader/MediumHeader";
import {FunctionComponent} from "react";


const Screens:FunctionComponent = ({  }):JSX.Element => {
    return (
        <Layout >
<MediumHeaderComponent
                       title='Аренда проекторов'
                       button_text='Рассчитать стоимость'
                       mainImg='/projectors_main_img.svg' />
        </Layout>
    )
}

export default Screens;