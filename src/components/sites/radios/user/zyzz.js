import MusicPlayer from "../../../musicplayer";

import '../../../css/zyzz.css';

const Zyzz = ({number}) => {
    return (
        <div style={{backgroundColor: '#292929', backgroundImage: 'url(/images/user/zyzz/zyzzbg2.png', backgroundSize: '100%', backgroundPosition: 'center'}}>
            <div style={{padding: '50px 0'}}>
                <div className="zyzz-div">
                    <MusicPlayer radionum={11} themeid={11} number={number} />
                </div>
            </div>
            <div style={{padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.5)'}}>
                <p style={{textAlign: 'center'}}>
                    <a href="https://www.youtube.com/playlist?list=PLdXSmggJLRa-GOfYhCqVVJBEyM7wSDJxt" target="_blank" rel="noreferrer" style={{fontFamily: 'math'}}>Playlist Link</a>
                </p>
                <p style={{fontFamily: 'serif'}}>A short (31 song) hardstyle playlist.</p>
                <p style={{fontFamily: 'serif'}}>ZYZZ APPROVED. YOU 'MIRIN BRUH?</p>
            </div>
        </div>
    )
}

export default Zyzz;