import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from './context';

const Notes = () => {
    const [state, dispatch] = useContext(LinkContext);
    const [note, setNote] = useState( `
cool sites i found!!

http://www.geomusic.net/
http://www.nightcity.net/
http://www.channelf.co/

Note to self: remember the www. and ending / 

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
            resizeGrid={[64, 36]}
            dragGrid={[64, 36]}
            cancel={'.content'}
            bounds={"#desktop"}
            minHeight={288}
            minWidth={512}
            style={{backgroundColor: "#C0C7C8", border: "groove 2px"}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>Notes</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button' onClick={() => onClick()}><p style={{margin: 0, color: 'black'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black'}}>◻</p></button>
                        <button className='top-button' onClick={() => onClick()}><p style={{margin: 0, color: 'black'}}>_</p></button>
                    </div>
                </div>
                <div className='content' style={{padding: '20px', height: '100%'}}>
                    <textarea value={note} onChange={(e) => saveNote(e.currentTarget.value)} style={{width: '100%', height: 'calc(100% - 69px)'}}>
                    </textarea>
                </div>
        </Rnd>
    )
}

export default Notes;