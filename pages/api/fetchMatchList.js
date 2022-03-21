export default async function fetchMatchList(req, res) {
    console.log("Called Match List API");
    
    const URL = "https://europe.api.riotgames.com/lol/match/v5/matches/";
    const matchID = req.query.matchID;
    const requestURL = URL + matchID + "?api_key=" + process.env.API_KEY;

    try {
        const responseData = await fetch(requestURL);

        if (!responseData.ok) {
            return res.status(201).json({ message: "!ok" });
            throw new Error("Something went wrong! Oops!");
        }
        if (responseData.ok) {
            const data = await responseData.json();
            return res.status(200).json({ data });
        }
    } catch (err) {
        res.status(200).json({ message: "err" });
        console.log(err);
        return err;
    }
    return res.end();
}

