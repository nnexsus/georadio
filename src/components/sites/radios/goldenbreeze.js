import MusicPlayer from "../../musicplayer";


const GoldenBreeze = ({number}) => {
    return (
        <div style={{border: 'solid 10px black'}}>
            <div style={{background: 'url(/images/goldenbreeze/palmbg.png)', backgroundSize: '100%', aspectRatio: '1/1', width: '100%'}}>
                <div style={{background: 'url(/images/goldenbreeze/palmborder.png)', backgroundSize: '100%', aspectRatio: '1/1', width: '100%'}}>
                    <div className="golden-breeze-upper" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 style={{textAlign: 'center', fontFamily: 'lightcursive', fontSize: '80px'}}>Golden-Breeze</h1>
                        <div style={{padding: '15px 0', width: 'fit-content', background: 'black'}}>
                            <MusicPlayer radionum={9} number={number} themeid={9} />
                        </div>
                    </div>
                </div>
                <div style={{background: 'url(/images/goldenbreeze/palmborder.png)', backgroundSize: '100%', aspectRatio: '1/1', width: '100%'}}>
                    <svg className="golden-breeze-lower" viewBox="0 0 750 350">
                        <defs>
                            <path id="path-0" d="M 0 0 C 188 86 432 -80 750 0" style={{fill: 'red'}}></path>
                        </defs>
                        <text style={{fill: 'white', fontFamily: 'lightcursive', fontSize: '65px', whiteSpace: 'pre'}} dx={'55px'} dy="100px" transform="matrix(1.0000000000000002, 0, 0, 1.0000000000000002, 0, 7.105427357601002e-15)"><textPath href="#path-0">Chill and upbeat songs.</textPath></text>
                        <text style={{fill: 'white', fontFamily: 'lightcursive', fontSize: '65px', whiteSpace: 'pre'}} dx={'250px'} dy="140px" transform="matrix(1.0000000000000002, 0, 0, 1.0000000000000002, 0, 7.105427357601002e-15)"><textPath href="#path-0">Genreless.</textPath></text>
                        <text style={{fill: 'white', fontFamily: 'lightcursive', fontSize: '65px', whiteSpace: 'pre'}} dx={'300px'} dy="200px" transform="matrix(1.0000000000000002, 0, 0, 1.0000000000000002, 0, 7.105427357601002e-15)"><textPath href="#path-0">Currently at ----- songs.</textPath></text>
                        <text style={{fill: 'white', fontFamily: 'lightcursive', fontSize: '65px', whiteSpace: 'pre'}} dx={'400px'} dy="260px" transform="matrix(1.0000000000000002, 0, 0, 1.0000000000000002, 0, 7.105427357601002e-15)"><textPath href="#path-0">Chill and upbeat songs.</textPath></text>
                    </svg>
                    <p style={{margin: 0, textAlign: 'center', paddingBottom: '20px'}}><a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMx3MFGxcea9RE5NXhjvjBCd" target="_blank" rel={'noreferrer'} style={{fontFamily: 'lightcursive', fontSize: '80px'}}>Playlist link.</a></p>
                </div>
            </div>
        </div>
    )
}

export default GoldenBreeze;