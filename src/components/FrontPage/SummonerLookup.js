import { FormStyled } from "./FrontPage.styled";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SummonerContent from "./SummonerContent";

const SummonerLookup = () => {

    /**
     *
     * @type {{summonerName: string}}
     */


    const [dataSummoner, setDataSummoner] = useState();
    const [dataMatch, setDataMatch] = useState();
    const [summonerName, setSummonerName] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => setSummonerName(data.summonerName);

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

    return (
        <>
            <FormStyled>
                <div>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <input { ...register("summonerName") } placeholder="Summoner Name" type="text" required/>
                        <label htmlFor="summonerName">Summoner Name</label>
                        { errors.exampleRequired && <span>This field is required</span> }
                        <button type="submit">Search</button>
                    </form>
                </div>
            </FormStyled>
            { dataMatch && dataSummoner ?
                <SummonerContent
                    summonerData={ dataSummoner }
                    matchData={ dataMatch }
                />
                : null }
        </>


    )
}

export default SummonerLookup;