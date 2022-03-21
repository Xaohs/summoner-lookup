import Image from 'next/image'
import { SummonerContentStyled } from "./FrontPage.styled";
import { getWinningTeam, useData } from "../Functions/MatchFunctions";

const SummonerContent = (props) => {
    const matchData = props.matchData;
    const summonerData = props.summonerData;

    const summonerIcon = "/assets/dtail/12.5.1/img/profileicon/" + summonerData.profileIconId + ".png";

    return (
        <SummonerContentStyled>
            <div>
                <Image src={ summonerIcon } alt="Profile Icon" height="50px" width="50px"/>
                <h1>{ summonerData.name }</h1>
            </div>
        </SummonerContentStyled>
    )
}
export default SummonerContent;