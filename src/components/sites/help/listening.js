import styled from 'styled-components';
import { useContext } from 'react';

import { LinkContext } from '../../systems/context';

const Player = styled.div`
    .progress-bar[value] {
        -webkit-appearance: none;
        appearance: none;
    
        width: 100%;
        height: 16px;
    }

    .progress-bar[value]::-webkit-progress-bar {
        background: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px 2px, transparent 2px 4px ), linear-gradient(#044207 0%, #044207);
        border: solid black 2px;
    }

    .progress-bar[value]::-webkit-progress-value {
        background: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0px 2px, transparent 2px 4px ), linear-gradient(#00FF00 0%, #00FF00);
    }
`;


const Help2 = ({number}) => {
    
    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="//help/listening/" style={{width: '100%', backgroundColor: 'teal', paddingTop: '10px'}}>
            <div style={{textAlign: 'center', backgroundImage: 'url(/images/Earth (16 colors).ico)'}} >
                <div style={{backdropFilter: 'blur(5px)'}}>
                <div className='opener' style={{textAlign: 'center', filter: 'drop-shadow(0 0 3px black)'}}>
                    <h1 style={{fontFamily: 'serif'}}>Help Page 2: Listening.</h1>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Listening to a radio is simple! Navigate to a page with the WinPlay3 browser, and wait for the radio to sync up.</p>
                        <div className='audio-box' style={{background: `#C0C7C8`, border: 'inset 3px', borderColor: 'black', width: '80%', display: 'flex', flexDirection: 'column'}}>
                            <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/cd6.gif'/>
                                    <h4 className='title' style={{marginLeft: '2px'}}>WinPlay3</h4>
                                </div>
                                <div className='buttons' style={{marginRight: '1px'}}>
                                    <button className='top-button X'><img alt='x' src='/images/winicon/X.png'/></button>
                                    <button className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                                    <button className='top-button m'><img alt='x' src='/images/winicon/Minimize.png'/></button>
                                </div>
                            </div>
                            <div className='file-bar audio-open radio-toggle' style={{width: '25%', marginLeft: '20px', height: '25px', alignItems: 'flex-start'}}>
                                <div className='radio-files' style={{zIndex: 10, gridTemplateColumns: '100%', padding: '0'}}>
                                    <p style={{margin: 0}}><u>F</u>ile</p>
                                    <div className='radio-hidemenu radio-dropmenu'>
                                        <p className='radio-file'>Find Song</p>
                                        <p className='radio-file'>Download</p>
                                    </div>
                                </div>
                                <div className='radio-options' style={{zIndex: 10}}>
                                    <p style={{margin: 0}}><u>O</u>ptions</p>
                                    <div className='radio-hidemenu radio-dropmenu'>
                                        <p className='radio-option'>Play</p>
                                        <p className='radio-option'>Pause</p>
                                        <p className='radio-option'>Mute</p>
                                    </div>
                                </div>
                                <div className='radio-helps' style={{zIndex: 10}}>
                                    <p style={{margin: 0}}><u>H</u>elp</p>
                                    <div className='radio-hidemenu radio-dropmenu'>
                                        <p className='radio-help'>Listening</p>
                                        <p className='radio-help'>Playlist</p>
                                    </div>
                                </div>
                            </div>
                            <Player style={{padding: '5px', border: 'outset 3px'}}>
                                <div className='black-box' style={{backgroundColor: 'black', overflowX: 'scroll', overflowY: 'hidden', border: 'inset 3px', padding: '10px'}}>
                                    <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px", gap: '2px', alignItems: 'center'}}>
                                        <p style={{color: `#00FF00`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1, textAlign: 'center'}}>Track#</p>
                                        <p style={{color: `#00FF00`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1, textAlign: 'center'}}>Time</p>
                                        <p style={{color: `#00FF00`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1, textAlign: 'center'}}>Length</p>
                                        <p style={{color: `#00FF00`, fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55', textAlign: 'center'}}>12</p>
                                        <p style={{color: `#00FF00`, fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2, marginLeft: '10px'}}>2:36</p>
                                        <p style={{color: `#00FF00`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px', marginLeft: '10px'}}>3:34</p>
                                        <div style={{gridColumn: 'span 3', gridRow: 3, overflow: 'hidden', backgroundColor: `#001f00`}}>
                                            <p style={{color: `#00FF00`, padding: '0 3px', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', lineHeight: '30px', whiteSpace: 'nowrap', width: '200%', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis'}} className='scrolling'>Example Song - Example Artist</p>
                                        </div>
                                        <div className='audio-open radio-toggle' style={{alignItems: 'center', padding: "5px", gridColumn: 'span 3', gridRow: 4}}>
                                            <progress className='progress-bar' max={100} value={60}/>
                                        </div>
                                        <img alt='decor' src={`/images/home/georadio.png`} style={{gridRow: 'span 3', gridColumn: 4, aspectRatio: '1/1', imageRendering: 'pixelated', marginLeft: '5px'}} height="100%" />
                                        <p style={{color: `#00FF00`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 4, gridRow: 4, lineHeight: '30px', marginLeft: '10px'}}>Update 1</p>
                                    </div>
                                </div>
                                <hr className='audio-open radio-toggle' style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                                <div style={{gridColumn: 'span 2'}}>
                                    <div className='audio-open buttons-container radio-toggle' style={{alignItems: 'center'}}>
                                        <div style={{display: 'flex'}}>
                                            <button title='play' className='play-button indent player-button'>
                                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                                </button>
                                            <button title='pause' className='pause-button player-button'>
                                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                                            </button>
                                            <button title='shuffle' id={`shuffle-${number}`} className='shuffle-button player-button'>
                                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>⇋</p>
                                            </button>
                                            <button title='download' className='player-button'>
                                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}><img src="/images/winicon/Download.png" width="16px" height="16px" /></p>
                                            </button>
                                        </div>
                                        <div style={{display: 'flex', width: '100%'}}>                                
                                            <button style={{display: 'flex', alignItems: 'center', border: 'outset 3px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}}>
                                                <img alt='mute button' id={`mute-${number}`} src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                                            </button>
                                            <input style={{margin: '0', width: '100%', height: '27px'}} className='slider' type={'range'} max="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{background: 'black', border: 'inset 3px', width: 'calc(100% - 12px)', padding: '3px', margin: '3px'}}>
                                    <p style={{fontFamily: 'serif', textAlign: 'center', margin: 0, color: `#00FF00`, fontFamily: 'pixel', fontSize: '10px'}}>Last Song: <i>Last Song Example</i></p>
                                </div>
                            </Player>
                        </div>
                        <hr style={{width: '40%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Depending on the site, the radio will be different! For example: http://geomusic.net/ is a breakcore radio, while http://nightcity.net/ is a cyberpunk radio.</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Radios may start muted. To unmute, just hit the crossed volume button until you can hear the music. If you still can't hear music, make sure the site isn't muted and/or try adjusting the volume slider!</p>
                    <img alt='decor' src='/images/Mute volume.ico' />
                </div>
                <hr style={{width: '65%', height: '1px'}}/>
                <div style={{padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                    <h3>Common Sites:</h3>
                    <p style={{cursor: "url(../../public/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.geomusic.net/')}>http://www.geomusic.net/</p>
                    <p style={{cursor: "url(../../public/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.nightcity.net/')}>http://www.nightcity.net/</p>
                    <p style={{cursor: "url(../../public/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.channelf.co/radio')}>http://www.channelf.co/radio</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Help2;