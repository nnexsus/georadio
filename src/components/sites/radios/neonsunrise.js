import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

const NeonSunrise = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        setRadioload(true)
    }

    useEffect(() => {
        changeStation(3)
    }, [])

    return (
        <div id="http://neonsunrise.tl/" style={{width: '100%', backgroundImage: `url(/images/sunrise/surfacefull.webp)`, backgroundSize: '100%', imageRendering: 'pixelated', marginTop: '-11px'}}>
            <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: 'rgba(231, 146, 252, 0.4)', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px pink inset'}}>
                <h1 style={{color: 'pink', fontFamily: 'serif', textShadow: '0 0 3px pink', marginBottom: '0', WebkitTextStroke: '0.5px white'}}>.::Welcome to NEON_SUNRISE::.</h1>
                <img alt='decor' src='/images/sunrise/neoarule.gif' width={'40%'} />
                <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '35px 25px', padding: '5px', background: 'rgba(0,0,0,0.3)', borderRadius: '50px'}}>.::Home of the ETERNAL_SUMMER Radio --streaming 24/7 future funk to your browser. Powered by YouTube's infinite engine of music::.</p>
                <img src='/images/sunrise/neu.gif' width={'50px'} alt='decor new' height={'25px'} />
                <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '35px 25px', padding: '5px', background: 'rgba(0,0,0,0.3)', borderRadius: '50px'}}>.::Update!! ETERNAL_SUMMER Radio is now at 168 songs!! Enjoy!!::.</p>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div className='radio sunrise-grid'>
                <div style={{gridColumn: '2'}}>
                    {radioload ?
                        <MusicPlayer radionum={3} number={number} themeid={3}/>
                    : null}
                </div>
            </div>
                <div style={{width: '100%', height: '100%', margin: '20px 0', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px pink inset', display: 'flex'}}>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/ad3.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://www.silvermoon.site/')} src='/images/nightcity/jsm002.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://pokemon2001.com/')} src='/images/sunrise/pokemonad.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.freeishslots.net/' onClick={() => clickLink('http://freeishslots.net/')} src='/images/ad10.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://www.pinky.blog/')} src='/images/nightcity/sb2.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.moemoe.jp/' onClick={() => clickLink('http://moemoe.jp/home')} src='/images/moemoejp/banner_princess02.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                </div>
            <div style={{height: '1070px', marginTop: '50px', display: 'flex', overflowX: 'scroll'}}>
                <div style={{height: 'fit-content', backgroundColor: 'rgba(231, 146, 252, 0.4)', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px pink inset'}}>
                    <img alt='decor' width={'100%'} height='75px' src='/images/sunrise/Welneon.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', textAlign: 'right'}}>
                        <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '0 20px'}}>Welcome to NEON_SUNRISE, home of the ETERNAL_SUMMER Radio!! 
                        <br/>
                        <br/>Come hang out and listen to some music with other online listeners!
                        <br/>
                        <br/>ETERNAL_SUMMER is a Future Funk and related mix, you can view the playlist below!!</p>
                    </div>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left'}}>The playlist can be found here: <a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMxSEmNoClMkSQllrQQTr13d">Playlist</a></p>
                </div>
                
                <img alt='decor' width={'30%'} height={'20%'} src='/images/sunrise/summer.gif'/>
            </div>
        </div>
    )
}

export default NeonSunrise;