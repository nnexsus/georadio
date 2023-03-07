import { useState, useEffect, useContext } from 'react';
import { LinkContext } from './context';

import Browser from './browser';
import Notes from './notes';

import './desktopStyles.css';

const Desktop = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [minute, setTime] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());
    const [day, setDay] = useState(new Date().getDay());

    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    const openBrowser = () => {
        dispatch({type: 'update_app', browser: !state.browser, notes: state.notes})
    }

    const openNotes = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: !state.notes})
    }

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(date.getMinutes());
            setHour(date.getHours());
            setDay(date.getDay());
        }, 1000);
    }, []);

    useEffect(() => {
        if (state.browser === true) {
            document.getElementById('netex-bar').style.border = 'inset 3px';
        } else {
            document.getElementById('netex-bar').style.border = 'outset 3px';
        }
        if (state.notes === true) {
            document.getElementById('notes-bar').style.border = 'inset 3px';
        } else {
            document.getElementById('notes-bar').style.border = 'outset 3px';
        }
    }, [state.browser, state.notes])

    return (
        <div style={{width: "100%", height: `100vh`, backgroundColor: "teal"}} id='desktop'>
            <div style={{height: '80%', display: "grid", gridTemplateColumns: "repeat(10,10%)", gridTemplateRows: 'repeat(10, 10%)', minHeight: '100%', padding: '20px', gap: '20px'}} className='icons'>
                <div className='app-icon'>
                    <img alt='decor' src='/images/My Computer.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p>My Computer</p>
                </div>
                <div className='app-icon' style={{ gridRow: '2', gridColumn: '1' }}>
                    <img alt='decor' src='/images/2pcs.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Network Neighborhood</p>
                </div>
                <div className='app-icon' style={{ gridRow: '3', gridColumn: '1' }}>
                    <img alt='decor' src='/images/Mail.ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Inbox</p>
                </div>
                <div className='app-icon' onClick={() => openBrowser()} style={{ gridRow: '1', gridColumn: '2'}}>
                    <img alt='decor' src='/images/Earth (16 colors).ico' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Internet Explorer</p>
                </div>
                <div className='app-icon' style={{ gridRow: '2', gridColumn: '2' }}>
                    <img alt='decor' src='/images/recycling.png' width={'50px'} height={'44px'} style={{imageRendering: "pixelated"}}/>
                    <p style={{textAlign: 'center'}}>Recycle Bin</p>
                </div>
                <div className='app-icon' onClick={() => openNotes()} style={{ gridRow: '3', gridColumn: '2' }}>
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
            <div className='border' style={{display: 'grid', gridTemplateColumns: '10% 20% 20% 40% 10%', position: 'sticky', marginTop: '-70px', backgroundColor: '#C0C7C8', border: 'ridge 3px', maxHeight: '25px'}}>
                <button style={{backgroundColor: '#C0C7C8', border: 'outset 3px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px'}}>
                    <img alt='decor' style={{marginLeft: '-5px'}} width='25px' height='25px' src='/images/Windows logo (without text).ico' /><h2 style={{color: 'black'}}>Start</h2>
                </button>
                <button id='netex-bar' onClick={() => openBrowser()} style={{backgroundColor: '#C0C7C8', border: 'outset 3px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px', cursor: 'pointer'}}>
                    <img alt='decor' style={{marginLeft: '5px'}} width="20px" height="20px" src='/images/Earth (16 colors).ico'/><h2 style={{color: 'black'}}>Internet Explorer</h2>
                </button>
                <button id='notes-bar' onClick={() => openNotes()} style={{backgroundColor: '#C0C7C8', border: 'outset 3px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px', cursor: 'pointer'}}>
                    <img alt='decor' style={{marginLeft: '5px'}} width="20px" height="20px" src='/images/WordPad.ico'/><h2 style={{color: 'black'}}>Notes</h2>
                </button>
                <button style={{backgroundColor: '#C0C7C8', border: 'inset  2px', display: 'flex', alignItems: 'center', height: '25px', gap: '10px', gridColumn: '5'}}><h2 style={{color: 'black'}}>{(hour % 12) === 0 ? 12 + ":" : (hour % 12) + ":"}{minute < 10 ? "0" + minute : minute} {hour > 12 ? "PM" : "AM"}</h2></button>
            </div>
        </div>
    )
}

export default Desktop;