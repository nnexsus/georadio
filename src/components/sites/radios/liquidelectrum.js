import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

//import '../../css/liquidelectrum.css';

const LiquidElectrum = ({number, addbar}) => {

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
        changeStation(6)
    }, [])

    return (
        <div id='http://liquidelectrum.co/' style={{width: '100%', backgroundImage: `url(/images/liquidelectrum/bg.gif)`, backgroundSize: '70px', imageRendering: 'pixelated'}}>
            <div style={{display: 'flex', flexDirection: 'column', padding: '15%', boxShadow: '0 0 5px 5px #38B000 inset'}}>
                <div className='navmenu-liquidelectrum' style={{display: 'flex', alignItems: 'center'}}>
                    <button title="/main" className='liquidnav' onClick={() => clickLink('http://liquidelectrum.co/main')}><img src='/images/liquidelectrum/homegreen.gif'/></button>
                    <button title="/about" className='liquidnav' onClick={() => clickLink('http://liquidelectrum.co/about')}><img src='/images/liquidelectrum/AniGreenArrowBack.gif' /></button>
                </div>
        {addbar.includes("/main") ?
        <div className='navmenu-liquidelectrum' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='opener' style={{textAlign: 'center', padding: '20px', backgroundColor: 'rgba(0,0,0,0)', boxShadow: '0 0 5px 5px #38B000, 0 0 5px 5px #38B000 inset'}}>
                <h2 style={{color: '#38B000', fontFamily: 'serif', textShadow: '0 0 5px #CCFF33', marginBottom: '0', WebkitTextStroke: '0.5px #CCFF33'}}>Liquid.Electrum</h2>
                <p style={{color: '#CCFF33', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0'}}>welcome to Liquid.Electrum
                        <br/>
                        <br/>24.07 liquid dnb, ufk, electronic radio. over 85 nonstop songs
                </p>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/playlist?list=PLzhN8a1aNzMxvkEt1IpTbRLDI7WfqisjU'><p style={{color: 'blue', textDecoration: 'underline'}}>YOUTUBE PLAYLIST</p></a>

                <div className='navmenu-liquidelectrum' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className='radio'>
                        {radioload ?
                            <MusicPlayer/>
                        : null}
                    </div>
                </div>
            </div>
        </div> 
         : 
        <div>
            <h1>..::404::..</h1>
        </div>
        }
            </div>
        </div>
    )
}

export default LiquidElectrum;