var summonerCount = 0;
var matchCount = 0;
var matchListCount = 0;


export default async function fetchAPI(req, res) {
    let splittedRequest = req.query.requestURL.split("/")


    if (splittedRequest.includes("summoner")) {
        summonerCount++
        console.log("Called the Summoner V4 API for the " + summonerCount + " time");
    } else if (splittedRequest.includes("by-puuid")) {
        matchListCount++
        console.log("Called the Match List (by puuid) API for the " + matchListCount + " time");
    } else {
        matchCount++
        console.log("Called the Match (by match ID) API for the " + matchCount + " time");
    }
    console.log("Total API calls this session:" + Math.floor(+summonerCount + matchListCount + matchCount));
    try {
        const responseData = await fetch(req.query.requestURL + process.env.API_KEY);
        if (!responseData.ok) {
            return res.status(201).json({ message: "!ok" });
            throw new Error("Something went wrong! Oops!");
        }
        if (responseData.ok) {
            const data = await responseData.json();
            return res.status(200).json({ data });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "err" });
        console.log(err);
        return err;
    }
    return res.end();
}
