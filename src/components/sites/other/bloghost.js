import { useContext, useEffect, useState } from 'react';

import { LinkContext } from '../../systems/context';

import '../../css/forums.css';
import axios from 'axios';

const BlogHost = ({number, addbar}) => {

    const [state, dispatch] = useContext(LinkContext);

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')
    const [contact, setContact] = useState('')
    const [response, setResponse] = useState('')

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    const onSubmit = () => {
        const data = {
            title: title,
            desc: desc,
            file: file,
            contact: contact
        }
        axios.post('https://arina.lol/api/geomusic/submission/', {data}).then((res2) => {
            if (res2.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res2.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get data for current song! (geo-sub-insert)'})
            }
            setResponse(res2.data)
        })
    }

    return (
        <div style={{background: 'url(/images/snowflake.gif)', height: '100%', padding: '50px 20%'}}>
            <div className='forums' style={{display: 'grid', gridTemplateColumns: '30% 10px calc(70% - 10px)', border: 'outset 3px', padding: '5px', background: 'lightgray'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h2 style={{width: 'calc(100% - 9px)', color: 'black', textAlign: 'center', border: 'outset 3px', fontSize: '100%'}}>ForumsHost</h2>
                    <p style={{color: 'black', fontSize: '14px', margin: 0, padding: 0, fontFamily: 'alfredo', textAlign: 'center'}}>Site designs and domain hosting for 4 years.</p>
                    <hr style={{height: '1px', width: '85%'}}/>
                    <div className='forums-tree' style={{width: 'calc(100% - 9px)', display: 'flex', flexDirection: 'column', border: 'inset 3px', background: 'green', padding: '7px 0'}}>
                        {/*a little retarded but good enough, i mean its a single page*/}
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}></p><img alt='home page' src='/images/winicon/explorer/Home.png' width={'16px'} height={'16px'}/><p style={{margin: 0}}>Home</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>│</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>├──</p><img src='/images/winicon/Info.ico' alt='info' width={'16px'} height={'16px'}/><p style={{margin: 0}}>Info</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>│</p><p style={{margin: '0 0 0 40px'}}>│</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>│</p><img style={{margin: '0 0 0 38px'}} src='/images/winicon/Chat.ico' alt='TOS' width={'16px'} height={'16px'} /><p style={{margin: 0}}>TOS</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>├──</p><img src='/images/winicon/Question.ico' alt='contact' width={'16px'} height={'16px'}/><p style={{margin: 0}}>Contact</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>│</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>│</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p style={{margin: 0}}>├──</p><img src='/images/winicon/Download.png' alt='templates' width={'16px'} height={'16px'}/><p style={{margin: 0}}>Templates</p>
                        </div>
                    </div>
                </div>
                <div style={{border: 'inset 3px', background: 'url(/images/snowflake.gif)'}}></div>
                {addbar.includes('/tos') ?
                <div className='forumshost-content'>
                    <h3 style={{color: 'black', textAlign: 'center', border: 'outset 3px'}}>Homepage</h3>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <h4 style={{color: 'black'}}>Client Sites:</h4>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://screen-space-reflection.blog/')}><img src='/images/cortexdriver/radio29.gif' alt='screenspace reflection ad'/></a>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://pinky.blog/')}><img src='/images/nightcity/sb2.gif' alt='pinky ad'/></a>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://zyzz.blog/')}><img src='/images/user/zyzz/ac_metal.gif' alt='ZYZZ ad'/></a>
                        </div>
                        <hr style={{height: '1px', width: '85%'}}/>
                        <div style={{margin: '15px'}}>
                            <h3 style={{color: 'black'}}>Get your own GeoRadio site!</h3>
                            <hr style={{width: '80%', height: '1px'}} />
                            <h4 style={{color: 'black', fontFamily: 'alfredo'}}>Terms of Service and Rules:</h4>
                            <p style={{color: 'black', fontFamily: 'alfredo'}}>General Rules: <br/>
                            Playlists:<br/>
                            ✅Music-centric.<br/>
                            ✅Playlist {'>'} 30 songs.<br/>
                            ✅Between 1-24 hours length.<br/>
                            ✅Radio callsigns allowed (custom is fine, too).<br/>
                            ✅Multi-platform allowed.<br/>
                            <br/>
                            ❌Full albums in one video.<br/>
                            ❌Single songs above ~20 minutes.<br/>
                            ❌Videos with more than 1 distinct song (mashups are fine, no separated songs).<br/>
                            <br/>
                            Sites:<br/>
                            ✅Design theme between 1993~2009 (or, a modern site to roll back).<br/>
                            ✅Up to 4 pages per site allowed.<br/>
                            ✅Links in or out of site allowed (links to socials are fine, you can even make an ad).<br/>
                            ✅Dynamic components allowed (date/time dependent, click to reveal, etc.)<br/>
                            ✅Custom ads (for your radio) in GeoRadio allowed.<br/>
                            <br/>
                            ❌ CSS animations.<br/>
                            ❌ Database components.<br/>
                            ❌ Large scripted components.<br/>
                            </p>
                        </div>
                    </div>
                </div>
                :                 
                <div className='forumshost-content' style={{padding: '5px'}}>
                    <h3 style={{color: 'black', textAlign: 'center', border: 'outset 3px'}}>Homepage</h3>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'auto'}}>
                            <h4 style={{color: 'black'}}>Client Sites:</h4>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://screen-space-reflection.blog/')}><img src='/images/cortexdriver/radio29.gif' alt='screenspace reflection ad'/></a>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://pinky.blog/')}><img src='/images/nightcity/sb2.gif' alt='pinky ad'/></a>
                            <a href={`scrollto-${number}`} onClick={() => clickLink('http://zyzz.blog/')}><img src='/images/user/zyzz/ac_metal.gif' alt='ZYZZ ad'/></a>
                        </div>
                        <hr style={{height: '1px', width: '85%'}}/>
                        <div style={{margin: '15px'}}>
                            <h3 style={{color: 'black'}}>Get your own GeoRadio site!</h3>
                            <p style={{color: 'black', fontFamily: 'alfredo'}}>Simply follow the terms of service (rules) listed <a style={{color: 'blue'}} href={`#scrollto-${number}`} onClick={() => clickLink('http://forumshost.com/tos')}>here</a>, then submit the form below to get started!</p>
                            <p style={{color: 'green', fontFamily: 'alfredo'}}>{response}</p>
                            <form onSubmit={() => onSubmit()} style={{display: 'flex', flexDirection: 'column', border: 'outset 3px', padding: '5px', background: 'url(/images/snowflake.gif)'}}>
                                <input onChange={(e) => setTitle(e.currentTarget.value)} type='text' placeholder='Radio Playlist Link'/>
                                <textarea onChange={(e) => setDesc(e.currentTarget.value)} style={{width: 'calc(100% - 5.5px)', height: '100px'}} placeholder='Design description, idea, themes, colors, etc!' />
                                <input onChange={(e) => setFile(e.currentTarget.value)} type='text' placeholder='Reference Link(s) (Images)' />
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default BlogHost;

//┼ │ ┌┐ │   │
//  │ └┘ ├─ ─┤
//       │   │
//
//       ──