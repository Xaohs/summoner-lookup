import cache from "memory-cache";

export default async function fetchMatchList(req, res) {
    const URL = "https://europe.api.riotgames.com/lol/match/v5/matches/";
    const matchID = req.query.matchID;
    const requestURL = URL + matchID + "?api_key=" + process.env.API_KEY;

    const cachedResponse = cache.get(requestURL);

    if (cachedResponse) {
        return res.status(200).json({ cachedResponse }.cachedResponse);
    } else if (!cachedResponse) {
        const hours = 24;
        const requestData = await fetch(requestURL);
        const responseData = await requestData.json();
        cache.put(requestURL, responseData, hours * 1000 * 60 * 60);
        console.log("Called Match List API");
        return res.status(210).json({ responseData }.responseData);
    }
    return res.end();
}

