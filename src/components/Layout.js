import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutStyled } from "./LayoutStyled";
import SummonerLookup from "./FrontPage/SummonerLookup";


export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <LayoutStyled>
                { children }
                <div>
                    <SummonerLookup/>
                </div>
            </LayoutStyled>
            <Footer/>
        </div>
    )
}