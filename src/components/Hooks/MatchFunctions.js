import TimeAgo from "javascript-time-ago";
import nl from 'javascript-time-ago/locale/nl.json'

function getGameDuration(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remaining = seconds - minutes * 60;
    return minutes + "m " + remaining + "s"
}

function getQueueType(id) {
    let map;
    let type;

    switch (id) {
        case 400:
            map = "Summoner's Rift";
            type = "5v5 Draft";
            break;
        case 420:
            map = "Summoner's Rift";
            type = "Ranked Solo/Duo";
            break;
        case 430:
            map = "Summoner's Rift";
            type = "5v5 Blind Pick";
            break;
        case 440:
            map = "Summoner's Rift";
            type = "Ranked Flex";
            break;
        case 450:
            map = "Howling Abyss";
            type = "ARAM";
            break;
        case 460:
            map = "Twisted Treeline";
            type = "3v3 Blind Pick";
            break;
        case 470:
            map = "Twisted Treeline";
            type = "3v3 Ranked Flex";
            break;
    }

    return map + " - " + type;
}


export default async function MatchHistory(matchData) {

    let history = [];
    TimeAgo.addDefaultLocale(nl);
    const timeAgo = new TimeAgo('nl')

    for (let i = 0; i < matchData.length; i++) {
        const getMainInfo = (matchHistory) => {
            const gameCreation = timeAgo.format(Date.now() - ((matchHistory.info.gameCreation - (matchHistory.info.gameCreation % 10)) / 10 / 1000)); // idk
            const gameDuration = getGameDuration(matchHistory.info.gameDuration);
            const queueId = getQueueType(matchHistory.info.queueId);

            history.push({
                "gameCreation": { gameCreation },
                "gameDuration": { gameDuration },
                "queueType": { queueId }
            });

        }

        const responseMatchList = await fetch(`api/fetchMatchList?matchID=${ matchData[i] }`);
        await responseMatchList.json().then(result => getMainInfo(result.data));

    }

    return history;

}





