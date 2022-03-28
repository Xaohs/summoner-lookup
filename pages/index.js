import Head from 'next/head';

import SummonerLookup from "../src/components/FrontPage/SummonerLookup"
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