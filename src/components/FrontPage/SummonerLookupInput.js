import { FormStyled } from "./FrontPage.styled";
import React, { useEffect, useState } from "react";
import getMatchHistory from '../Functions/MatchFunctions';

const SummonerLookupInput = () => {

    const [dataSummoner, setDataSummoner] = useState(null);
    const [dataMatch, setDataMatch] = useState(null);
    const [summonerName, setSummonerName] = useState(null);

    let textInput = React.createRef();
    const updateInput = (e) => {
        e.preventDefault();
        setSummonerName(textInput.current.value);
    }
    useEffect(() => {
        async function fetchSummonerData() {
            return fetch(`api/fetchSummonerV4?summonerName=${ summonerName }`);
        }

        if (summonerName) {
            fetchSummonerData()
                .then(response => response.json())
                .then(data => setDataSummoner(data.data));
        }
    }, [summonerName]);

    useEffect(() => {
        async function fetchMatchData() {
            return fetch(`api/fetchMatchV5?puuid=${ dataSummoner.puuid }`);
        }

        if (dataSummoner) {
            fetchMatchData()
                .then(response => response.json())
                .then(data => setDataMatch(data.data));
        }
    }, [dataSummoner])

    async function doStuff() {
        const response = await getMatchHistory(dataMatch, dataSummoner);

    }

    return (
        <>
            <FormStyled>
                <div>
                    <form>
                        <input ref={ textInput } name="summonerName" placeholder="Summoner Name" id="summonerName"
                               type="text" required/>
                        <label htmlFor="summonerName">Summoner Name</label>
                        <button onClick={ updateInput } type="submit">Search</button>
                    </form>
                </div>
            </FormStyled>
            {/*{dataMatch && dataSummoner ?*/ }
            {/*    <Data*/ }
            {/*        dataSummoner={dataSummoner}*/ }
            {/*        dataMatch={dataMatch}*/ }
            {/*    />*/ }
            {/*: null }*/ }
        </>


    )
}

export default SummonerLookupInput;