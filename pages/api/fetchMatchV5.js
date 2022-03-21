export default async function fetchMatchV5(req, res) {
    console.log("Called MatchV5 API");

    const URL1 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/";
    const puuid = req.query.puuid;
    const URL2 = "/ids?start=0&count=5&api_key="

    const requestURL = URL1 + puuid + URL2 + process.env.API_KEY;

    try {
        const responseData = await fetch(requestURL);

        if (!responseData.ok) {
            return res.status(201).json({message: "!ok"});
            throw new Error("Something went wrong! Oops!");
        }
        if (responseData.ok) {
            const data = await responseData.json();
            return res.status(200).json({data});
        }
    } catch (err) {
        res.status(200).json({message: "err"});
        console.log(err);
        return err;
    }
    return res.end();
}

