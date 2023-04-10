import { useContext, useState } from 'react';
import { LinkContext } from '../../context';

import MusicPlayer from '../../musicplayer';

const NeonSunset = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        setRadioload(true)
    }

    return (
        <div onLoad={() => changeStation(4)} id="neonsunset" style={{width: '100%', backgroundImage: `url(/images/sunrise/set.png)`, backgroundSize: '100%', imageRendering: 'pixelated', marginTop: '-11px'}}>
            <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: 'rgba(231, 46, 152, 0.4)', boxShadow: '0 0 5px 5px orange, 0 0 5px 5px orange inset'}}>
                <fieldset>
                    <legend><h1 style={{color: 'red', fontFamily: 'serif', textShadow: '0 0 3px red', marginBottom: '0', WebkitTextStroke: '0.5px purple'}}>.::Welcome to NEON_SUNSET::.</h1></legend>
                    <img alt='decor' src='/images/sunrise/neoarule.gif' style={{filter: 'hue-rotate(30deg)'}} width={'60%'} />
                    <p style={{color: 'deepskyblue', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '35px 25px', padding: '5px', background: 'rgba(0,0,0,0.3)', borderRadius: '50px'}}>.::Home of the ETERNAL_SUMMER_NIGHT Radio --streaming 24/7 citypop to your browser. Powered by YouTube's infinite engine of music::.</p>
                </fieldset>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div className='radio' style={{display: 'grid', gridTemplateColumns: '15% 70% 15%', border: 'solid 30px', borderImageSource: 'url(/images/sunrise/star.gif)', borderImageRepeat: 'repeat', borderImageSlice: '20 0'}}>
                <div style={{gridColumn: '2'}}>
                    {radioload ?
                        <MusicPlayer/>
                    : null}
                </div>
            </div>
                <div style={{width: '100%', height: '100%', margin: '20px 0', boxShadow: '0 0 5px 5px orange, 0 0 5px 5px orange inset', display: 'flex'}}>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/ad3.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://www.silvermoon.site/')} src='/images/nightcity/jsm002.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://pokemon2001.com/')} src='/images/sunrise/pokemonad.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('blank')} src='/images/ad10.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://www.pinky.blog/')} src='/images/nightcity/sb2.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('blank')} src='/images/nightcity/totallyhamuBANA1.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                </div>
            <div style={{height: '1070px', marginTop: '50px', display: 'flex', overflowX: 'scroll'}}>
                <div>
                    
                </div>
                <div style={{height: 'fit-content', backgroundColor: 'rgba(231, 46, 152, 0.4)', boxShadow: '0 0 5px 5px orange, 0 0 5px 5px orange inset'}}>
                    <img alt='decor' width={'100%'} height='75px' src='/images/sunrise/Welneon.gif' style={{mixBlendMode: 'screen', filter: 'hue-rotate(60deg)'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', textAlign: 'right'}}>
                        <p style={{color: 'deepskyblue', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '0 20px'}}>Welcome to NEON_SUNSET, home of the ETERNAL_SUMMER_NIGHT Radio!! 
                        <br/>
                        <br/>Come hang out and listen to some music with other online listeners!
                        <br/>
                        <br/>ETERNAL_SUMMER_NIGHT is a 60s-90s Japanese CityPop and related mix, you can view the playlist below!!</p>
                    </div>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{color: 'deepskyblue', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left'}}>The playlist can be found here: <a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMwCsmVOZZ74XF68JFJ_y2uK">Playlist</a></p>
                </div>
            </div>
        </div>
    )
}

export default NeonSunset;