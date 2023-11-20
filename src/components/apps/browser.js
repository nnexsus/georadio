import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from '../systems/context';
import SiteChanger from '../systems/sitechanger';

import '../css/browser.css';

const Browser = ({number}) => {

    const [favBar, setFavBar] = useState('')
    const [addBar, setAddBar] = useState('Home');
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        document.getElementById(`browser-window-${number}`).remove()
        dispatch({type: 'update_browserCount', browser: state.browser - 1})
    }

    useEffect(() => {
        if(state.browserInt === number) {
            setAddBar(state.link)
        }
    }, [state.link])

    useEffect(() => {
        var local = localStorage.getItem('favorites')
        if (local === null) {
            localStorage.setItem('favorites', 'http://arina.com/')
            local = localStorage.getItem('favorites')
        }
        setFavBar(local)
        if (sessionStorage.getItem('history') === null) {
            sessionStorage.setItem('history', ",")
        }
        if (localStorage.getItem('resizePopup') == null) {
            localStorage.setItem('resizePopup', '1')
            dispatch({type: 'update_error', error: true, notice: true, errorMsg: 'Notice! Apps can be moved and resized!'})
        }
    }, [])

    const showDrops = () => {
        document.querySelectorAll('.dropmenu').forEach((el) => {
            el.classList.remove('hidemenu')
        })
    }

    const hideDrops = () => {
        document.querySelectorAll('.dropmenu').forEach((el) => {
            el.classList.add('hidemenu')
        }) 
    }

    const updateFavorite = (page, mode) => {
        var localsave = localStorage.getItem('favorites')
        if (mode === 1) {
            var newsave = localsave + `,${page}`
            localStorage.setItem('favorites', newsave)
            setFavBar(newsave)
        } else {
            var newsave = localsave.split(',')
            var final = ""
            newsave.forEach(save => {
                console.log(save, page)
                if (save !== `${page}`) {
                    final += save
                }
            })
            localStorage.setItem('favorites', final)
            setFavBar(final)
        }
    }

    const purgeFavorites = () => {
        localStorage.removeItem('favorites')
        setFavBar('')
    }

    const FavBar = () => {
        try {
            var favList = favBar.split(',')

            return (
                <div style={{display: 'flex', overflowX: 'scroll', overflowY: 'hidden', padding: '1px'}}>
                    {favList.map((fav) => (
                        <button className='favbar-button' onClick={(e) => setAddBar(e.currentTarget.id)} id={fav} key={fav + Math.random()} style={{display: 'flex', alignItems: 'center'}}>
                            <img alt='decor' width={'15px'} height={'15px'} src='/images/winicon/Blank sheet.ico' /><p style={{padding: '0', margin: '0', color: 'black'}}>{fav}</p>
                        </button>
                    ))}
                </div>
            )
        } catch {

        }
    }

    const navback = () => {
        console.log(sessionStorage.getItem(`lastsite-${number}`))
        setAddBar(`${sessionStorage.getItem(`lastsite-${number}`)}`)
        document.querySelectorAll('.forward-button').forEach((el) => {
            el.classList.toggle('disabled')
        })
    }

    const setBar = (link) => {
        setAddBar(link)
    }

    const maximize = () => {
        if (document.getElementsByClassName('browser-window')[0].style.width == '100vw') {
            document.getElementsByClassName('browser-window')[0].style.transform = `translate(${window.innerWidth / 3}px, ${window.innerHeight / 3}px)`;
            document.getElementsByClassName('browser-window')[0].style.width = '800px';
            document.getElementsByClassName('browser-window')[0].style.height = '410px';            
        } else {
            document.getElementsByClassName('browser-window')[0].style.transform = 'translate(0, 0)';
            document.getElementsByClassName('browser-window')[0].style.width = '100vw';
            document.getElementsByClassName('browser-window')[0].style.height = '96vh';
        }
    }

    const contextMenu = (e) => {
        e.preventDefault()
        dispatch({type: 'toggle_context', contextPos: [e.pageX, e.pageY]})
    }

    useEffect(() => {
        if(document.getElementById('back-button').classList.contains('disabled')) {
            document.querySelectorAll('.forward-button').forEach((el) => {
                el.classList.toggle('disabled')
            })
        }
    }, [state.newsite])

    return (
        <Rnd default={{
                x: window.innerWidth / 3,
                y: window.innerHeight / 3,
                width: 800,
                height: 410,
            }}
            cancel={'.content'}
            bounds={"#desktop"}
            minHeight={288}
            minWidth={512}
            className='browser-window'
            style={{backgroundColor: "#C0C7C8", cursor: 'url(/images/cursor/move.cur), auto', borderStyle: 'solid', borderWidth: '3px', padding: '2px', 
            borderRightColor: 'black', borderBottomColor: 'black', borderTopColor: '#FFF8FF', borderLeftColor: '#FFF8FF', outline: 'black solid 1px', outlineOffset: '-1px'}}>
                <div onContextMenu={(e) => contextMenu(e)} style={{display: 'grid', gridTemplateColumns: '90% 10%', gridTemplateRows: '25px 21px 3px 17px 40px 27px', overflow: 'hidden'}}>
                    <div className='top-bar active-toggle-bar' style={{gridColumn: 'span 2', width: '100%', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/winicon/explorer/webdoc.png'/>
                            <h4 className='active-toggle-text text-overflow' style={{marginLeft: '2px'}}>Internet Explorer - {addBar}</h4>
                        </div>
                        <div className='buttons content' style={{marginRight: '1px'}}>
                            <button className='top-button X' onClick={() => onClick()}><img alt='x' src='/images/winicon/X.png'/></button>
                            <button className='top-button m' onClick={() => maximize()}><img alt='x' src='/images/winicon/Maximize.png'/></button>
                            <button className='top-button m' onClick={() => onClick()}><img alt='x' src='/images/winicon/Minimize.png'/></button>
                        </div>
                    </div>

                    <div className='buttons-bar' style={{width: '100%', height: '24px', margin: '2px 0', marginLeft: '10px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Open Mail' className='button-on-bar'><img alt='decor' onClick={() => dispatch({type: 'update_app', browser: state.browser, notes: state.notes, inbox: !state.inbox})} src='images/winicon/explorer/opendir.png' width={'20px'} height={'20px'}/></button>
                        <a className='back-a' href={`#scrollto-${number}`}><button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' onClick={() => setBar('http://home.com/')} src='images/winicon/explorer/Home.png' width={'20px'} height={'20px'}/></button></a>
                        <a className='back-a' href={`#scrollto-${number}`}><button onClick={() => navback()} title='Back' id='back-button' className='button-on-bar forward-button'><img alt='decor' src='images/winicon/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button></a>
                        <a className='back-a' href={`#scrollto-${number}`}><button onClick={() => navback()} title='Forward' className='button-on-bar forward-button disabled' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/arrowr-lit.png' width={'20px'} height={'20px'}/></button></a>
                        <button title='Unload' className='button-on-bar'><img alt='decor' onClick={() => setAddBar('')} src='images/winicon/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar mobilehide'><img alt='decor' src='images/winicon/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar mobilehide' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar mobilehide'><img alt='decor' src='images/winicon/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar mobilehide' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar mobilehide'><img alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/winicon/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar mobilehide'><img alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/winicon/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar mobilehide' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                        <button title='Favorite' className='button-on-bar mobilehide'><img alt='decor' onClick={() => updateFavorite(addBar, 1)} src='images/winicon/Earth Rating Document.ico' width={'20px'} height={'20px'}/></button>
                        <button title='Remove Favorite' className='button-on-bar mobilehide'><img alt='decor' onClick={() => updateFavorite(addBar, 0)} src='images/winicon/Cross.ico' width={'20px'} height={'20px'}/></button>
                    </div>
                    <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black', gridColumn: 1}}>
                        <p style={{color: 'black', marginRight: '3px', fontSize: '14px', marginLeft: '5px',}}>Address:</p>
                        <input type={'text'} value={addBar} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled={false}
                        style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white'}} className='address-input' onChange={(e) => setAddBar(e.currentTarget.value)}/>
                        <button title='Favorite' style={{marginLeft: '5px'}} className='button-on-bar'><img alt='decor' onClick={() => updateFavorite(addBar, 1)} src='images/winicon/Earth Rating Document.ico' width={'20px'} height={'20px'}/></button>
                    </div>

                    <div style={{gridRow: 5, display: 'flex', alignItems: 'center', margin: '12px 0 0 0', zIndex: 3, overflow: 'hidden', cursor: "url('../../public/images/cursor/arrow.cur'), auto"}} className='favorite-bar content'>
                        <p style={{color: 'black', margin: '0', padding: '0', fontSize: '14px', marginLeft: '10px'}}>Favorites:</p><img alt='decor' style={{imageRendering: 'pixelated'}} width={'25px'} height={'25px'} src='/images/winicon/Star.ico' />
                        <FavBar/>
                    </div>
                    
                    <div className='file-bar content' onMouseLeave={() => hideDrops()} style={{zIndex: 10, width: '25%', height: '21px', marginLeft: '5px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                        <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}} onClick={() => showDrops()}><u>F</u>ile</p>
                            <div className='hidemenu dropmenu'>
                                <p onClick={() => navback()} className='file'>Back</p>
                                <p onClick={() => setAddBar(addBar)} className='file'>Refresh</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='file'>Edit</p>
                                <p onClick={() => onClick()} className='file X'>Close</p>
                            </div>
                        </button>

                        <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}} onClick={() => showDrops()}><u>E</u>dit</p>
                        <div className='hidemenu dropmenu'>
                                <p onClick={() => navigator.clipboard.writeText(addBar)} className='edit'>Copy Link</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Radios</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Songs</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='edit'>Pages</p>
                            </div>
                        </button>

                        <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}} onClick={() => showDrops()}><u>V</u>iew</p>
                        <div className='hidemenu dropmenu'>
                                <p className='view'>Zoom</p>
                                <p className='view'>Find</p>
                                <p className='view'>Snapshot</p>
                            </div>
                        </button>

                        <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}} onClick={() => showDrops()}><u>F</u>avorites</p>
                        <div className='hidemenu dropmenu'>
                                <p className='favorite' onClick={() => updateFavorite(addBar, 1)}>Favorite Page</p>
                                <p className='favorite' onClick={() => updateFavorite(addBar, 0)}>Remove Page</p>
                                <p className='favorite' onClick={() => purgeFavorites()}>Removal All</p>
                            </div>
                        </button>

                        <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, padding: '1px 3px'}} onClick={() => showDrops()}><u>H</u>elp</p>
                        <div className='hidemenu dropmenu'>
                            <a className='back-a' href={`#scrollto-${number}`}><p onClick={() => setAddBar('//help/navigating/')} className='help'>Navigating</p></a>
                            <a className='back-a' href={`#scrollto-${number}`}><p onClick={() => setAddBar('//help/listening/')} className='help'>Listening</p></a>
                            <a className='back-a' href={`#scrollto-${number}`}><p onClick={() => setAddBar('//help/apps/')} className='help'>Apps</p></a>
                            <a className='back-a' href={`#scrollto-${number}`}><p onClick={() => setAddBar('http://www.home.com/')} className='help'>Home</p></a>
                            <a className='back-a' href={`#scrollto-${number}`}><p onClick={() => setAddBar('//help/contact')} className='help'>Contact</p></a>
                            </div>
                        </button>
                    </div>
                    <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0, gridColumn: 'span 2'}} />
                    <div style={{gridColumn: 2, gridRowStart: 4, gridRowEnd: 7, background: 'black', border: 'inset 3px', maxHeight: '79px', width: '100%', backgroundImage: 'url(/logo192.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: 'black', backgroundPosition: 'center'}}>
                        <p style={{background: 'rgba(0,0,0,0.5)', padding: '2px', textOverflow: 'ellipsis', overflow: 'hidden', fontSize: '9px'}}>https://georadio.live/ <br/> v1.3</p>
                    </div>
                </div>
                <SiteChanger number={number} addbar={addBar} />
        </Rnd>
    )
}

export default Browser;