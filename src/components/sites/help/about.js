import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Help4 = () => {
    
    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="help" style={{width: '100%', backgroundColor: 'teal', paddingTop: '10px'}}>
            <div style={{textAlign: 'center', backgroundImage: 'url(/images/Earth (16 colors).ico)'}} >
                <div style={{backdropFilter: 'blur(5px)'}}>
                <div className='opener' style={{textAlign: 'center', filter: 'drop-shadow(0 0 3px black)'}}>
                    <h1 style={{fontFamily: 'serif'}}>Help Page 4: About.</h1>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>To navigate between sites, simply type the address in the address bar above (currently displaying '//help/navigating/').</p>
                    <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black', backgroundColor: 'lightgray'}}>
                        <p style={{color: 'black', marginRight: '3px'}}>Address:</p>
                        <input type={'text'} placeholder='Type in here!' disabled={true} style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}}/>
                    </div>
                        <hr style={{width: '40%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Make sure you typed the address correctly, including http://'s and trailing /'s!</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>Certain texts, images, ads, and other links will also direct you around.</p>
                        <hr style={{width: '80%', height: '1px'}}/>
                    <p style={{fontFamily: 'serif', margin: '0 20px'}}>For quicker navigation, save sites by favoriting them! You can favorite a site either through the Favorites tab, or the Globe & Star button just below it.</p>
                    <img alt='decor' src='/images/winicon/Earth Rating Document.ico' />
                </div>
                <hr style={{width: '65%', height: '1px'}}/>
                <div style={{padding: '20px', backgroundColor: 'rgba(0,0,0,0.3)'}}>
                    <h3>Common Sites:</h3>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.geomusic.net/')}>http://www.geomusic.net/</p>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.nightcity.net/')}>http://www.nightcity.net/</p>
                    <p style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://www.channelf.co/radio')}>http://www.channelf.co/radio</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Help4;