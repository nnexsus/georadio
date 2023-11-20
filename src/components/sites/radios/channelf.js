import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';
import qotd from '../../json/exo.json';

import threads from '../../json/channelf-forums.json';

const ChannelF = ({number, addbar}) => {

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
        changeStation(2)
    }, [])

    //station numbers: [0 - geomusic, 1 - nightcity, 2 - channelf]
    return (
        <div style={{height: '100%'}}>
            {addbar.includes("/radio") ?
            <div id="http://channelf.co/" style={{width: '100%', backgroundImage: `url(/images/tile3.webp)`, paddingTop: '10px'}}>
                <div className='radio cyberpunk-radio'>
                    <div className='channelf-albums mobilehide'>
                        <h1 style={{textAlign: 'center'}}>ALBUMS:</h1>
                        <img alt='decor' src='/images/channelf/exo2.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/exo1.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/rav4.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/rav1.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                    </div>
                    <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/tile.jpg)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '2', gridRow: '1'}}>
                        <h1 style={{color: 'orange', fontFamily: 'serif', textShadow: '0 0 5px orange'}}>--TUNING IN TO CHANNEL F--</h1>
                        <hr style={{width: '80%', height: '5px'}}/>
                        <div style={{border: 'inset 2px'}}>
                            <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>WELCOME TO EXO RADIO!!</p>
                            <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>MAKE SURE TO CHECK OUT <a title='http://www.channelf.co/forum' href={`#scrollto-${number}`} onClick={() => clickLink('http://www.channelf.co/forum')} >HTTP://WWW.CHANNELF.CO/FORUM</a> TO POST YOUR FAVORITE SONGS!! AND FOR RELEASE ALERTS</p>
                        </div>
                        <hr style={{width: '80%', height: '5px'}}/>
                        {radioload ?
                        <MusicPlayer radionum={2} number={number} themeid={2}/>
                        : <p>Loading...</p>}
                    </div>
                </div>
                <div style={{height: '200px', marginTop: '50px', display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{textAlign: 'center'}}>Quote of the day:</h3>
                    <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>From: {qotd.qotd[Math.min(31, (new Date).getDate())].title}</p>
                    <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>{qotd.qotd[Math.min(31, (new Date).getDate())].text} - {qotd.qotd[Math.min(7, (new Date).getDate())].from}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '25px'}}>
                    <img alt='decor' src='/images/magicnightray.gif'/>
                    <p>JOIN THE FORUMS!!!!! <a title='http://www.channelf.co/forum' href={`#scrollto-${number}`} onClick={() => clickLink('http://www.channelf.co/forum')}>HTTP://WWW.CHANNELF.CO/FORUM</a>!!</p>
                </div>
            </div>

            : addbar.includes("/forum") ? 

            <div id="channelfforum" style={{width: '100%', height: '100%', backgroundImage: `url(/images/tile3.webp)`, paddingTop: '10px', padding: '20px'}}>
                <h1>ChannelF Forums - <a href={`#scrollto-${number}`} onClick={() => clickLink('http://www.channelf.co/radio')}>RADIO</a></h1>
                <hr style={{width: '65%', height: '1px'}}/>
                <div style={{display: 'grid', gridTemplateColumns: '20% 5px calc(80% - 50px)', gridTemplateRows: '40% 60%', gap: '10px', height: '100%'}}>
                    <div style={{gridColumn: 1, gridRow: 'span 2'}}>
                        {threads.threads.map((el) => {
                            return (
                                <div>
                                    <p><a href={`#scrollto-${number}`}>{el.name}</a></p>
                                </div>
                            )
                        })}
                    </div>
                    <hr style={{height: '65%', gridColumn: 2, gridRow: 'span 2'}}/>
                    <div style={{gridColumn: 3, gridRow: 1, background: '#C0C7C8', padding: '10px', border: 'outset 3px'}}>
                        <h2 style={{color: 'black', fontFamily: 'Ariel'}}>IMPORTANT ANNOUNCEMENT</h2>
                        <p style={{color: 'black', fontFamily: 'Ariel'}}>FORUMS ARE BACK BUT TEMPORARILY DOWN!! THE THINGY I USED TO SAVE THE COMMENTS WENT DOWN SO IM FINDING A NEW ONE</p>
                    </div>
                    <div style={{gridColumn: 3, gridRow: 2, background: '#C0C7C8', padding: '10px', border: 'outset 3px'}}>
                        <h3 style={{color: 'black', fontFamily: 'Ariel'}}>Error 2324</h3>
                        <p style={{color: 'black', fontFamily: 'Ariel'}}>Unable to retrieve database connection from server. Please check your authentication settings.</p>
                    </div>
                </div>
            </div>
            : 
            <div className='navmenu-moemoejp' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'orange'}}>
                <div className='opener' style={{textAlign: 'center', padding: '4px', background: 'url(/images/starbd.gif)'}}>
                    <h2 style={{color: 'white', fontFamily: 'serif', marginBottom: '0',}}>404</h2>
                    <h2 style={{color: 'white', fontFamily: 'serif', marginBottom: '0',}}>Page Not Found!</h2>
                    <a href={`#scrollto-${number}`} title='http://channelf.co/radio' onClick={() => clickLink('http://channelf.co/radio')} ><p>Radio</p></a>
                    <a href={`#scrollto-${number}`} title='http://channelf.co/forum' onClick={() => clickLink('http://channelf.co/forum')} ><p>Forum</p></a>
                </div>
            </div>}
        </div>
    )
}

export default ChannelF;