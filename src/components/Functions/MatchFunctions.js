import {useState} from "react";

export default async function Data(props) {
    const matchData = props.dataMatch;
    // const summonerData = props.dataSummoner;
    const [dataMatchList, setDataMatchList] = useState( []);
    for (let i = 0; i < matchData.length; i++) {
        const responseMatchList = await fetch(`api/fetchMatchList?matchID=${matchData[i]}`);
        const fullResponseMatchList = await responseMatchList.json();
        console.log(fullResponseMatchList);
        // setDataMatchList(fullResponseMatchList.data);
    }
    // console.log(dataMatchList);

    return null;
}





