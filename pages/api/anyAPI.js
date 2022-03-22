export default async function fetchAPI(req, res) {
    try {
        const responseData = await fetch(req.query.requestURL + process.env.API_KEY);
        console.log("requested");
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
