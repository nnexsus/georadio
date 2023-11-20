import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from '../systems/context';

const Notes = () => {
    const [state, dispatch] = useContext(LinkContext);
    const [note, setNote] = useState( `
background key: industrial

*these notes save on change*`)

    const onClick = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: !state.notes, inbox: state.inbox})
    }

    const saveNote = (val) => {
        setNote(val)
        localStorage.setItem('notes', val)
    }

    useEffect(() => {
        if(localStorage.getItem('notes') !== null) {
            setNote(localStorage.getItem('notes'))
        }
    }, [])

    return (
        <Rnd default={{
                x: 0,
                y: 0,
                width: 800,
                height: 410,
            }}
            cancel={'.content'}
            bounds={"#desktop"}
            minHeight={288}
            minWidth={512}
            style={{backgroundColor: "#C0C7C8", borderStyle: 'solid', borderWidth: '3px', padding: '2px', borderRightColor: 'black', borderBottomColor: 'black', borderTopColor: '#FFF8FF', borderLeftColor: '#FFF8FF', outline: 'black solid 1px', outlineOffset: '-1px'}}>
                <div className='top-bar active-toggle-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/winicon/Notepad writing.ico'/>
                        <h4 className='title active-toggle-text' style={{marginLeft: '2px'}}>Notes</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button X' onClick={() => onClick()}><img alt='x' src='/images/winicon/X.png'/></button>
                        <button className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                        <button className='top-button m' onClick={() => onClick()}><img alt='x' src='/images/winicon/Minimize.png'/></button>
                    </div>
                </div>

                <div className='file-bar content' style={{width: '25%', height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                    <button className='files' style={{padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}>File</p></button>
                    <button className='edits' style={{padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}>Edit</p></button>
                    <button className='views' style={{padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}>Search</p></button>
                    <button className='helps' style={{padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}}>Help</p></button>
                </div>
                <hr/>
                <div className='content' style={{padding: '20px', height: 'calc(100% - 50px)'}}>
                    <div style={{height: 'inherit', overflow: 'scroll'}}>
                        <textarea value={note} onChange={(e) => saveNote(e.currentTarget.value)} style={{width: '100%', height: '100%', resize: 'none'}}>
                        </textarea>
                    </div>
                </div>
        </Rnd>
    )
}

export default Notes;