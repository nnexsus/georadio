import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Help2 = () => {
    
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
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='audio-box' style={{backgroundColor: '#C0C7C8', border: 'inset 3px', borderColor: 'black', width: '80%', display: 'flex', flexDirection: 'column'}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/cd6.gif'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>WinPlay3</h4>
                    </div>
                    <div className='buttons' style={{marginRight: '1px'}}>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(../../public/images/cursor/pointer.cur), auto"}} disabled="true"><p style={{margin: 0, color: 'black'}}>X</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(../../public/images/cursor/pointer.cur), auto"}} disabled="true"><p style={{margin: 0, color: 'black'}}>◻</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(../../public/images/cursor/pointer.cur), auto"}} disabled="true"><p style={{margin: 0, color: 'black'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderBottom: 'black solid 1px'}}>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: "url(../../public/images/cursor/pointer.cur), auto"}}><p style={{margin: 0, color: 'black'}}>File</p></button>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: "url(../../public/images/cursor/pointer.cur), auto"}}><p style={{margin: 0, color: 'black'}}>Options</p></button>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: "url(../../public/images/cursor/pointer.cur), auto"}}><p style={{margin: 0, color: 'black'}}>Help</p></button>
                </div>
                <div style={{padding: '20px', border: 'outset 3px', display: 'grid', gridTemplateColumns: "80% 20%"}}>
                    <div className='black-box' style={{backgroundColor: 'black', display: 'grid', gridTemplateRows: '15% 85%', border: 'inset 3px', padding: '10px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px"}}>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1}}>Track</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1}}>Min : Sec</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1}}>Length</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55'}}>2</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2}}>2:25</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px'}}>5:50</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 'span 3', gridRow: 3, lineHeight: '30px', overflow: 'hidden'}}>Example - Help Page</p>
                            <img alt='decor' src='/images/winicon/Help page.ico' style={{gridRow: 'span 3', gridColumn: 4}} width="100%" height="100%" />
                        </div>
                    </div>
                    <div>
                        <div style={{margin: '15px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', border: 'outset 3px'}}>
                            <button style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(../../public/images/cursor/pointer.cur), auto"}}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>i</p>
                            </button>
                        </div>
                    </div>
                    <hr style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                    <div style={{gridColumn: 'span 2'}}>
                        <div style={{display: 'inline-flex', alignItems: 'center', border: "outset 3px"}}>
                            <button className='play-button indent player-button'>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                </button>
                            <button className='pause-button player-button'>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                            </button>
                            <button style={{display: 'flex', alignItems: 'center', border: 'outset 3px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(../../public/images/cursor/pointer.cur), auto"}}>
                                <img alt='mute button' id='mute' src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                            </button>
                            <input style={{marginLeft: '5px'}} className='slider' type={'range'} max="100"/>
                        </div>
                    </div>
                </div>
            <div style={{display: 'flex', alignItems: 'center', padding: "5px", border: "outset 3px"}}>
                <p style={{marginRight: '10px'}}>Progress:</p><progress className='progress-bar' max={100} value={50}/>
            </div>
                <p style={{fontFamily: 'serif'}}>Last Song: <i>Example - Example1</i></p>
            </div>
        </div>
                        <hr style={{width: '40%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Depending on the site, the radio will be different! For example: http://geomusic.net/ is a breakcore radio, while http://nightcity.net/ is a cyberpunk radio.</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Radios may start muted. To unmute, just hit the crossed volume button until you can hear the music. If you still can't hear music, make sure the site isn't muted and/or try adjusting the volume slider!</p>
                    <img alt='decor' src='/images/Mute volume.ico' />
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>You can create a custom radio & page too! Just send a design to <a href='mailto:nnexsus.service@gmail.com'>nnexsus.service@gmail.com</a> and I'll see to add it!</p>
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