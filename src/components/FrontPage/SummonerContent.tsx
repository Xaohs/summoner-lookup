import Image from 'next/image'
import { SummonerContentStyled } from "./FrontPage.styled";
import useMatchHistory from "../Hooks/MatchFunctions";
import { useEffect } from "react";
import MatchHistory from "../Hooks/MatchFunctions";

type Props = {
    matchData: any;
    summonerData: any;
}

interface Summoner {
    profileIconId: number;
    name: string;
}

interface Match {

}

const SummonerContent = (props: Props) => {
    const matchData: Match = props.matchData;
    const summonerData: Summoner = props.summonerData;
    
    useEffect(() => {
        const matchHistory = MatchHistory(matchData, summonerData);
    }, [matchData, summonerData])

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