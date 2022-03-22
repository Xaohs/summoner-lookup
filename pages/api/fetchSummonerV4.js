import cache from "memory-cache";
import axios from 'axios';

export default async function fetchSummonerV4(req, res) {
    const URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
    const summonerName = req.query.summonerName;

    const requestURL = URL + summonerName + "?api_key=" + process.env.API_KEY;

    const cachedResponse = cache.get(requestURL);

    if (cachedResponse) {
        return res.status(200).json({ cachedResponse }.cachedResponse);
    } else if (!cachedResponse) {
        const hours = 24;
        const requestData = await fetch(requestURL);
        const responseData = await requestData.json();
        cache.put(requestURL, responseData, hours * 1000 * 60 * 60);
        console.log("Called SummonerV4 API");
        return res.status(210).json({ responseData }.responseData);
    }
    return res.end();
}

