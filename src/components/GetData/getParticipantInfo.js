export const getParticipantInfo = (participants) => {
    let allParticipantInfo = [];
    participants.forEach((participant) => {

        const eachParticipantInfo = {
            "puuid": participant.puuid,
            "participantId": participant.participantId,
            "profileIcon": participant.profileIcon,
            "summonerLevel": participant.summonerLevel,
            "summonerName": participant.summonerName,
            "role": participant.role,
            "kills": participant.kills,
            "assists": participant.assists,
            "deaths": participant.deaths,
            "championId": participant.championId,
            "gameEndedInEarlySurrender": participant.gameEndedInEarlySurrender,
            "item0": participant.item0,
            "item1": participant.item1,
            "item2": participant.item2,
            "item3": participant.item3,
            "item4": participant.item4,
            "item5": participant.item5,
            "item6": participant.item6,
            "summoner1Id": participant.summoner1Id,
            "summoner2Id": participant.summoner2Id,
            "summonerId": participant.summonerId,
            "teamId": participant.teamId,
            "totalMinionsKilled": participant.totalMinionsKilled,
            "visionScore": participant.visionScore,
            "win": participant.win,
            "championName": participant.championName,
        }

        allParticipantInfo.push(eachParticipantInfo);

    })
    return allParticipantInfo;
}