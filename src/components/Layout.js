import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutStyled } from "./LayoutStyled";
import SummonerLookup from "./FrontPage/SummonerLookup";


export default function Layout() {
    return (
        <div>
            <Header/>
            {/*<LayoutStyled>*/ }
            <SummonerLookup/>
            {/*</LayoutStyled>*/ }

            <Footer/>
        </div>
    )
}