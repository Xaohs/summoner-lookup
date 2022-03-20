export default async function fetchSummonerV4(req, res) {
    const URL = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
    const summonerName = req.query.summonerName;

    const requestURL = URL + summonerName + "?api_key=" + process.env.API_KEY;

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

