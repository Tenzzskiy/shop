import styles from './Layout.module.scss'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FeedBack from "../FeedBack/FeedBack";

const Layout = ({children }) =>{
    return(
   <>
       <Header />
       {children}
       <FeedBack />
       <Footer />
   </>
    )
}

export default Layout;