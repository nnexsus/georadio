import { useContext, useState } from 'react';
import { LinkContext } from './../context';

import MusicPlayer from '../musicplayer';

const Cyberpunk = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        dispatch({type: 'new_site', site: 'http://www.nightcity.net/'})
        setRadioload(true)
    }

    return (
        <div onLoad={() => changeStation(1)} id="cyberpunk" style={{width: '100%', backgroundImage: `url(/images/tile2.jpg)`, backgroundSize: '230px', paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                <h1 style={{color: '#FF4B98', fontFamily: 'serif', textShadow: '0 0 5px #FF4B98', marginBottom: '0'}}>Welcome to Night City!!</h1>
                <img alt='decor' src='/images/nightcity/neonlines.gif' />
                <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>The city that never sleeps --streaming 24/7 cyberpunk to your browser. Powered by YouTube's infinite engine of music.</p>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div className='radio' style={{display: 'grid', gridTemplateColumns: '150px 70% 150px'}}>
                <div style={{gridColumn: '2'}}>
                    {radioload ? 
                        <MusicPlayer/>
                    : null}
                </div>
            </div>
                <div style={{width: '100%', height: '100%', margin: '20px 0', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', display: 'flex'}}>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/nightcity/foreverfake.webp' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' onClick={() => clickLink('http://www.silvermoon.site/')} src='/images/nightcity/jsm002.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' onClick={() => clickLink('http://www.neonsunrise.tl/')} src='/images/nightcity/summer_cafe.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' src='/images/ad10.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' onClick={() => clickLink('http://www.pinky.blog/')} src='/images/nightcity/sb2.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                    <a href='#scrollto' style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' src='/images/nightcity/totallyhamuBANA1.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                </div>
            <hr style={{width: '85%', height: '1px'}}/>
            <div style={{height: '1070px', marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(5, 20%)', gridTemplateRows: 'repeat(3, 1fr)'}}>
                <div style={{width: '100%', height: '100%', gridRow: 'span 3', gridColumn: 1, margin: '20px 10px 20px 0', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                    <img alt='clickable ad decor' src='/images/nightcity/banner.gif' width='100%' height={'90%'} style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                </div>
                <div style={{gridRow: 1, gridColumn: 4}}>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon.gif'/>
                    <img alt='decor' width={'100%'} height='75px' src='/images/nightcity/Neon_Welcome.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', textAlign: 'right'}}>
                        <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>CONNECTED TO: NightCityRadio
                        <br/>
                        <br/>Come hang out and listen to some music with other online listeners!
                        <br/>
                        <br/>NightCityRadio is a modern cyberpunk radio and related mix, you can view the playlist below!!</p>
                    </div>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon.gif'/>
                </div>
                <div style={{gridRow: 2, gridColumn: 3}}>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon_purp_blk.gif'/>
                    <img alt='decor' width={'100%'} height='75px' src='/images/newsneon.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{color: '#42fcb5', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left'}}>The playlist can be found here: <a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMxitzM-KZH4kDdOgfRJy5QR">Playlist</a></p>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neon_purp_blk.gif'/>
                </div>
                <div style={{gridRow: 3, gridColumn: '2/5'}}>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neonyellow.gif'/>
                    <img alt='decor' width={'100%'} height='75px' src='/images/neonlinks.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px'}}>
                        <button style={{cursor: "url(/images/cursor/pointer.cur), auto", padding: '0', border: 'none'}} onClick={() => clickLink('http://26.to/foreverfriend/')}><img alt='clickable ad decor' src='/images/ad14.gif'/></button>
                        <button style={{cursor: "url(/images/cursor/pointer.cur), auto", padding: '0', border: 'none'}}><img alt='clickable ad decor' src='/images/ad15.gif'/></button>
                        <button style={{cursor: "url(/images/cursor/pointer.cur), auto", padding: '0', border: 'none'}}><img alt='clickable ad decor' src='/images/ad18.gif'/></button>
                    </div>
                    <img alt='decor' width={'100%'} src='/images/nightcity/neonyellow.gif'/>
                </div>
                <div style={{width: '100%', height: '100%', gridRow: 'span 3', gridColumn: 5, margin: '20px 10px 20px 0', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                    <img alt='clickable ad decor' src='/images/nightcity/casino.gif' width='100%' height={'90%'} style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto"}}/>
                </div>
            </div>
        </div>
    )
}

export default Cyberpunk;