import Head from 'next/head';

import SummonerLookup from "../src/components/FrontPage/SummonerLookup"
const fs = require('fs');

export async function getServerSideProps() {
    fs.readFile('summonerData.json', 'utf-8', (err, jsonString) => {
        const data = JSON.parse(jsonString)
        const f = {
            "yep": "yep",
            "nop": "nop",
        }
        return {
            props: {dat: f}
        }

    })
}

export default function Home() {

    return (
        <div>
            <Head>
                <title>Summoner Lookup</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
        </div>
    )
}