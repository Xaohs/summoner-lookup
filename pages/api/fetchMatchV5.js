import cache from "memory-cache";

export default async function fetchMatchV5(req, res) {
    const URL1 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/";
    const puuid = req.query.puuid;
    const URL2 = "/ids?start=0&count=5&api_key="

    const requestURL = URL1 + puuid + URL2 + process.env.API_KEY;

    const cachedResponse = cache.get(requestURL);

    if (cachedResponse) {
        return res.status(200).json({ cachedResponse }.cachedResponse);
    } else if (!cachedResponse) {
        const hours = 24;
        const requestData = await fetch(requestURL);
        const responseData = await requestData.json();
        cache.put(requestURL, responseData, hours * 1000 * 60 * 60);
        console.log("Called MatchV5 API");
        return res.status(210).json({ responseData }.responseData);
    }
    return res.end();
}

