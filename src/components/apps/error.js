import { useState, useEffect, useContext } from 'react';
import { LinkContext } from '../systems/context';
import { Rnd } from "react-rnd";


const Error = () => {

    const [state, dispatch] = useContext(LinkContext);
    const [msg, setMsg] = useState("No error!");
    
    let warnsound = new Audio('/sounds/CHORD.WAV')
    let chimesound = new Audio('/sounds/CHIMES.WAV')

    const onClick = () => {
        dispatch({type: 'update_error', error: false, notice: false, errorMsg: "The only error is this text popping up."})
    }

    useEffect(() => {
        setMsg(state.errorMsg)
        if(state.error) {
            if (state.notice == true) {
                chimesound.play()
            } else {
                warnsound.play()
            }
        }
    }, [state.error, state.errorMsg])

    return (
        <Rnd default={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            width: 220,
            height: 160,
        }}
        minHeight={120}
        minWidth={180}
        cancel={'.content'}
        bounds={"#desktop"}
        style={{backgroundColor: "#C0C7C8", border: "groove 2px", cursor: 'url(/images/cursor/move.cur), auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 6px', overflow: 'hidden'}}>
                <div className='top-bar active-toggle-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/winicon/warning.ico'/>
                        <h4 className='title active-toggle-text' style={{marginLeft: '2px'}}>{state.notice ? "Notice!" : "Error!"}</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button X' onClick={() => onClick()}><img alt='x' src='/images/winicon/X.png'/></button>
                        <button className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                        <button className='top-button m' onClick={() => onClick()}><img alt='x' src='/images/winicon/Minimize.png'/></button>
                    </div>
                </div>
                <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0}} />
            </div>
            <div style={{paddingTop: '10px', display: 'flex', alignItems: 'flex-start'}}>
                {state.notice ? <img width={'50px'} height={'50px'} style={{imageRendering: 'pixelated'}} src="/images/winicon/warning.ico" /> : <img width={'50px'} height={'50px'} style={{imageRendering: 'pixelated'}} src="/images/winicon/Cross.ico" /> }
                <p style={{color: 'black', textAlign: 'left', paddingLeft: '12px'}}>{msg}</p>
            </div>
            <audio/>
    </Rnd>
    )
}

export default Error;