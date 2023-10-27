import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

const Cyberpunk = ({number}) => {

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
        changeStation(1)
    }, [])

    return (
        <div id="http://nightcity.net/" style={{width: '100%', backgroundImage: `url(/images/tile2.jpg)`, backgroundSize: '230px', paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                <h1 style={{color: '#FF4B98', fontFamily: 'serif', textShadow: '0 0 5px #FF4B98', marginBottom: '0'}}>Welcome to Night City!!</h1>
                <img alt='decor' src='/images/nightcity/neonlines.gif' />
                <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>The city that never sleeps --streaming 24/7 cyberpunk to your browser. Powered by YouTube's infinite engine of music.</p>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div className='radio cyberpunk-radio'>
                <div style={{gridColumn: '2'}}>
                    {radioload ? 
                        <MusicPlayer radionum={1} number={number}/>
                    : null}
                </div>
            </div>
                <div style={{width: '100%', height: '100%', margin: '20px 0', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', display: 'flex'}}>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://26.to/foreverfriend/' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/nightcity/foreverfake.webp' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.silvermoon.site/' onClick={() => clickLink('http://www.silvermoon.site/')} src='/images/nightcity/jsm002.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.neonsunrise.tl/' onClick={() => clickLink('http://www.neonsunrise.tl/')} src='/images/nightcity/summer_cafe.webp' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.freeishslots.net/' onClick={() => clickLink('http://freeishslots.net/')} src='/images/ad10.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.pinky.blog/' onClick={() => clickLink('http://www.pinky.blog/')} src='/images/nightcity/sb2.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://www.moemoe.jp/' onClick={() => clickLink('http://moemoe.jp/home')} src='/images/moemoejp/banner_princess02.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                </div>
            <hr style={{width: '85%', height: '1px'}}/>
            <div className='cyberpunk-footer'>
                <div style={{gridRow: 1, gridColumn: 1}}>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon.gif'/>
                    <img alt='decor' width={'100%'} height='75px' src='/images/nightcity/Neon_Welcome.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', textAlign: 'right'}}>
                        <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>CONNECTED TO: NightCityRadio
                        <br/>
                        <br/>NightCityRadio is a mixed bag of cyberpunk related genres. There's no telling what mood, intensity, or grandeur you'll hear with each passing song.
                        <br/>
                        <br/>Be sure to check the playlist below if you're looking for something you liked!!</p>
                    </div>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon.gif'/>
                </div>
                <div style={{gridRow: 1, gridColumnStart: 2, gridColumnEnd: 3}}>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon_purp_blk.gif'/>
                    <img alt='decor' width={'100%'} height='75px' src='/images/newsneon.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left', background: 'black', padding: '10px'}}>Nightcity Radio has recently gotten an update, bringing it from 50 songs to 81 songs!! Enjoy!</p>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left', background: 'black', padding: '10px'}}>The playlist can be found here: <a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMxitzM-KZH4kDdOgfRJy5QR">Playlist</a></p>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon_purp_blk.gif'/>
                </div>
                <div style={{width: '100%', height: '100%', gridRow: 'span 3', gridColumn: 4, margin: '20px 10px 20px 0', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                    <img alt='clickable ad decor' title='http://freeishslots.net/' onClick={() => clickLink('http://freeishslots.net/')} src='/images/nightcity/casino.gif' width='100%' height={'90%'} style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                </div>
            </div>
        </div>
    )
}

export default Cyberpunk;