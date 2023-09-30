import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Help3 = () => {
    
    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="//help/apps/" style={{width: '100%', backgroundColor: 'teal', paddingTop: '10px'}}>
            <div style={{textAlign: 'center', backgroundImage: 'url(/images/Earth (16 colors).ico)'}} >
                <div style={{backdropFilter: 'blur(5px)'}}>
                <div className='opener' style={{textAlign: 'center', filter: 'drop-shadow(0 0 3px black)'}}>
                    <h1 style={{fontFamily: 'serif'}}>Help Page 3: Apps.</h1>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>GeoRadio has a few different apps, and a few different ways to interact with them.</p>
                    <div className='app-icon' style={{background: 'teal'}}>
                        <img alt='decor' src='/images/Mail.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p style={{textAlign: 'center'}}>Inbox</p>
                    </div>
                        <hr style={{width: '40%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Simply click these apps to open or close them!</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>You can also drag and resize these apps as you can on your own dekstop!</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>The browser app is special, and can have infinite copies of itself open at once.</p>
                </div>
                <hr style={{width: '65%', height: '1px'}}/>
                <div style={{padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                    <h3>Common Sites:</h3>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.geomusic.net/')}>http://www.geomusic.net/</p>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.nightcity.net/')}>http://www.nightcity.net/</p>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.channelf.co/')}>http://www.channelf.co/</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Help3;