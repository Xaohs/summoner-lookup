import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainInfo from "./FrontPage/MainInfo";
import {LayoutStyled} from "./LayoutStyled";


export default function Layout() {
    return (
        <div>
            <Header/>
            <LayoutStyled>
                <MainInfo/>
            </LayoutStyled>

            <Footer/>
        </div>
    )
}