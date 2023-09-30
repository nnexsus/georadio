import { useState, useEffect, useContext } from 'react';
import { LinkContext } from './systems/context';

import Browser from './apps/browser';
import Notes from './apps/notes';
import Inbox from './apps/inbox';
import Error from './apps/error';
import Settings from './apps/settings';

import backgrounds from './json/settings.json';

import './desktopStyles.css';
import './css/mobile.css';
import ContextMenu from './apps/contextmenu';

const BrowserWrapper = ({number}) => {
    return (
        <div style={{position: 'absolute', top: '0'}}>
            <Browser number={number} />
        </div>
    )
}

const Desktop = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [minute, setTime] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());

    //app stores
    const [browserChildCount, setBrowserChildCount] = useState(0)
    const browserChildren = []

    const openBrowser = () => {
        dispatch({type: 'update_browserCount', browser: state.browser - 1})
        setBrowserChildCount(browserChildCount + 1)
    }

    for(var x = 0; x < browserChildCount; x++) {
        browserChildren.push(<BrowserWrapper number={x} key={x} />)
    }

    const openNotes = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: !state.notes, inbox: state.inbox})
        document.getElementById('settings-window').classList.add('newwindow')
    }

    const openInbox = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: state.notes, inbox: !state.inbox})
        document.getElementById('settings-window').classList.add('newwindow')
    }

    const openNote = () => {
        dispatch({type: 'update_error', error: true, notice: false, errorMsg: '(Errorcode: https://youtu.be/XCBPKRaJgz4?si=4gk0uIka8CKWTFlu) File does not exist!'})
        document.getElementById('settings-window').classList.add('newwindow')
    }

    const openSettings = () => {
        dispatch({type: 'update_settings', settings: true})
        document.getElementById('settings-window').classList.add('newwindow')
    }

    useEffect(() => {
        const setBackground = () => {
            var bg = localStorage.getItem('storedBackground')
            backgrounds.backgrounds.forEach((el) => {
                if(el.file === bg && localStorage.getItem(`${el.loccheck}`) !== null) {
                    document.getElementById('desktop').style.background = `url(${el.file})`;
                    document.getElementById('desktop').style.backgroundSize = `${el.size}`;
                }
            })
        }
        setInterval(() => {
            const date = new Date();
            setTime(date.getMinutes());
            setHour(date.getHours());
            if ((date.getHours() > 22 || date.getHours() < 5) && localStorage.getItem('latevisit') === null) {
                localStorage.setItem('latevisit', '1')
                dispatch({type: 'update_error', error: true, notice: true, errorMsg: 'Late visitor! Waves and Metallinks backgrounds unlocked!'})
            }
        }, 60000);
        setBackground()
        openBrowser()
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
    }, [state.browser, state.notes, state.inbox, state.context])

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

    const changeWindow = (id) => {
        document.querySelectorAll('.window').forEach((el) => {
            el.classList.remove('isactive')
            el.classList.remove('newwindow')
        })
        document.getElementById(id).classList.add('isactive')
    }

    const context = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch({type: 'update_contextMenu', context: true, contextPos: [e.clientX, e.clientY], contextType: false})
    }

    const contextDelete = (e) => {
        if(!e.contains('dontclose')) {
            dispatch({type: 'update_contextMenu', context: false, contextPos: [e.clientX, e.clientY], contextType: false})
        }
    }

    const muteSite = () => {
        document.querySelectorAll("audio").forEach((el) => {
            var curr = !el.muted
            el.muted = curr
            document.getElementById("sitemute").src = (curr === false ? '/images/Volume.ico' : '/images/Mute volume.ico')
        });
    }

    return (
        <>
            <iframe title='cookie for visited panel on my site, thank you for visiting!!' style={{display: 'none'}} src='https://nnexsus.net/setcookie/georadio'/>
            <div onClick={(e) => contextDelete(e.target.classList)} onContextMenu={(e) => context(e)} onLoad={() => setVisit()} style={{width: "100%", height: `100vh`, backgroundColor: "teal", overflow: 'hidden', imageRendering: 'pixelated'}} id='desktop'>
                <iframe style={{display: 'none'}} src='https://nnexsus.net/setcookie/georadio'/>
                <div onClick={(e) => changeWindow(e.currentTarget.id)} id='desktop-click' style={{height: '80%', display: "grid", gridTemplateColumns: "repeat(10,10%)", gridTemplateRows: 'repeat(10, 10%)', minHeight: '100%', padding: '20px', gap: '30px'}} className='icons'>
                    <div className='app-icon' onClick={() => openSettings()} style={{ gridColumn: '1' }}>
                        <img alt='decor' src='/images/My Computer.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p>My Computer</p>
                    </div>
                    {(new Date).getHours() >= 21 ?                 
                        <div className='app-icon' style={{ gridColumn: '1' }}>
                            <img alt='decor' src='/images/2pcs.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                            <p style={{textAlign: 'center'}}>Network Neighborhood</p>
                        </div>
                    : null }
                    <div className='app-icon' onClick={() => openInbox()} style={{ gridColumn: '1' }}>
                        <img alt='decor' src='/images/Mail.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p style={{textAlign: 'center'}}>Inbox</p>
                    </div>
                    <div className='app-icon' onClick={() => openBrowser()} style={{ gridColumn: '1'}}>
                        <img alt='decor' src='/images/Earth (16 colors).ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p style={{textAlign: 'center'}}>Internet Explorer</p>
                    </div>
                    <div className='app-icon' style={{ gridColumn: '1' }}>
                        <img alt='decor' src='/images/recycling.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p style={{textAlign: 'center'}}>Recycle Bin</p>
                    </div>
                    <div className='app-icon' onClick={() => openNotes()} style={{ gridColumn: '1' }}>
                        <img alt='decor' src='/images/winicon/Notepad writing.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                        <p style={{textAlign: 'center'}}>Notes</p>
                    </div>
                    {(new Date).getHours() === 23 ?
                        <div className='app-icon' onClick={() => openNote()} style={{ gridColumn: '1' }}>
                            <img alt='decor' src='/images/WordPad.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                            <p style={{textAlign: 'center'}}>notes_03.txt</p>
                        </div>
                    : null }
                </div>
                <div id='apps'>
                    {browserChildren.map((el) => {
                        return (
                            <div key={el.key} style={{position: 'absolute', top: '0'}} id={`browser-window-${el.props.number}`} onMouseDown={(e) => changeWindow(e.currentTarget.id)} className='window'>
                                {el}
                            </div>
                        )
                    })}
                </div>
                <div id='notes-window' onMouseDown={(e) => changeWindow(e.currentTarget.id)} className='window' style={{position: 'absolute', top: '0'}}>
                    {state.notes ?
                        <Notes/>
                    : null}
                </div>
                <div id='inbox-window' onMouseDown={(e) => changeWindow(e.currentTarget.id)} className='window' style={{position: 'absolute', top: '0'}}>
                    {state.inbox ?
                        <Inbox/>
                    : null}
                </div>
                <div id='error-window' onMouseDown={(e) => changeWindow(e.currentTarget.id)} className='error' style={{position: 'absolute', top: '0'}}>
                    {state.error ?
                        <Error/>
                    : null}
                </div>
                <div id='settings-window' onMouseDown={(e) => changeWindow(e.currentTarget.id)} className='window' style={{position: 'absolute', top: '0'}}>
                    {state.settings ?
                        <Settings/>
                    : null}
                </div>
                <div id='context-window' className='contextmenu' style={{position: 'absolute', top: '0'}} >
                    {state.context ?
                        <ContextMenu/>
                    : null}
                </div>
                <div className='border' style={{zIndex: 20, display: 'grid', gridTemplateColumns: '10% 70% 10%', position: 'sticky', marginTop: '-70px', backgroundColor: '#C0C7C8', border: 'ridge 3px', maxHeight: '25px'}}>
                    <button className='taskbar-buttons starts' onMouseLeave={() => hideDrops()} onClick={() => showDrops()} style={{backgroundColor: '#C0C7C8', border: 'outset 3px', borderColor: '', display: 'flex', flexDirection: 'column-reverse', alignItems: 'flex-start', height: '25px'}}>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '-2px'}}>
                            <img alt='decor' style={{marginLeft: '-5px'}} width='25px' height='25px' src='/images/winicon/windows.png' /><h2 style={{color: 'black', margin: '0', marginLeft: '5px'}}>Start</h2>
                        </div>
                            <div className='start hidestart'>
                                <div className='startmenu' style={{backgroundColor: 'lightgray', width: '250px', display: 'grid', gridTemplateColumns: '10% 90%', gridTemplateRows: 'repeat(7, 50px) 10px repeat(2, 50px)'}}>
                                    <div style={{gridColumn: 1, gridRow: 'span 10', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>
                                        <p style={{transform: 'rotate(-90deg)', whiteSpace: 'nowrap', marginBottom: '100px', fontSize: '18px'}}>Michaelsoft Binbows95</p>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' >
                                            <a style={{display: 'flex', alignItems: 'center'}} href='https://nnexsus.net/' rel='noreferrer' target='_blank'>                                               
                                                <img alt='decor' width={'32px'} height={'32px'} src='/images/moonicon.png' />
                                                <h2 style={{padding: '0', margin: '0'}}>Main Site</h2>
                                            </a>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/Web-document 2.ico' onClick={() => window.open('https://nnexsus.net/', '_blank')} />
                                            <h2 style={{padding: '0', margin: '0'}}>Contact</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Documents Folder.ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Documents</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Settings.ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Settings</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Search in sheet.ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Find</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Help book.ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Help</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Program wait.ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Run...</h2>
                                        </button>
                                    </div>
                                    <hr style={{height: '1px', width: 'calc(100% - 3px)'}} />
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Turn Off Computer (display only).ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Suspend</h2>
                                        </button>
                                    </div>
                                    <div style={{gridColumn: 2}}>
                                        <button className='startmenu-link' style={{display: 'flex', alignItems: 'center'}}>
                                            <img alt='decor' src='/images/winicon/startmenu/Turn Off Computer (full).ico'/>
                                            <h2 style={{padding: '0', margin: '0'}}>Power Off</h2>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </button>
                    <div className='app-shelf' style={{display: 'flex'}}>
                        <button className='taskbar-buttons app-drawer app-closed' id='netex-bar' onClick={() => openBrowser()}>
                            <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/explorer/webdoc.png'/><h2 style={{color: 'black'}}>Internet Explorer</h2>
                        </button>
                        <button className='taskbar-buttons app-drawer app-closed' id='notes-bar' onClick={() => openNotes()}>
                            <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/wordpad.png'/><h2 style={{color: 'black'}}>Notes</h2>
                        </button>
                        <button className='taskbar-buttons app-drawer app-closed' id='inbox-bar' onClick={() => openInbox()}>
                            <img style={{imageRendering: 'pixelated'}} alt='decor' width="20px" height="20px" src='/images/winicon/inbox/inbox.png'/><h2 style={{color: 'black'}}>Inbox</h2>
                        </button>
                    </div>
                    <div title='Toggle Mute Site' onClick={() => muteSite()} style={{cursor: 'url(/images/cursor/pointer.cur), auto', backgroundColor: '#C0C7C8', border: 'inset 2px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px', gridColumn: '5'}}>
                        <img alt='decor' id='sitemute' width={'15px'} height={'15px'} style={{marginLeft: '5px'}} src='/images/winicon/220.ico' />
                        <h2 style={{color: 'black', whiteSpace: 'nowrap', margin: 0, padding: 0}}>{(hour % 12) === 0 ? 12 + ":" : (hour % 12) + ":"}{minute < 10 ? "0" + minute : minute} {hour > 12 ? "PM" : "AM"}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desktop;