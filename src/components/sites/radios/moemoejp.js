import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

import '../../css/moemoejp.css';

const MoeMoeJP = ({number, addbar}) => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        setRadioload(true)
    }

    const mailUpdate = () => {
        var updated = state.email
        updated.push(5)
        dispatch({type: 'update_email', email: updated})
    }

    useEffect(() => {
        changeStation(5)
    }, [])

    return (
        <div id='http://moemoe.jp/' style={{width: '100%', backgroundImage: `url(/images/moemoejp/pa12.gif)`, backgroundSize: '70px', imageRendering: 'pixelated', marginTop: '-11px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '20% 80%', gridTemplateRows: '100px 475px', margin: '0 10%'}}>
                <div className='navmenu-moemoejp' style={{gridColumn: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px'}}>
                    <p style={{whiteSpace: 'nowrap', color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0', WebkitTextStroke: '0.5px #E4C1F9'}}>»»——⍟——««</p>
                    <img src='/images/moemoejp/pink-up.gif' style={{height: '30px', width: '80px'}} />
                    <button title="/home" className='moemoenav' onClick={() => clickLink('http://moemoe.jp/home')}><img src='/images/moemoejp/home-op.gif' /></button>
                    <button title="/about" className='moemoenav' onClick={() => clickLink('http://moemoe.jp/about')}><img src='/images/moemoejp/about-op.gif' /></button>
                    <button title="/mail" className='moemoenav' onClick={() => clickLink('http://moemoe.jp/mail')}><img src='/images/moemoejp/mail-op.gif' /></button>
                    <button title="/friend" className='moemoenav' onClick={() => clickLink('http://moemoe.jp/friend')}><img src='/images/moemoejp/friend-op.gif' /></button>
                    <img src='/images/moemoejp/pink-up3.gif' style={{height: '20px', width: '80px'}} />
                    <p style={{whiteSpace: 'nowrap', color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0', WebkitTextStroke: '0.5px #E4C1F9'}}>»»——⍟——««</p>
                </div>
        {addbar.includes("/about") ?
        <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: '#E4C1F9', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px #FF99C8 inset'}}>
                <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>✧･ﾟ: *✧･ﾟ:* MOEMOE.JP *:･ﾟ✧*:･ﾟ✧</h2>
                <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>♥2♥4♥/♥7♥ </h2>
                <p style={{color: '#D0F4DE', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0'}}>ⓌⒺⓁⒸⓄⓂⒺ  ⓉⓄ  ⓂⓄⒺⓂⓄⒺ . ⒿⓅ
                        <br/>
                        <br/>ⓂⓄⒺⓂⓄⒺ . ⒿⓅ  ⒾⓈ  Ⓐ  ⓂⓄⒺ 一 ⓈⓉⓎⓁⒺ  ⓇⒶⒹⒾⓄ  ⒶⓃⒹ  ⓇⒺⓁⒶⓉⒺⒹ  ⓂⒾⓍ ,  ⓅⓁⒶⓎⓁⒾⓈⓉ  ⒷⒺⓁⓄⓌ !!
                </p>
                <img src='/images/moemoejp/new (1).gif' width={'60px'} height={'20px'} alt='decor' />
                <h4>♥W♥E♥'♥R♥E♥ ♥N♥E♥W♥<br/>♥W♥E♥L♥C♥O♥M♥E♥<br/>♥M♥O♥E♥M♥O♥E♥ ♥H♥A♥S♥ ♥3♥7♥ ♥S♥O♥N♥G♥S♥</h4>
                <a href='https://www.youtube.com/playlist?list=PLzhN8a1aNzMwQVPlGCGfOSxUFEXMZU3tD' target='_blank' rel='noreferrer'><p style={{color: 'blue', textDecoration: 'underline'}}>˜”*°•.˜”*°• YOUTUBE PLAYLIST •°*”˜.•°*”˜</p></a>
            </div>
        </div> 
         : 
        addbar.includes("/mail") ? 
        <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: '#E4C1F9', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px #FF99C8 inset'}}>
                    <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>✧･ﾟ: *✧･ﾟ:* MOEMOE.JP *:･ﾟ✧*:･ﾟ✧</h2>
                    <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>♥2♥4♥/♥7♥</h2>
                    <p style={{color: '#D0F4DE', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0'}}>ⒸⓁⒾⒸⓀ  ⒽⒺⓇⒺ  ⓉⓄ  ⒶⒹⒹ  ⓂⓎ  ⒺⓂⒶⒾⓁ  !! 
                            <br/>
                            <br/>Ⓘ  ⓁⒾⓀⒺ  ⓉⓄ  ⓉⒶⓁⓀ !!
                    </p>
                    <button onClick={() => mailUpdate()}><p>˜”*°•.˜”*°• ADD EMAIL •°*”˜.•°*”˜</p></button>
                </div>
            </div>
        </div>
         : 
        addbar.includes("/friend") ? 
        <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: '#E4C1F9', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px #FF99C8 inset'}}>
                    <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>✧･ﾟ: *✧･ﾟ:* MOEMOE.JP *:･ﾟ✧*:･ﾟ✧</h2>
                    <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>♥2♥4♥/♥7♥</h2>
                    <p style={{color: '#D0F4DE', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0'}}>ⓅⓁⒺⒶⓈⒺ  ⒸⒽⒺⒸⓀ  ⓄⓊⓉ  ⓂⓎ  ⒻⓇⒾⒺⓃⒹⓈ !!</p>
                    <div style={{display: 'flex'}}>
                        <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='blank' onClick={() => clickLink('blank')} src='/images/moemoejp/tiara_fragment.jpg' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                        <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='blank' onClick={() => clickLink('blank')} src='/images/ad16.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                        <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://silvermoon.site/' onClick={() => clickLink('http://silvermoon.site/')} src='/images/nightcity/moonbutton_1.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>
                        <a href={`#scrollto-${number}`} style={{width: '80%', height: '43px', cursor: "url(/images/cursor/pointer.cur), auto"}}><img alt='clickable ad decor' title='http://pinky.blog/' onClick={() => clickLink('http://pinky.blog/')} src='/images/nightcity/sb2.gif' width='100%' height='43px' style={{imageRendering: 'pixelated'}}/></a>  
                    </div>
                </div>
            </div>
        </div>
         : 
         addbar.includes("/home") ? 
        <div id="moemoejp">
            <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: '#E4C1F9', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px #FF99C8 inset'}}>
                    <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>✧･ﾟ: *✧･ﾟ:* MOEMOE.JP *:･ﾟ✧*:･ﾟ✧</h2>
                    <h2 style={{color: '#A9DEF9', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>2♥4♥/♥7♥ ♥M♥O♥E♥ ♥R♥A♥D♥I♥O</h2>
                </div>
            </div>
            <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #A9DEF9', marginBottom: '0', WebkitTextStroke: '0.5px #E4C1F9'}}>｡☆✼★━━━━━━━━━━━━★✼☆｡</h2>
                <div className='radio' style={{backgroundColor: '#E4C1F9', border: 'solid black 2px', borderRadius: '30px'}}>
                    {radioload ?
                        <MusicPlayer radionum={5} number={number}/>
                    : null}
                </div>
            </div>
        </div>
        :
        <div className='navmenu-moemoejp' style={{gridColumn: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='opener' style={{textAlign: 'center', padding: '4px', backgroundColor: '#E4C1F9', boxShadow: '0 0 5px 5px pink, 0 0 5px 5px #FF99C8 inset'}}>
                <h2 style={{color: '#FF99C8', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>✧･ﾟ: *✧･ﾟ:* 404 *:･ﾟ✧*:･ﾟ✧</h2>
                <h2 style={{color: '#A9DEF9', fontFamily: 'serif', textShadow: '0 0 5px #D0F4DE', marginBottom: '0', WebkitTextStroke: '0.5px #FCF6BD'}}>D♥I♥R♥E♥C♥T♥O♥R♥Y♥ ♥N♥O♥T♥ ♥F♥O♥U♥N♥D</h2>
            </div>
        </div>
        }
            </div>
        </div>
    )
}

export default MoeMoeJP;