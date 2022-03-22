import Image from 'next/image'
import { SummonerContentStyled } from "./FrontPage.styled";
import useMatchHistory from "../Hooks/MatchFunctions";
import { useEffect, useState } from "react";
import MatchHistory from "../Hooks/MatchFunctions";
import { match } from "assert";

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

interface MatchHistoryData {

}

const SummonerContent = (props: Props) => {
    const matchData: Match = props.matchData;
    const summonerData: Summoner = props.summonerData;
    const [historyMainInfo, setHistoryMainInfo] = useState<MatchHistoryData | null>();

    useEffect(() => {
        const getMatchHistory = async () => {
            return await MatchHistory(matchData);
        }

        getMatchHistory().then(response => setHistoryMainInfo(response));

    }, [matchData])

    useEffect(() => {
        if (historyMainInfo !== undefined) {
            console.log(historyMainInfo);
        }
    }, [historyMainInfo])

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