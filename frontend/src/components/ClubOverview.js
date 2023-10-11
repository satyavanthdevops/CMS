import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ClubOverview() {
    const {clubId} = useParams();
    const [clubData, setClubData] = useState();

    useEffect(() => {
        fetchClubData();
    }, []);

    async function fetchClubData() {
        const response = await fetch("http://localhost:3000/api/getClub/" + clubId);
        const data = await response.json();
        setClubData(data);
        console.log(data);
    }

    if(!clubData) {
        return <div>loading....</div>
    }
    return (
        <div className="flex bg-white p-4 rounded-lg m-4 h-fit justify-between w-9/12">
            <div className="m-6 flex-1">
                <h1 className="font-bold text-3xl mb-4">{clubData.clubName}</h1>
                <p className="text-justify">{clubData.clubDescription}</p>
            </div>
            <div>
                <img className="w-[300px] rounded-full shadow-lg" src={require("../images/gdsc-logo.png")} alt="club-logo"></img>
            </div>
        </div>
    );
}

export default ClubOverview;