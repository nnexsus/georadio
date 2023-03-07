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
        setRadioload(true)
    }

    return (
        <div onLoad={() => changeStation(1)} id="cyberpunk" style={{width: '100%', backgroundImage: `url(/images/tile2.jpg)`, paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                <h1 style={{color: '#FF4B98', fontFamily: 'serif', textShadow: '0 0 5px #FF4B98'}}>Welcome to Night City!!</h1>
                <hr style={{width: '80%', height: '1px'}}/>
                <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>Night City, the city that never sleeps --streaming 24/7 cyberpunk to your browser. Powered by YouTube's infinite engine of music.</p>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div className='radio' style={{display: 'grid', gridTemplateColumns: '15% 70% 15%'}}>
                <div style={{width: '100%', height: '100%', margin: '20px', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                    <p className='hidden devnotes readme'>For some reason, this will not display all 6 gifs when used as a ul li, or refreshed. Probably something with react but who knows.</p>
                    <img alt='clickable ad decor' src='/images/ad1.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad2.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/ad3.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad4.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad9.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad8.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                </div>
                <div style={{gridColumn: '2'}}>
                    {radioload ? 
                        <MusicPlayer/>
                    : null}
                </div>
                <div style={{width: '100%', height: '100%', margin: '20px', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                    <img alt='clickable ad decor' onClick={() => clickLink('http://26.to/foreverfriend/')} src='/images/ad3.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad8.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad9.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad10.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad11.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                    <img alt='clickable ad decor' src='/images/ad12.gif' width='80%' height='43px' style={{imageRendering: 'pixelated', cursor: 'pointer'}}/>
                </div>
            </div>
            <div style={{height: '600px', marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div>
                    <img alt='decor' width={'100%'} height='75px' src='/images/welneon.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', textAlign: 'right'}}>
                        <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px'}}>Night City is a simple webapp that streams a 24/7 breakcore & dnb radio to your browser! 
                        <br/>
                        <br/>Come hang out and listen to some music with other online listeners!
                        <br/>
                        <br/>GeoMusic is designed to bypass livestreaming through youtube, as to not eat up upload bandwith. Instead, the songs are hosted on a remote server, and only sent to the client when playing.</p>
                    </div>
                </div>
                <div>
                    <img alt='decor' width={'100%'} height='75px' src='/images/newsneon.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex'}}>
                        <p style={{color: '#00F9FB', textShadow: '0 0 5px #00F9FB', fontFamily: 'serif', margin: '0 20px', textAlign: 'left'}}>The full playlist JSON can be download here: <a>Playlist JSON</a>
                        <br/>
                        <br/><b>Any songs will be taken off with request.</b> To find a song by name, simply CTRL + F on the JSON and search.</p>
                    </div>
                </div>
                <div>
                    <img alt='decor' width={'100%'} height='75px' src='/images/neonlinks.gif' style={{mixBlendMode: 'screen'}}/>
                    <hr style={{width: '80%', height: '1px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px'}}>
                        <button style={{cursor: 'pointer', padding: '0', border: 'none'}} onClick={() => clickLink('http://26.to/foreverfriend/')}><img alt='clickable ad decor' src='/images/ad14.gif'/></button>
                        <button style={{cursor: 'pointer', padding: '0', border: 'none'}}><img alt='clickable ad decor' src='/images/ad15.gif'/></button>
                        <button style={{cursor: 'pointer', padding: '0', border: 'none'}}><img alt='clickable ad decor' src='/images/ad18.gif'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cyberpunk;