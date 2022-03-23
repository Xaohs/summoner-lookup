import { fetchMatchList } from "./requestDataFromAPI";
import { getParticipantInfo } from "./getParticipantInfo";
import { getMainInfo } from "./getMainInfo";

export default async function getMatchInfo(matchData) {
    let matchInfo = [];
    for (let i = 0; i < matchData.data.length; i++) {

        const getAllInfo = (matchHistory) => {

            const getMain = (matchHistory) => {
                let mainInfo = getMainInfo(matchHistory);
                return { mainInfo }

            }
            const getParticipants = (matchHistory) => {
                let participantInfo = getParticipantInfo(matchHistory.participants);
                return { participantInfo }

            }

            return Object.assign(getMain(matchHistory), getParticipants(matchHistory));
        }
        await fetchMatchList(matchData.data[i])
            .then(matchData => getAllInfo(matchData.data.data.info))
            .then(info => matchInfo.push(info));
    }

    return matchInfo;

}





