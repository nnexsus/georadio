import { useContext, useState } from 'react';
import { LinkContext } from './../context';

import MusicPlayer from '../musicplayer';

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
    //station numbers: [0 - geomusic, 1 - nightcity, 2 - channelf]
    return (
        <div onLoad={() => changeStation(2)} id="channelf" style={{width: '100%', backgroundImage: `url(/images/tile3.jpg)`, paddingTop: '10px'}}>
            <div className='radio' style={{display: 'grid', gridTemplateColumns: '20% 80%'}}>
                <div style={{width: '100%', height: '100%', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '1', gridRow: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 0 20px 0'}}>
                    <h1 style={{textAlign: 'center'}}>ALBUMS:</h1>
                    <img alt='decor' src='/images/channelf/rav1.jpg' width='70%' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto", margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav2.jpg' width='70%' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto", margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav3.jpg' width='70%' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto", margin: '0 auto'}}/>
                    <img alt='decor' src='/images/channelf/rav4.jpg' width='70%' style={{imageRendering: 'pixelated', cursor: "url(/images/cursor/pointer.cur), auto", margin: '0 auto'}}/>
                </div>
                <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/tile.jpg)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '2', gridRow: '1'}}>
                    <h1 style={{color: 'orange', fontFamily: 'serif', textShadow: '0 0 5px orange'}}>--TUNING IN TO CHANNEL F--</h1>
                    <hr style={{width: '80%', height: '5px'}}/>
                    <div style={{border: 'inset 2px'}}>
                        <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>I LOVE KILL BILL & RAV!!! 24/7 KILL BILL AND RAV RADIO FOR ALL YOU KBR LOVERS!!!</p>
                        <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>MAKE SURE TO CHECK OUT <b style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.channelf.co/forum/')}>HTTP://WWW.CHANNELF.CO/FORUM/</b> TO POST YOUR FAVORITE SONGS!!</p>
                    </div>
                    <hr style={{width: '80%', height: '5px'}}/>
                    {radioload ? 
                    <MusicPlayer/>
                    : <p>Loading...</p>}
                </div>
            </div>
            <div style={{height: '200px', marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>"Tainted soul splintered, folded in the inner. Another lonely night veggie dinner for beginners."</p>
                <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>"You're all happy -you're just all trying to lie to me; and so my dark thought refinery's still functioning.
                    Still tryna punch through the walls cause I hope to discover lots of cameras -Rav this was a hoax!"
                </p>
                <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>"I just wanna lay next to you, till there's nothing else left but you."</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img alt='decor' src='/images/magicnightray.gif'/>
                <p>JOIN THE FORUMS!!!!! <b style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.channelf.co/forum/')}>HTTP://WWW.CHANNELF.CO/FORUM/</b>!!</p>
            </div>
        </div>
    )
}

export default ChannelF;