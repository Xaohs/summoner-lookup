const https = require('https')
const fs = require("fs");

const startPuuid = "KgnJg_93ZVS9nLxt7C1A-T4d7esZSM75z1azewi3Eh_USHssfdO9XO97Vy8uqqkOjtdeuCQtF4-b0w"
const URL1 = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/";
const URL2 = "/ids?start=0&count=100&api_key=RGAPI-1b1f3866-5024-4979-903d-9220a6ba6af3"

const requestURL = URL1 + startPuuid + URL2;


https.get(requestURL, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        parseData(data);
    })
}).on('error', err => {
    console.log(err.message);
})

function parseData(data) {
    append_data('scripts/summonerData.json', data)

    async function append_data(filename, data) {
        if (fs.existsSync(filename)) {

            const read_data = await readFile(filename);
            if (read_data === false) {
                console.log('not able to read file')
            } else {
                read_data.table.push(data)  //data must have the table array in it like example 1
                const dataWrittenStatus = await writeFile(filename, read_data);
                if (dataWrittenStatus === true) {
                    console.log('data added successfully')
                } else {
                    console.log('data adding failed')
                }
            }
        }
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