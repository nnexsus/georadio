import { useParams } from "react-router";

import MusicPlayer from "../musicplayer";

const radioDNS = {
    "geomusic": 0,
    "nightcity": 1,
    "channelf": 2,
    "neonsunrise": 3,
    "neonsunset": 4,
    "liquidelectrum": 5,
    "moemoejp": 6,
    "eyeofthestorm": 7,
    "cortexdriver": 8,
    "virtualwaterfall": 9,
    "screenspacereflection": 10,
    "zyzz": 11,
}

const Station = () => {

    const id = useParams()

    return (
        <div style={{background: 'teal', padding: '40px', height: '100vh'}}>
            <MusicPlayer radionum={radioDNS[id.id]} number={0} themeid={radioDNS[id.id]}/>
        </div>
    )
}

export default Station;