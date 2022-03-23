export const getParticipantInfo = (participants) => {
    let allParticipantInfo = [];
    participants.forEach(participant => {
        const eachParticipantInfo = {
            "assists": participant.assists,
            "championId": participant.championId,
            // const deaths = participant.deaths
            // const gameEndedInEarlySurrender = participant.gameEndedInEarlySurrender
            // const individualPosition = participant.individualPosition
            // const item0 = participant.item0
            // const item1 = participant.item1
            // const item2 = participant.item2
            // const item3 = participant.item3
            // const item4 = participant.item4
            // const item5 = participant.item5
            // const item6 = participant.item6
            // const kills = participant.kills
            // const lane = participant.lane
        }
        allParticipantInfo.push(eachParticipantInfo);
    })
    return allParticipantInfo;
}