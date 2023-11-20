import MusicPlayer from "../../../musicplayer";

import '../../../css/fish.css';

const ScreenSpaceReflection = ({number}) => {
    return (
        <div className="fish-div">
            <div style={{paddingTop: '100px'}}>
                <h1 style={{padding: '10px', background: 'rgba(0,0,0,0.5)', textShadow: '0 0 5px pink', textAlign: 'center', fontFamily: 'alarm', color: 'pink'}}>105.6 - LATE NITE SWIM RADIO</h1>
                <p style={{padding: '10px', background: 'rgba(0,0,0,0.5)', textShadow: '0 0 5px pink', textAlign: 'center', fontFamily: 'alarm', color: 'pink'}}>A DEEP CYBERPUNKISH RADIO TO REFLECT AND FLATLINE TO.</p>
            </div>
            <div style={{paddingTop: '30px'}}>
                <MusicPlayer number={number} radionum={10} themeid={10}/>
            </div>
            <div className="fish-mobile" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="fish-div-lower" style={{background: 'rgba(68,0,128,0.4)', border: 'solid red 2px'}}>
                    <pre style={{fontFamily: 'lcd', color: 'red', textAlign: 'center', margin: '10px 4px -4px 0'}}>{texts[0]}</pre>
                    <pre style={{fontFamily: 'lcd', color: 'red', textAlign: 'center', margin: 0}}>{texts[1]}</pre>
                    <a className="fish-link" href="https://music.youtube.com/playlist?list=PLd3Qnr-uh8XDcZ1eLiTHOFhEoM9KIHBab" target="_blank" rel="noreferrer"><p style={{fontFamily: 'lcd', textAlign: 'center'}}>PLAYLIST LINK</p></a>
                </div>
            </div>
            <div style={{paddingTop: '15px', paddingBottom: '40px', transform: 'scaleY(-1)', filter: 'blur(7px) contrast(0.8) brightness(0.8)'}}>
                <div style={{paddingTop: '100px'}}>
                    <h1 style={{padding: '10px', background: 'rgba(0,0,0,0.5)', textShadow: '0 0 5px pink', textAlign: 'center', fontFamily: 'alarm'}}>105.6 - LATE NITE SWIM RADIO</h1>
                    <p style={{padding: '10px', background: 'rgba(0,0,0,0.5)', textShadow: '0 0 5px pink', textAlign: 'center', fontFamily: 'alarm'}}>A DEEP CYBERPUNKISH RADIO TO REFLECT AND FLATLINE TO.</p>
                </div>
                <div style={{paddingTop: '30px'}}>
                    <MusicPlayer number={number} radionum={-1} themeid={10}/>
                </div>
                <div className="fish-mobile" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="fish-div-lower" style={{background: 'rgba(68,0,128,0.4)', border: 'solid red 2px'}}>
                        <pre style={{fontFamily: 'lcd', color: 'red', textAlign: 'center', margin: '10px 4px -4px 0'}}>{texts[0]}</pre>
                        <pre style={{fontFamily: 'lcd', color: 'red', textAlign: 'center', margin: 0}}>{texts[1]}</pre>
                        <a className="fish-link" href="https://music.youtube.com/playlist?list=PLd3Qnr-uh8XDcZ1eLiTHOFhEoM9KIHBab" target="_blank" rel="noreferrer"><p style={{fontFamily: 'lcd', textAlign: 'center'}}>PLAYLIST LINK</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenSpaceReflection;


const texts = [
`
▐▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
`,
`▐ ᶜᵒⁿⁿᵉᶜᵗᶦᵒⁿ ᵉˢᵗᵃᵇˡᶦˢʰᵉᵈ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▐
▐┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉▐
▐-2.5 HOURS OF RUNTIME                  ▐
▐-ENTER A SCREENSPACE REFLECTION        ▐
▐                                       ▐
▐-MUSIC TO REFLECT AND FLATLINE TO      ▐
◥                                       ◤
`];