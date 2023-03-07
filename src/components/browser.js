import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from './context';
import SiteChanger from './sitechanger';

const Browser = () => {

    const [showBroswer, setShowBrowser] = useState(false);
    const [addBar, setAddBar] = useState('http://www.geomusic.net/');
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        dispatch({type: 'update_app', browser: !state.browser, notes: state.notes})
    }

    useEffect(() => {
        dispatch({type: 'update_link', link: addBar})
    }, [addBar])

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
                        <img style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/Earth (16 colors).ico'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer - {state.link}</h4>
                    </div>
                    <div className='buttons content' style={{marginRight: '1px'}}>
                        <button className='top-button' onClick={() => onClick()}><p style={{margin: 0, color: 'black'}}>X</p></button>
                        <button className='top-button'><p style={{margin: 0, color: 'black'}}>◻</p></button>
                        <button className='top-button' onClick={() => onClick()}><p style={{margin: 0, color: 'black'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button><p style={{margin: 0, color: 'black'}}>File</p></button>
                    <button><p style={{margin: 0, color: 'black'}}>Edit</p></button>
                    <button><p style={{margin: 0, color: 'black'}}>View</p></button>
                    <button><p style={{margin: 0, color: 'black'}}>Favorites</p></button>
                    <button><p style={{margin: 0, color: 'black'}}>Help</p></button>
                </div>
                <div className='buttons-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center'}}>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img src='images/Opened Folder.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img src='images/New folder.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img src='images/TrueType font (logo).ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img src='images/Document to Document.ico' width={'20px'} height={'20px'}/></button>
                    <button style={{width: '25px', height: '25px', padding: '0'}}><img src='images/Opened Folder.ico' width={'20px'} height={'20px'}/></button>
                </div>
                <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <p style={{color: 'black', marginRight: '3px'}}>Address:</p>
                    <input type={'text'} value={state.link} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled={false}
                    style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}} onChange={(e) => setAddBar(e.currentTarget.value)}/>
                </div>
                <SiteChanger/>
        </Rnd>
    )
}

export default Browser;