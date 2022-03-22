import axios from "axios";

export async function fetchSummonerName(typedSummonerName) {
    const summonerName = typedSummonerName.summonerName;
    const URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

    const requestURL = URL + summonerName + "?api_key=";


    return await fetch(`api/anyAPI?requestURL=${ requestURL }`).then(response => response.json());


}

export async function fetchMatch(dataPuuid) {

    const URL1 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/";
    const URL2 = encodeURIComponent("/ids?start=0&count=5&api_key=")

    const requestURL = URL1 + dataPuuid + URL2;


    return await fetch(`api/anyAPI?requestURL=${ requestURL }`).then(response => response.json());
}

export async function fetchMatchList(matchId) {

    const URL = "https://europe.api.riotgames.com/lol/match/v5/matches/";
    const requestURL = URL + matchId + "?api_key=";

    return axios.get(`api/anyAPI?requestURL=${ requestURL }`);
}