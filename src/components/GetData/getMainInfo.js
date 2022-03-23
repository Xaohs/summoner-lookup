import timeago from 'epoch-timeago';

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

    return type;
}


export const getMainInfo = (matchHistory) => {

    let mainInfo = [];

    const gameCreation = timeago(matchHistory.gameCreation); // idk
    const gameDuration = getGameDuration(matchHistory.gameDuration);
    const queueId = getQueueType(matchHistory.queueId);
    // const gameId = jfdjfd;

    const eachMainInfo = {
        "gameCreation": gameCreation,
        "gameDuration": gameDuration,
        "queueType": queueId
    };

    mainInfo.push(eachMainInfo);


    return mainInfo[0];
}


