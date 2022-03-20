import {FormStyled} from "./FrontPage.styled";
import {useState} from "react";
import Data from '../Functions/MatchFunctions';

const SummonerLookupInput = () => {

    const [dataSummoner, setDataSummoner] = useState(null);
    const [dataMatch, setDataMatch] = useState(null);
    const [summonerName, setSummonerName] = useState('');

    const updateInput = (e) => {
        setSummonerName(e.target.value);
    }

    const test = async (e) => {
        e.preventDefault()
        const responseSummonerV4 = await fetch(`api/fetchSummonerV4?summonerName=${summonerName}`);
        const fullResponseSummonerV4 = await responseSummonerV4.json();
        setDataSummoner(fullResponseSummonerV4.data);
        console.log(dataSummoner);
        // const responseMatchV5 = await fetch(`api/fetchMatchV5?puuid=${dataSummoner.puuid}`)
        // const fullResponseMatchV5 = await responseMatchV5.json();
        // setDataMatch(fullResponseMatchV5.data);

    }

    return (
        <>
            <FormStyled>
                <div>
                    <form>
                        <input onChange={updateInput} name="summonerName" placeholder="Summoner Name" id="summonerName" type="text" required/>
                        <label htmlFor="summonerName">Summoner Name</label>
                        <button onClick={test} type="submit">Search</button>
                    </form>
                </div>
            </FormStyled>
            {/*{dataMatch && dataSummoner ?*/}
            {/*    <Data*/}
            {/*        dataSummoner={dataSummoner}*/}
            {/*        dataMatch={dataMatch}*/}
            {/*    />*/}
            {/*: null }*/}



                    {/*{dataSummoner ?*/}
                    {/*    <SummonerContent*/}
                    {/*        dataSummoner={dataSummoner}*/}
                    {/*        dataMatch={dataMatch}*/}
                    {/*    />*/}
                    {/*: null }*/}
        </>


    )
}

export default SummonerLookupInput;