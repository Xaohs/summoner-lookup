import Image from 'next/image'
import { SummonerContentStyled, SummonerHeadersStyled } from "./FrontPage.styled";
import useMatchHistory from "../GetData/getMatchInfo";
import React, { useEffect, useState } from "react";
import getMatchInfo from "../GetData/getMatchInfo";
import MatchHistory from "../MatchHistoryData/MatchHistory"
import { match } from "assert";
import Loading from '../Loading/Loading';

type Props = {
    matchData: any;
    summonerData: any;
}

interface Summoner {
    summonerLevel: number;
    puuid: any;
    profileIconId: number;
    name: string;
}

interface Match {

}

interface MatchHistoryData {

}

const SummonerContent = (props: Props) => {
    const matchData: Match = props.matchData;
    const summonerData: Summoner = props.summonerData.data;
    const [matchHistoryState, setMatchHistoryState] = useState<MatchHistoryData | null>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getMatchHistory = async () => {
            return await getMatchInfo(matchData);
        }

        getMatchHistory().then(response => setMatchHistoryState(response)).then(response => setIsLoading(false));

    }, [matchData])

    const summonerIcon = "/assets/dtail/12.5.1/img/profileicon/" + summonerData.profileIconId + ".png";

    return (
        <SummonerContentStyled>
            { isLoading && <Loading/> }
            <SummonerHeadersStyled>
                <h1>{ summonerData.name }</h1>
                <span id="yep">{ summonerData.summonerLevel }</span>
                <Image src={ summonerIcon } alt="Profile Icon" height="90" width="90px"/>
            </SummonerHeadersStyled>

            { matchHistoryState ?
                <MatchHistory
                    matchHistory={ matchHistoryState }
                    puuid={ summonerData.puuid }
                />
                : null }
        </SummonerContentStyled>
    )
}
export default SummonerContent;