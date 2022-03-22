import { FormStyled } from "./FrontPage.styled";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SummonerContent from "./SummonerContent";

const SummonerLookup = () => {


    let dataSummoner;
    let summonerName;
    let dataMatch;

    const [stateSummoner, setStateSummoner] = useState();
    const [stateMatch, setStateMatch] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await fetchData(data);
        setStateSummoner(dataSummoner);
        setStateMatch(dataMatch);
    }

    async function fetchData(data) {
        summonerName = data.summonerName;

        dataSummoner = await fetch(`api/fetchSummonerV4?summonerName=${ summonerName }`).then(response => response.json());
        
        dataMatch = await fetch(`api/fetchMatchV5?puuid=${ dataSummoner.data.puuid }`).then(response => response.json());


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