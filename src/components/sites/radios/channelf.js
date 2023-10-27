import { useContext, useEffect, useState } from 'react';
import { LinkContext } from '../../systems/context';

import MusicPlayer from '../../musicplayer';

import qotd from '../../json/exo.json';

const ChannelF = ({number, addbar}) => {

    const [state, dispatch] = useContext(LinkContext);
    const [radioload, setRadioload] = useState(false)

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    const changeStation = (num) => {
        dispatch({type: 'update_radio', radio: num})
        setRadioload(true)
    }

    useEffect(() => {
        changeStation(2)
    }, [])

    //station numbers: [0 - geomusic, 1 - nightcity, 2 - channelf]
    return (
        <div>
            {addbar.includes("/radio") ?
            <div id="http://channelf.co/" style={{width: '100%', backgroundImage: `url(/images/tile3.webp)`, paddingTop: '10px'}}>
                <div className='radio cyberpunk-radio'>
                    <div className='channelf-albums mobilehide'>
                        <h1 style={{textAlign: 'center'}}>ALBUMS:</h1>
                        <img alt='decor' src='/images/channelf/rav4.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/rav1.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/rav2.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                        <img alt='decor' src='/images/channelf/rav3.jpg' width='70%' style={{imageRendering: 'pixelated', margin: '0 auto'}}/>
                    </div>
                    <div className='opener' style={{textAlign: 'center', backgroundImage: 'url(/images/tile.jpg)', boxShadow: '0 0 5px 5px black, 0 0 5px 5px black inset', gridColumn: '2', gridRow: '1'}}>
                        <h1 style={{color: 'orange', fontFamily: 'serif', textShadow: '0 0 5px orange'}}>--TUNING IN TO CHANNEL F--</h1>
                        <hr style={{width: '80%', height: '5px'}}/>
                        <div style={{border: 'inset 2px'}}>
                            <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>WELCOME TO EXO RADIO!!</p>
                            <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px'}}>MAKE SURE TO CHECK OUT <b style={{textDecoration: 'line-through'}} title='Forum Temporarily Closed' >HTTP://WWW.CHANNELF.CO/FORUM/</b> TO POST YOUR FAVORITE SONGS!! --forum temporarily closed for construction!!</p>
                        </div>
                        <hr style={{width: '80%', height: '5px'}}/>
                        {radioload ?
                        <MusicPlayer radionum={2} number={number}/>
                        : <p>Loading...</p>}
                    </div>
                </div>
                <div style={{height: '200px', marginTop: '50px', display: 'flex', flexDirection: 'column'}}>
                    <h3>Quote of the day:</h3>
                    <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>From: {qotd.qotd[Math.min(31, (new Date).getDate())].title}</p>
                    <p style={{color: 'yellow', textShadow: '0 0 5px yellow', fontFamily: 'serif', margin: '0 20px', textAlign: 'center'}}>{qotd.qotd[Math.min(31, (new Date).getDate())].text} - {qotd.qotd[Math.min(7, (new Date).getDate())].from}</p>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '25px'}}>
                    <img alt='decor' src='/images/magicnightray.gif'/>
                    <p>JOIN THE FORUMS!!!!! <b style={{textDecoration: 'line-through'}}>HTTP://WWW.CHANNELF.CO/FORUM/</b>!! --temporarily closed for construction itLL BE UP SOON I PROMISE</p>
                </div>
            </div>
            : addbar.includes("/forum") ? 
            <div id="channelfforum" style={{width: '100%', backgroundImage: `url(/images/tile3.jpg)`, paddingTop: '10px'}}>
            <hr style={{width: '65%', height: '1px'}}/>
                <div style={{height: '600px', marginTop: '50px', textAlign: 'center'}}>
                    <h2 style={{color: 'white', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '0 20px'}}>WELCOME TO THE KB,R,&EXO FORUMS!!</h2>
                    <div style={{padding: '20px'}}>
                        <form style={{display: 'flex', flexDirection: 'column', width: '35%', margin: '0 auto'}}>
                            <input type={'text'} placeholder='screenname'/>
                            <textarea type={'textarea'} value={'Message'}>
                            </textarea>
                            <button disabled><p>Post</p></button>
                        </form>
                    </div>
                    <h3 style={{color: 'white', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '0 20px', paddingBottom: '10px'}}>Chat-log:</h3>
                    <div className="logs" style={{padding: '15px', background: 'rgba(0,0,0,0.2)'}}>
                        <div style={{margin: '15px', background: '#151424', overflowY: 'scroll', height: '350px'}}>
                            <ul className='channelf-forum-container'>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p>HELLO EVERYONE!! WELCOME TO THE KB&R FORUM!! VERY EXCITED TO MEET YOU HERE!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">normalgirl222- </i><p>hello... love the energy lol :). havent heard <i>Silent Pterodactyls</i> yet, i think its my favourite now!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p>I LOVE <i>SILENT PTERODACTYLS</i>!!! TOP 5 FOR ME!! IM GLAD YOU LIKE IT!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">user1105- </i><p>hello! I like Your Radio!</p><img alt='decor' src='/images/scratchin.gif'/></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p><b className='channelf-bold'>user1105</b> -> THANK YOU!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">nnightwolff- </i><p>Rav's lyric game is simply undefeated. How can one <i>not</i> be blown away by <i>Channel F</i>?</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p><b className='channelf-bold'>nnightwolff</b> -> YES!! ITS MY FAVORITE SONG!! LETS BE FRIENDS, YES?</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">nnightwolff- </i><p><b className='channelf-bold'>KBRULTRAFAN973</b> -> Yes, of course! haha! Check out my page! My information can be found on it. <b style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://nnightwolff.blog/')}>http://nnightwolff.blog/</b></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <div className='navmenu-moemoejp' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'orange'}}>
                <div className='opener' style={{textAlign: 'center', padding: '4px', background: 'url(/images/starbd.gif)'}}>
                    <h2 style={{color: 'white', fontFamily: 'serif', marginBottom: '0',}}>404</h2>
                    <h2 style={{color: 'white', fontFamily: 'serif', marginBottom: '0',}}>Page Not Found!</h2>
                    <a href={`#scrollto-${number}`} title='http://channelf.co/radio' onClick={() => clickLink('http://channelf.co/radio')} ><p>Radio</p></a>
                    <a href={`#scrollto-${number}`} title='http://channelf.co/forum' onClick={() => clickLink('http://channelf.co/forum')} ><p>Forum</p></a>
                </div>
            </div>}
        </div>
    )
}

export default ChannelF;