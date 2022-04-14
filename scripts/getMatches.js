const https = require('https')
const fs = require("fs");
const { MongoClient } = require('mongoDB');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const startPuuid = "bCOHVQownVUZXWbAtlpvguXV1CpuuEz9JkZIs24Hzdaw6pJtkzIYIFhAR-cKBdqBgDI2RmdtV0QSiA"
const URL1 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/";
const URL2 = "/ids?start=0&count=6&api_key=RGAPI-d32ad46c-1ced-4cf2-9359-79b2125212b0"
const requestURL = URL1 + startPuuid + URL2;


const main = async () => {
    const matchIDs = JSON.parse(await getMatchIDs(requestURL));
    await parseData(matchIDs);
}

main()

async function getMatchIDs(URL) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", URL, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

async function parseData(data) {
    await append_data('summonerData.json', data)

    async function append_data(filename, data) {
        if (!fs.existsSync(filename)) return;

        const read_data = await readFile(filename);

        if (read_data === false) return console.log('not able to read file');

        data.forEach(id => {
            if (!read_data.table.includes(id)) {
                read_data.table.push(id);

                const dataWrittenStatus = writeFile(filename, read_data);
                if (dataWrittenStatus === true) console.log('data added successfully');

            } else {
                console.log('Data is already Added')
            }
        });


    }

    async function readFile(filePath) {
        try {
            const data = await fs.promises.readFile(filePath, 'utf8')
            return JSON.parse(data)
        } catch (err) {
            return false;
        }
    }

    async function writeFile(filename, writedata) {
        try {
            await fs.promises.writeFile(filename, JSON.stringify(writedata, null, 4), 'utf8');
            return true
        } catch (err) {
            return false
        }
    }
}