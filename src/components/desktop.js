import { useState, useEffect, useContext } from 'react';
import { LinkContext } from './context';

import Browser from './browser';
import Notes from './notes';

import './desktopStyles.css';
import './css/mobile.css';
import Inbox from './inbox';
import axios from 'axios';

const Desktop = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [minute, setTime] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());

    const openBrowser = () => {
        dispatch({type: 'update_app', browser: !state.browser, notes: state.notes, inbox: state.inbox})
    }

    const openNotes = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: !state.notes, inbox: state.inbox})
    }

    const openInbox = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: state.notes, inbox: !state.inbox})
    }

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.getMinutes());
            setHour(date.getHours());
        }, 1000);
    }, []);

    useEffect(() => {
        if (state.browser) {
            document.getElementById('netex-bar').classList.add('app-closed')
            document.getElementById('netex-bar').classList.remove('app-open')
        } else {
            document.getElementById('netex-bar').classList.remove('app-closed')
            document.getElementById('netex-bar').classList.add('app-open')
        }
        if (state.notes) {
            document.getElementById('notes-bar').classList.add('app-closed')
            document.getElementById('notes-bar').classList.remove('app-open')
        } else {
            document.getElementById('notes-bar').classList.remove('app-closed')
            document.getElementById('notes-bar').classList.add('app-open')
        }
        if (state.inbox) {
            document.getElementById('inbox-bar').classList.add('app-closed')
            document.getElementById('inbox-bar').classList.remove('app-open')
        } else {
            document.getElementById('inbox-bar').classList.remove('app-closed')
            document.getElementById('inbox-bar').classList.add('app-open')
        }
    }, [state.browser, state.notes, state.inbox])

    const showDrops = () => {
        document.querySelectorAll('.start').forEach((el) => {
            el.classList.remove('hidestart')
        })
    }

    const hideDrops = () => {
        document.querySelectorAll('.start').forEach((el) => {
            el.classList.add('hidestart')
        }) 
    }

    const setVisit = () => {

    }

    return (
        <div onLoad={() => setVisit()} style={{width: "100%", height: `100vh`, backgroundColor: "teal", overflow: 'hidden'}} id='desktop'>
            <iframe style={{display: 'none'}} src='https://nnexsus.net/setcookie/georadio'/>
            <div style={{height: '80%', display: "grid", gridTemplateColumns: "repeat(10,10%)", gridTemplateRows: 'repeat(10, 10%)', minHeight: '100%', padding: '20px', gap: '20px'}} className='icons'>
                <div className='app-icon' style={{ gridRow: '1', gridColumn: '1' }}>
                    <img alt='decor' src='/images/My Computer.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p>My Computer</p>
                </div>
                <div className='app-icon' style={{ gridRow: '4', gridColumn: '1' }}>
                    <img alt='decor' src='/images/2pcs.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Network Neighborhood</p>
                </div>
                <div className='app-icon' onClick={() => openInbox()} style={{ gridRow: '3', gridColumn: '1' }}>
                    <img alt='decor' src='/images/Mail.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Inbox</p>
                </div>
                <div className='app-icon' onClick={() => openBrowser()} style={{ gridRow: '2', gridColumn: '1'}}>
                    <img alt='decor' src='/images/Earth (16 colors).ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Internet Explorer</p>
                </div>
                <div className='app-icon' style={{ gridRow: '6', gridColumn: '1' }}>
                    <img alt='decor' src='/images/recycling.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Recycle Bin</p>
                </div>
                <div className='app-icon' onClick={() => openNotes()} style={{ gridRow: '5', gridColumn: '1' }}>
                    <img alt='decor' src='/images/WordPad.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Notes</p>
                </div>
            </div>
            <div style={{position: 'absolute', top: '0'}}>
                {state.browser ?
                    <Browser/>
                : null}
            </div>
            <div style={{position: 'absolute', top: '0'}}>
                {state.notes ?
                    <Notes/>
                : null}
            </div>
            <div style={{position: 'absolute', top: '0'}}>
                {state.inbox ?
                    <Inbox/>
                : null}
            </div>
            <div className='border' style={{display: 'grid', gridTemplateColumns: '10% 70% 10%', position: 'sticky', marginTop: '-70px', backgroundColor: '#C0C7C8', border: 'ridge 3px', maxHeight: '25px'}}>
                <button className='starts' onMouseLeave={() => hideDrops()} onClick={() => showDrops()} style={{backgroundColor: '#C0C7C8', border: 'outset 3px', display: 'flex', flexDirection: 'column-reverse', alignItems: 'flex-start', height: '25px'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '-2px'}}>
                        <img alt='decor' style={{marginLeft: '-5px'}} width='25px' height='25px' src='/images/winicon/windows.png' /><h2 style={{color: 'black', margin: '0', marginLeft: '5px'}}>Start</h2>
                    </div>
                    <div className='start hidestart' style={{backgroundColor: 'darkgray', width: '150px'}}>
                        <div className='hidestart start'>
                            <button style={{display: 'flex', alignItems: 'center'}}>
                                <img alt='decor' width={'32px'} height={'32px'} src='/images/moonicon.png' onClick={() => window.open('https://nnexsus.net/', '_blank')} />
                                <h2 style={{padding: '0', margin: '0', color: 'black'}}>Main Site</h2>
                            </button>
                        </div>
                        <div className='hidestart start'>
                            <button style={{display: 'flex', alignItems: 'center'}}>
                                <img alt='decor' src='/images/Web-document 2.ico' onClick={() => window.open('https://nnexsus.net/', '_blank')} />
                                <h2 style={{padding: '0', margin: '0', color: 'black'}}>Contact</h2>
                            </button>
                        </div>
                        <div className='hidestart start'>
                            <button style={{display: 'flex', alignItems: 'center'}}>
                                <img alt='decor' src='/images/winicon/Plug.ico' onClick={() => window.close()} />
                                <h2 style={{padding: '0', margin: '0', color: 'black'}}>Power Off</h2>
                            </button>
                        </div>
                    </div>
                </button>
                <div className='app-shelf' style={{display: 'flex'}}>
                    <button className='app-drawer app-closed' id='netex-bar' onClick={() => openBrowser()}>
                        <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/explorer/webdoc.png'/><h2 style={{color: 'black'}}>Internet Explorer</h2>
                    </button>
                    <button className='app-drawer app-closed' id='notes-bar' onClick={() => openNotes()}>
                        <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/wordpad.png'/><h2 style={{color: 'black'}}>Notes</h2>
                    </button>
                    <button className='app-drawer app-closed' id='inbox-bar' onClick={() => openInbox()}>
                        <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/inbox/inbox.png'/><h2 style={{color: 'black'}}>Inbox</h2>
                    </button>
                </div>
                <div style={{backgroundColor: '#C0C7C8', border: 'inset 2px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px', gridColumn: '5'}}>
                    <img alt='decor' style={{marginLeft: '5px'}} src='/images/winicon/220.ico' /><h2 style={{color: 'black'}}>{(hour % 12) === 0 ? 12 + ":" : (hour % 12) + ":"}{minute < 10 ? "0" + minute : minute} {hour > 12 ? "PM" : "AM"}</h2>
                </div>
            </div>

            <iframe src='https://nnexsus.net/' />
        </div>
    )
}

export default Desktop;