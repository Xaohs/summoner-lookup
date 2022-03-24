import { FormStyled } from "./FrontPage.styled";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SummonerContent from "./SummonerContent";
import { fetchMatch, fetchSummonerName } from '../GetData/requestDataFromAPI'
import Loading from "../Loading/Loading";

const SummonerLookup = () => {

    let dataSummoner;
    let dataMatch;

    const [stateMatch, setMatch] = useState();
    const [stateSummoner, setSummoner] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [firstLaunch, setFirstLaunch] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async typedSummonerName => {
        setIsLoading(true);
        setFirstLaunch(false);
        try {
            await fetchSummonerName(typedSummonerName)
                .then(resSummoner => dataSummoner = resSummoner)
                .then(async dataSummoner => await fetchMatch(dataSummoner.data.puuid))
                .then(resMatch => dataMatch = resMatch)
                .then(resMatch => setIsLoading(false))
        } catch (err) {
            console.log(err);
        }
        setSummoner(dataSummoner);
        setMatch(dataMatch);

    }

    return (
        <>
            <Loading loading={ isLoading } where="loadingSummonerData"/>
            <FormStyled firstLaunch={ firstLaunch }>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <input { ...register("summonerName") } placeholder="Summoner Name" type="text" required/>
                    <label htmlFor="summonerName">Summoner Name</label>
                    { errors.exampleRequired && <span>This field is required</span> }
                    <button type="submit">Search</button>
                </form>
            </FormStyled>
            { stateMatch && stateSummoner ?
                <SummonerContent
                    summonerData={ stateSummoner }
                    matchData={ stateMatch }
                />
                : null }
        </>


    )
}


export default SummonerLookup;