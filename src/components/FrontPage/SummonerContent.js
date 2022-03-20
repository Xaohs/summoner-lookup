import Image from 'next/image'
import {SummonerContentStyled} from "./FrontPage.styled";
import {getWinningTeam, useData} from "../Functions/MatchFunctions";

const SummonerContent = (props) => {
    const summonerIcon = "/assets/dtail/12.5.1/img/profileicon/" + props.dataSummoner.profileIconId + ".png";


    return (
        <SummonerContentStyled>
            <div>
                <Image src={summonerIcon} alt={props.dataSummoner.profileIconId} height="50px" width="50px"/>
                <h1>{props.dataSummoner.name}</h1>
            </div>
        </SummonerContentStyled>
    )
}
export default SummonerContent;