import React from "react";
import { RequestedNameInfoStyled } from "./MatchHistoryData.styled";
import Image from 'next/image';

const EachParticipant = (props) => {

    return (
        <>
            { props.eachMatch.participantInfo.map((participant, key) =>
                <React.Fragment key={ key }>
                    { participant.puuid === props.puuid &&
                        <RequestedNameInfoStyled key={ key }>
                            < Image src={ `/assets/dtail/12.5.1/img/champion/${ participant.championName }.png` }
                                    alt={ participant.championName } height="90px" width="90px"/>
                        </RequestedNameInfoStyled>

                    }
                </React.Fragment>
            ) }
        </>
    )
}


export default EachParticipant;