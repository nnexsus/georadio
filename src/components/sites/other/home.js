import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Home = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    return (
        <div id="http://home.com/" style={{width: '100%', height: '1200px' /* needed for firefox? idk why */, background: `url(/images/homebg.webp)`, backgroundSize: 'calc(16% + 2px)', imageRendering: 'pixelated', padding: '10px'}}>
            <div style={{display: 'grid', gridTemplateRows: '850px 500px', containerType: 'size', containerName: 'homegrid'}}>
                <div className='home-grid-container'>
                    <div className='home-grid'>
                        <div className='home-2 mobilehide'>
                            <div className='mobilehide'>
                                <img alt='icon' src='/logo512.png' style={{imageRendering: 'pixelated', maxWidth: '423px'}} width={'100%'} />
                            </div>
                            <hr style={{width: '80%', height: '1px'}} />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img style={{imageRendering: 'pixelated'}} alt='new' src='/images/new.gif' width={'50%'}/>
                                <h4 style={{background: 'green'}}>--1 Year of GeoRadio!!--</h4>
                                <h4 style={{background: 'red'}}>Update 3: 2 new official radios, 3 user submitted radios, WinPlay4, and much more!! <a style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'blue', textDecoration: 'underline'}} href={`#scrollto-${number}`} onClick={() => clickLink('//changelog')} >Changelog</a></h4>
                            </div>
                            <hr style={{width: '80%', height: '1px'}} />
                            <div className='mobilehide' style={{display: 'flex', alignItems: 'flex-start'}}>
                                <img className='mobilehide' alt='decor' src='/images/sunrise/surfacefull.webp' width={'100%'} style={{imageRendering: 'pixelated', background: 'black', maxWidth: '423px'}} />
                            </div>
                        </div>

                        <div style={{gridColumn: 2,  width: '100%'}}>
                            <div style={{background: 'rgba(0,0,0,0.5)', padding: '3px', border: 'inset 3px'}}>
                                <h3>Welcome to GeoRadio!!</h3>
                                <p>Click a link below to connect to a radio! NEW: <a style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'lightblue'}} href={`#scrollto-userradio-${number}`}>User Radios!!</a></p>
                                <p>Or click here to access the built-in search engine and explore: <a style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'lightblue', textDecoration: 'underline'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://arina.com/')}>arina.com</a></p>
                            </div>
                            
                            <div className='radio-grid' style={{display: 'grid', border: 'inset 3px', width: '99%', marginTop: '5px'}}>
                                <h2 className='mobilehide' style={{gridColumn: 'span 3', textAlign: 'center', background: 'black', height: '100%', margin: 0, padding: 0}}>GeoRadio Station Links:</h2>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/georadio.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.geomusic.net/')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/updated3.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Breakcore</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>GeoMusic Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/nightcity.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.nightcity.net/')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/updated3.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Cyberpunk</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Nightcity Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/channelf.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.channelf.co/radio')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/updated2.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Rap</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>ChannelF Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/neonsunrise.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.neonsunrise.tl/')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/updated2.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Future Funk</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Neon Sunrise Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/neonsunset.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.neonsunset.tl/')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/updated2.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Citypop</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Neon Sunset Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/moemoejp.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.moemoe.jp/home')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Moe</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>MoeMoeJP Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/liquidelectrum.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.liquidelectrum.co/main')}>
                                        <img alt='updated' style={{imageRendering: 'pixelated'}} src='/images/home/update.gif' width={'50%'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Liquid, DnB, Electronic</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Liquid.Electrum Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/cortexdriver.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.cortexdriver.net/')}>
                                        <img alt='new' style={{imageRendering: 'pixelated'}} src='/images/new2.gif' width={'48px'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Hard Electronic/Electro-rock</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Cortex Driver Radio</p>
                                    </a>
                                </div>
                                <div style={{padding: '15px', background: 'black'}}>
                                    <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/goldenbreeze.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.golden-breeze.live/')}>
                                        <img alt='new' style={{imageRendering: 'pixelated'}} src='/images/new2.gif' width={'48px'}/><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Chill Trap, Electro, Bass</p><p style={{background: 'rgba(0, 0, 0, 0.5)'}}>Golden Breeze Radio</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{border: 'inset 3px', gridColumn: 3, background: 'black', padding: '3px', width: 'calc(100% - 20px)'}}>
                            <h2 style={{textAlign: 'center'}}>My Links:</h2>
                            <div style={{display: 'flex', flexDirection: 'column'}} className='home-3'>
                                <a target='_blank' rel='noreferrer' href='https://nnexsus.net/'><p>My Site</p></a>
                                <a target='_blank' rel='noreferrer' href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                                <a target='_blank' rel='noreferrer' href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                                <a target='_blank' rel='noreferrer' href='https://github.com/nnexsus/'><p>Github</p></a>
                                <a target='_blank' rel='noreferrer' href='https://trello.com/c/5uRXm6pw/85-georadio-v13'><p>Trello</p></a>
                            </div>
                            <hr/>
                            <div className='mobilehide' style={{padding: '10px', background: 'black'}}>
                                <h2 style={{margin: '0', padding: '0 5px', float: 'left'}}>Site Links:</h2>
                                <p style={{textIndent: '10px'}}>If the mouse appears like this: <a href={`#scrollto-${number}`}>(hover me)</a>, then it directs outside the site. If the mouse appears like this: 
                                <a href={`#scrollto-${number}`} style={{cursor: "url(/images/cursor/pointer.cur), auto"}}>(hover me)</a> then it directs in-site.</p>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div style={{display: 'flex'}}>
                                        <p>In-site: </p><img alt='mouse example' width={'50px'} height={'50px'} src='/images/cursor/pointer.cur' />
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p>Out-site: </p><img alt='mouse example' width={'50px'} height={'50px'} src='/images/cursor/PointerWin10.png' />
                                    </div>
                                </div>
                            </div>
                            <div className='mobileshow' style={{padding: '10px', background: 'black'}}>
                                <h2 style={{margin: '0', padding: '0 5px', float: 'left'}}>Site Links:</h2>
                                <p>Most links will direct you to in-site sites, but some may direct you elsewhere. 
                                Press and hold a link to see where it will direct you: <a href={`#scrollto-${number}`}>In Site</a>
                                , or, <a href='https://nnexsus.net/' target='_blank' rel='noreferrer'>Out of Site</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{gridRow: 2, width: 'calc(100% - 18px)'}}>
                    <h2 id={`scrollto-userradio-${number}`} style={{background: 'black', textAlign: 'center'}}>User Created Stations:</h2>
                    <div className='user-radio-grid' style={{display: 'grid', border: 'inset 3px', width: '99%', background: 'black'}}>
                        <div style={{padding: '15px', background: 'black'}}>
                            <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/screenspacereflection.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.screen-space-reflection.blog/')}>
                                <img alt='new' style={{imageRendering: 'pixelated'}} src='/images/home/newuser.gif' width={'48px'}/><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>Introspective</p><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>105.6 - Late Nite Swim</p>
                            </a>
                        </div>
                        <div style={{padding: '15px', background: 'black'}}>
                            <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/zyzz.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.zyzz.blog/')}>
                                <img alt='new' style={{imageRendering: 'pixelated'}} src='/images/home/newuser.gif' width={'48px'}/><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>Hardstyle</p><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>ZYZZ APPROVED RADIO</p>
                            </a>
                        </div>
                        <div style={{padding: '15px', background: 'black'}}>
                            <a style={{cursor: "url(/images/cursor/pointer.cur), auto", display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid darkred 2px', margin: '3px', background: 'url(/images/home/hallowedgrounds.png)', backgroundRepeat: 'repeat', backgroundPosition: 'center'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://www.hallowedgrounds.blog/')}>
                                <img alt='new' style={{imageRendering: 'pixelated'}} src='/images/home/newuser.gif' width={'48px'}/><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>24 Hour Playlist</p><p style={{background: 'rgba(0, 0, 0, 0.5)', textAlign: 'center'}}>Hallowed Grounds</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;