import { useContext, useState, useEffect } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

const Website = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        setRadioload(true)
    }

    useEffect(() => {
        changeStation(0)
    }, [])

    return (
        <div id="http://geomusic.net/" style={{width: '100%', backgroundImage: `url(/images/tile.jpg)`, paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center'}}>
                <h1 style={{color: 'rgb(255, 0, 153)', fontFamily: 'serif'}}>Welcome to GeoMusic v2</h1>
                <hr style={{width: '80%', height: '1px'}}/>
                <p style={{color: 'rgb(51, 255, 204)', fontFamily: 'serif', margin: '0 20px'}}>Streaming 24/7 radio to your browser. Powered by YouTube's infinite engine of music. Over --- breakcore, deep dnb, and other songs.</p>
            </div>
            <hr style={{width: '80%', height: '1px'}}/>
            <div className='radio'>
                {radioload ? 
                <MusicPlayer radionum={0}/>
                : <p>Loading...</p>}
            </div>
            <div style={{height: '600px', marginTop: '50px'}}>
                <h2 style={{color: 'rgb(255, 204, 102)', fontFamily: 'serif', textAlign: 'center'}}>About GeoMusic</h2>
                <hr style={{width: '80%', height: '1px'}}/>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', alignItems: 'center'}}>
                    <img width={'40px'} height={'20px'} alt='decor' src='/images/geomusic/new.gif' />
                    <h3 style={{color: 'lightblue', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '0 20px'}}>New:</h3>
                    <p style={{color: 'rgb(51, 255, 204)', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '0 20px', textIndent: '50px'}}>GeoMusic just underwent update 2, which added 14 songs to the playlist. Bringing it to a total of 98 songs.</p>
                </div>
                <hr style={{width: '80%', height: '1px'}}/>
                <div style={{display: 'flex', textAlign: 'right'}}>
                    <p style={{color: 'rgb(51, 255, 204)', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '0 20px'}}>Welcome to GeoMusic!! 
                    <br/>
                    <br/>Come hang out and listen to some music with other online listeners!
                    <br/>
                    <br/>GeoMusic is a breakcore, dnb, and related mix, you can view the playlist below!!</p>
                    <img alt='decor' src='/images/musica_baile21.gif' width={'120px'} height={'120px'} style={{float: 'right', imageRendering: "pixelated"}}/>
                </div>
                <h4 style={{color: 'rgb(255, 204, 102)', fontFamily: 'serif', textAlign: 'center'}}>Playlist</h4>
                <hr style={{width: '80%', height: '1px'}}/>
                <div style={{display: 'flex'}}>
                    <p style={{color: 'rgb(51, 255, 204)', textShadow: '0 0 5px aqua', fontFamily: 'serif', margin: '10px 20px', textAlign: 'left'}}>The playlist can be found here: <a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMyx2Wfi9eh0ah5UawYN5KTd">Playlist</a></p>
                    <img alt='decor' src='/images/music (1).gif' width={'120px'} height={'120px'} style={{imageRendering: "pixelated"}}/>
                </div>
                <img alt='decor' src='/images/music2.gif' height={'150px'} style={{imageRendering: "pixelated", margin: '50px 0 0 25%'}}/>
            </div>
        </div>
    )
}

export default Website;