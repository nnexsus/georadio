import { useContext } from 'react';
import { LinkContext } from './../context';

const Home = () => {

    const [state, dispatch] = useContext(LinkContext);

    const addSite = (site) => {
        var updated = state.lastsite
        if (state.lastsite[0] !== site || state.lastsite[1] !== site) {
            updated.unshift(site)
            dispatch({type: 'new_site', lastsite: updated})
        }
    }

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="Home" style={{width: '100%', background: `url(/images/sunrise/tilegradbg.webp)`, backgroundSize: 'contain', imageRendering: 'pixelated', padding: '10px', height: '800px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '20% 40% 35%', gridTemplateRows: '150px 160px 400px', gap: '5px', padding: '10px', marginRight: '20px', background: 'teal', border: 'outset 3px'}} className='home-1'>

                <div style={{gridColumn: 1, gridRow: 1}}>
                    <img src='/radiopixel.png' style={{imageRendering: 'pixelated', maxWidth: '145px', border: 'inset 3px'}} width={'100%'} />
                </div>

                <div style={{gridColumn: 'span 2', gridRow: 'span 2', display: 'grid', gridTemplateColumns: '80% 20%'}} className='home-2'>
                    <div>
                        <h1>Welcome to GeoRadio!!</h1>
                        <p>GeoRadio is an online radio service with a fresh coat of Windows95 paint.</p>
                        <p>Click one of the links to the left to connect to a radio site! (Built-in browser! This will not redirect you.)</p>
                    </div>
                    <div style={{border: 'inset 3px', background: 'black', padding: '3px'}}>
                        <h2>Playlist Links:</h2>
                        <p><a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMyx2Wfi9eh0ah5UawYN5KTd">GeoMusic (Breakcore)</a></p>
                        <p><a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMxitzM-KZH4kDdOgfRJy5QR">NightCity (Cyberpunk)</a></p>
                        <p><a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMwCsmVOZZ74XF68JFJ_y2uK">NeonSunrise (Future Funk)</a></p>
                        <p><a href="https://www.youtube.com/playlist?list=PLzhN8a1aNzMxSEmNoClMkSQllrQQTr13d">NeonSunset (Citypop)</a></p>
                    </div>
                </div>

                <div style={{gridColumn: 1, gridRowStart: 2, gridRowEnd: 4, height: 'calc(100% - 12px)'}}>
                    <div style={{display: 'flex', flexDirection: 'column', border: 'inset 3px', height: '100%', background: 'black', padding: '3px'}}>
                        <h2>Radio Links:</h2>
                        <a href='#scrollto' onClick={() => clickLink('http://www.geomusic.net/')}><p>(Breakcore) http://www.geomusic.net/</p></a>
                        <a href='#scrollto' onClick={() => clickLink('http://www.nightcity.net/')}><p>(Cyberpunk) http://www.nightcity.net/</p></a>
                        <a href='#scrollto' onClick={() => clickLink('http://www.channelf.co/')}><p>(Rap) http://www.channelf.co/</p></a>
                        <a href='#scrollto' onClick={() => clickLink('http://www.neonsunrise.tl/')}><p>(Future Funk) --New!!-- http://www.neonsunrise.tl/</p></a>
                        <a href='#scrollto' onClick={() => clickLink('http://www.neonsunset.tl/')}><p>(Citypop) --New!!-- http://www.neonsunset.tl/</p></a>
                    </div>
                </div>

                <div style={{gridColumn: 2, display: 'flex', alignItems: 'flex-end'}}>
                    <img src='/images/sunrise/surfacefull.webp' width={'100%'} style={{imageRendering: 'pixelated', border: 'inset 3px', background: 'black', padding: '3px', maxWidth: '423px'}} />
                </div>
                <div style={{border: 'inset 3px', background: 'black', padding: '3px'}}>
                    <h2>My Links:</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 25%)'}} className='home-3'>
                        <a href='https://nnexsus.net/'><p>My Site</p></a>
                        <a href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                        <a href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                        <a href='https://github.com/nnexsus/'><p>Github</p></a>
                        <a href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;