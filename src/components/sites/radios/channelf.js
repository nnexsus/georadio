import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

import qotd from '../../json/exo.json';

const ChannelF = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
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
        <div id="http://channelf.co/" style={{width: '100%', backgroundImage: `url(/images/tile3.webp)`, paddingTop: '10px'}}>
            <div className='radio' style={{display: 'grid', gridTemplateColumns: '20% 80%'}}>
                <div style={{width: '100%', height: '100%', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '1', gridRow: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0 20px 0'}}>
                    <h1 style={{textAlign: 'center'}}>ALBUMS:</h1>
                    <img alt='decor' src='/images/channelf/rav4.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav1.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav2.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav3.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                </div>
                <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/tile.jpg)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '2', gridRow: '1'}}>
                    <h1 style={{color: 'orange', fontFamily: 'serif', textShadow: '0 0 5px orange'}}>--TUNING IN TO CHANNEL F--</h1>
                    <hr style={{width: '80%', height: '5px'}}/>
                    <div style={{border: 'inset 2px'}}>
                        <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>WELCOME TO EXO RADIO!!</p>
                        <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>MAKE SURE TO CHECK OUT <b style={{textDecoration: 'line-through'}} title='Forum Temporarily Closed' >HTTP://WWW.CHANNELF.CO/FORUM/</b> TO POST YOUR FAVORITE SONGS!! --forum temporarily closed for construction!!</p>
                    </div>
                    <hr style={{width: '80%', height: '5px'}}/>
                    {radioload ? 
                    <MusicPlayer radionum={2}/>
                    : <p>Loading...</p>}
                </div>
            </div>
            <div style={{height: '200px', marginTop: '50px', display: 'flex', flexDirection: 'column'}}>
                <h3>Quote of the day:</h3>
                <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>From: {qotd.qotd[Math.min(31, (new Date).getDay())].title}</p>
                <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>{qotd.qotd[Math.min(31, (new Date).getDay())].text} - {qotd.qotd[Math.min(7, (new Date).getDay())].from}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img alt='decor' src='/images/magicnightray.gif'/>
                <p>JOIN THE FORUMS!!!!! <b style={{textDecoration: 'line-through'}}>HTTP://WWW.CHANNELF.CO/FORUM/</b>!! --temporarily closed for construction itLL BE UP SOON I PROMISE</p>
            </div>
        </div>
    )
}

export default ChannelF;