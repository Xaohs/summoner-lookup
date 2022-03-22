import TimeAgo from "javascript-time-ago";
import nl from 'javascript-time-ago/locale/nl.json'
import { fetchMatchList } from "./requestDataFromAPI";

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
    let matchInfo = [];
    TimeAgo.addDefaultLocale(nl);
    const timeAgo = new TimeAgo('nl')
    for (let i = 0; i < matchData.data.length; i++) {
        const getInfo = (matchHistory) => {
            const getMainInfo = () => {
                const gameCreation = timeAgo.format(Date.now() - ((matchHistory.gameCreation - (matchHistory.gameCreation % 10)) / 10 / 1000)); // idk
                const gameDuration = getGameDuration(matchHistory.gameDuration);
                const queueId = getQueueType(matchHistory.queueId);

                return {
                    "mainInfo": {
                        "gameCreation": { gameCreation },
                        "gameDuration": { gameDuration },
                        "queueType": { queueId }
                    }
                };
            }

            const getParticipants = () => {
                return {
                    "participants": {
                        "one": "Xaohs"
                    }
                };
            }

            return Object.assign(getMainInfo(matchHistory), getParticipants());
        }

        await fetchMatchList(matchData.data[i]).then(matchData => getInfo(matchData.data.data.info)).then(info => matchInfo.push(info));
    }

    return matchInfo;

}





