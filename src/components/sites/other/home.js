import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Home = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    return (
        <div id="http://home.com/" style={{width: '100%', background: `url(/images/homebg.webp)`, backgroundSize: 'cover', imageRendering: 'pixelated', padding: '10px', height: '800px'}}>
            <div style={{display: 'grid', gridTemplateColumns: '20% 40% 35%', gridTemplateRows: '200px 160px 400px', gap: '5px', padding: '10px', marginRight: '20px', background: '#007f00', border: 'outset 3px'}} className='home-1'>

                <div style={{gridColumn: 1, gridRow: 1}}>
                    <img alt='icon' src='/radiopixel.png' style={{imageRendering: 'pixelated', maxWidth: '145px', border: 'inset 3px'}} width={'100%'} />
                </div>

                <div style={{gridColumn: 'span 2', gridRow: 1, margin: '10px'}} className='home-2'>
                    <div style={{display: 'flex'}}>
                        <img style={{imageRendering: 'pixelated'}} alt='new' src='/images/new.gif' width={'48px'}/>
                        <h4 style={{background: 'red'}}>New!! Update 2 is here!! 2 new radios, 6 new sites, and much more!! <a style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'blue', textDecoration: 'underline'}} href={`#scrollto-${number}`} onClick={() => clickLink('//changelog')} >Changelog</a></h4>
                    </div>
                    <div>
                        <h3>Welcome to GeoRadio!!</h3>
                        <p>Click one of the links to the left to connect to a radio site! (Built-in browser!)</p>
                        <p>Or click here to access the built-in search engine: <a style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'blue', textDecoration: 'underline'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://arina.com/')}>arina.com</a></p>
                    </div>
                </div>

                <div style={{gridColumn: 'span 3', gridRow: 2,  width: '100%'}}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 20%)', border: 'inset 3px', width: '100%', background: 'black', padding: '3px'}}>
                        <h2>Radio Links:</h2>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/georadio.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.geomusic.net/')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Breakcore</p><img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/nightcity.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.nightcity.net/')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Cyberpunk</p><img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/channelf.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.channelf.co/')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Rap</p><img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/neonsunrise.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.neonsunrise.tl/')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Future Funk</p><img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/neonsunset.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.neonsunset.tl/')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Citypop</p><img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/moemoejp.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.moemoe.jp/home')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Moe</p><img alt='new' style={{imageRendering: 'pixelated'}} src='/images/new2.gif' width={'48px'}/>
                        </a>
                        <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', alignItems: 'center', border: 'solid green 2px', margin: '3px', background: 'url(/images/home/liquidelectrum.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.liquidelectrum.co/main')}>
                            <p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Liquid</p><img alt='new' style={{imageRendering: 'pixelated'}} src='/images/new2.gif' width={'48px'}/>
                        </a>
                    </div>
                </div>

                <div style={{gridColumn: 2, gridRow: 3, display: 'flex', alignItems: 'flex-start'}}>
                    <img alt='decor' src='/images/sunrise/surfacefull.webp' width={'100%'} style={{imageRendering: 'pixelated', border: 'inset 3px', background: 'black', padding: '3px', maxWidth: '423px'}} />
                </div>
                <div style={{border: 'inset 3px', gridRow: 3, gridColumn: 3, background: 'black', padding: '3px'}}>
                    <h2>My Links:</h2>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 25%)'}} className='home-3'>
                        <a href='https://nnexsus.net/'><p>My Site</p></a>
                        <a href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                        <a href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                        <a href='https://github.com/nnexsus/'><p>Github</p></a>
                        <a href='https://trello.com/c/6YBXnLYP/'><p>Trello</p></a>
                    </div>
                    <hr/>
                    <div style={{padding: '10px', background: 'black'}}>
                        <h2 style={{margin: '0', padding: '0 5px', float: 'left'}}>Site Links:</h2>
                        <p style={{textIndent: '10px'}}>If the mouse appears like this: <a href={`#scrollto-${number}`}>(hover me)</a>, then it directs outside the site. If the mouse appears like this: 
                        <a href={`#scrollto-${number}`} style={{cursor: "url(/images/cursor/pointer.cur), auto"}}>(hover me)</a> then it directs in-site.</p>
                        <div style={{display: 'flex'}}>
                            <div style={{display: 'flex'}}>
                                <p>In-site: </p><img alt='mouse example' width={'50px'} height={'50px'} src='/images/cursor/pointer.cur' />
                            </div>
                            <div style={{display: 'flex'}}>
                                <p>Out-site: </p><img alt='mouse example' width={'50px'} height={'50px'} src='/images/cursor/PointerWin10.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{border: 'inset 3px', gridRow: 3, gridColumn: 1, background: 'black', padding: '3px'}}>
                    <h2>Playlist Links:</h2>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMyx2Wfi9eh0ah5UawYN5KTd">GeoMusic (Breakcore)</a></p>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMxitzM-KZH4kDdOgfRJy5QR">NightCity (Cyberpunk)</a></p>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMwCsmVOZZ74XF68JFJ_y2uK">NeonSunrise (Future Funk)</a></p>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMxSEmNoClMkSQllrQQTr13d">NeonSunset (Citypop)</a></p>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMwQVPlGCGfOSxUFEXMZU3tD">MoeMoeJP (Moe)</a></p>
                    <p><a href="https://youtube.com/playlist?list=PLzhN8a1aNzMxvkEt1IpTbRLDI7WfqisjU">LiquidElectrum (Liquid)</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home;