import { LinkContext } from '../../systems/context';
import { useContext } from 'react';

import MusicPlayer from "../../musicplayer"

const CortexDriver = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    return (
        <div style={{background: 'url(/images/cortexdriver/pipes.png)', backgroundSize: '150px', height: 'calc(100% - 60px)', border: 'solid 20px #07103b', margin: '10px', outline: '10px solid #1d223c'}}>
            <div style={{height: '100%'}}>
                <div style={{padding: '10px'}}>
                    <h1 style={{textAlign: 'center', margin: 0, textShadow: 'white 0 0 5px'}}>CORTEX_DRIVER</h1>
                </div>
                <div>
                    <MusicPlayer radionum={8} number={number} themeid={8}/>
                </div>
                <div>
                    <div className='cortex-driver-lower' style={{height: 'fit-content'}}>
                        <hr style={{width: '80%', height: '1px'}}/>
                        <div style={{display: 'flex', textAlign: 'center'}}>
                            <p style={{color: 'white', fontFamily: 'serif', margin: '0 20px', textShadow: 'white 0 0 5px'}}>CORTEX_DRIVER</p>
                            <p style={{color: 'white', fontFamily: 'serif', margin: '0 20px', textShadow: 'white 0 0 5px'}}>--- SONGS, --- MINUTES</p>
                            <p style={{color: 'white', fontFamily: 'serif', margin: '0 20px', textShadow: 'white 0 0 5px'}}>HIGH BPM HARD ELECTRONIC</p>
                        </div>
                        <hr style={{width: '80%', height: '1px'}}/>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <a href={`#scrollto-${number}`} onClick={() => clickLink('http://digitalimports.org/')} title='http://digitalimports.org/'><img alt='digital imports ad' src="/images/cortexdriver/button5.gif" width={'128px'} height={'38px'}/></a>
                            <p style={{color: 'white', fontFamily: 'serif', margin: '10px 20px', textAlign: 'center', textShadow: 'white 0 0 5px'}}>YOUTUBE LINK: <a href="https://youtube.com/playlist?list=PLzhN8a1aNzMyePfoZqaY516fd79BbEXK3">PLAYLIST</a></p>
                            <a href={`#scrollto-${number}`} onClick={() => clickLink('http://www.screen-space-reflection.blog/')} title='http://www.screen-space-reflection.blog/'><img alt='screenspace reflection ad' src="/images/cortexdriver/radio29.gif" width={'128px'} height={'58px'}/></a>
                        </div>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default CortexDriver;