import { useContext } from 'react';
import { LinkContext } from './../context';

const Empty = () => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="empty" style={{width: '100%', backgroundImage: `url(/images/tile2.jpg)`, paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/starbd.gif)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset'}}>
                <h1 style={{fontFamily: 'serif'}}>Error 404 --webpage-not-found.</h1>
                <hr style={{width: '80%', height: '1px'}}/>
                <p style={{fontFamily: 'serif', margin: '0 20px'}}>Could not find a webpage at the requested address!</p>
                <p style={{fontFamily: 'serif', margin: '0 20px', opacity: 0.5}}><b>Common fixes:</b> Make sure you typed the address correctly, including www. and / 's!</p>
            </div>
            <hr style={{width: '65%', height: '1px'}}/>
            <div style={{padding: '20px', backgroundColor: 'rgba(0,0,0,0.9)'}}>
                <h3>Common Sites:</h3>
                <p><a style={{cursor: 'pointer'}} onClick={() => clickLink('http://www.geomusic.net/')}>http://www.geomusic.net/</a></p>
                <p><a style={{cursor: 'pointer'}} onClick={() => clickLink('http://www.nightcity.net/')}>http://www.nightcity.net/</a></p>
                <p><a style={{cursor: 'pointer'}} onClick={() => clickLink('http://www.channelf.co/')}>http://www.channelf.co/</a></p>
            </div>
        </div>
    )
}

export default Empty;