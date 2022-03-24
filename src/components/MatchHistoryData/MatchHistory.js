import { EachMatchStyled, MatchHistoryStyled } from "./MatchHistoryData.styled";
import Image from "next/image";
import React from "react";
import EachParticipant from "../MatchHistoryData/EachParticipant";

const MatchHistory = (props) => {

    return (

        <MatchHistoryStyled>

            { props.matchHistory.map((eachMatch, key) =>

                <EachMatchStyled key={ key }>

                    <span id="queueType">{ eachMatch.mainInfo.queueType }</span>
                    <span id="gameCreation">{ eachMatch.mainInfo.gameCreation }</span>
                    <span id="gameDuration">{ eachMatch.mainInfo.gameDuration }</span>

                    <EachParticipant
                        eachMatch={ eachMatch }
                        puuid={ props.puuid }
                    />

                </EachMatchStyled>
            ) }

        </MatchHistoryStyled>
    )
}

export default MatchHistory;