import { useState } from "react";

export default async function MatchHistory(matchData, summonerData) {

    let yes = [];

    for (let i = 0; i < matchData.length; i++) {
        const responseMatchList = await fetch(`api/fetchMatchList?matchID=${ matchData[i] }`);
        const fullResponseMatchList = await responseMatchList.json();
        yes.push(fullResponseMatchList.data.info);
    }
    return yes;
}





