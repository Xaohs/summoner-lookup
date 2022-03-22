import { FormStyled } from "./FrontPage.styled";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SummonerContent from "./SummonerContent";
import { fetchMatch, fetchSummonerName } from '../Hooks/requestDataFromAPI'

const SummonerLookup = () => {


    let dataSummoner;
    let dataMatch;

    const [stateMatch, setMatch] = useState();
    const [stateSummoner, setSummoner] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async typedSummonerName => {
        await fetchSummonerName(typedSummonerName)
            .then(resSummoner => dataSummoner = resSummoner)
            .then(async dataSummoner => await fetchMatch(dataSummoner.data.puuid))
            .then(resMatch => dataMatch = resMatch);

        setSummoner(dataSummoner);
        setMatch(dataMatch);

    }


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