import { useState, useEffect, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from './context';
import SiteChanger from './sitechanger';

import './css/browser.css';

const Browser = () => {

    const [favBar, setFavBar] = useState('')
    const [addBar, setAddBar] = useState('http://www.geomusic.net/');
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        dispatch({type: 'update_app', browser: !state.browser, notes: state.notes})
    }

    useEffect(() => {
        dispatch({type: 'update_link', link: addBar})
    }, [addBar])

    useEffect(() => {
        var local = localStorage.getItem('favorites')
        if (local !== null) {
            localStorage.setItem('favorites', 'http://geomusic.net/')
            local = localStorage.getItem('favorites')
        }
        setFavBar(local)
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
                <div style={{display: 'flex'}}>
                    {favList.map((fav) => (
                        <button onClick={(e) => setAddBar(e.currentTarget.id)} id={fav} key={fav + Math.random()} style={{display: 'flex', alignItems: 'center'}}>
                            <img alt='decor' width={'15px'} height={'15px'} src='/images/winicon/Blank sheet.ico' /><p style={{padding: '0', margin: '0', color: 'black'}}>{fav}</p>
                        </button>
                    ))}
                </div>
            )
        } catch {

        }
    }

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
            style={{backgroundColor: "#C0C7C8", border: "groove 2px", cursor: 'url(/images/cursor/move.cur), auto'}}>
                <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 21px 3px 13px 40px 27px', overflow: 'hidden'}}>
                    <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/winicon/explorer/webdoc.png'/>
                            <h4 className='title' style={{marginLeft: '2px'}}>Internet Explorer - {state.link}</h4>
                        </div>
                        <div className='buttons content' style={{marginRight: '1px'}}>
                            <button className='top-button X' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>X</p></button>
                            <button className='top-button m'><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>◻</p></button>
                            <button className='top-button m' onClick={() => onClick()}><p style={{margin: 0, color: 'black', padding: '1px 3px'}}>_</p></button>
                        </div>
                    </div>

                    <div className='buttons-bar' style={{width: '100%', height: '24px', display: 'flex', alignItems: 'center', gridRow: 4}}>
                        <button title='Open Folder' className='button-on-bar'><img alt='decor' src='images/winicon/explorer/opendir.png' width={'20px'} height={'20px'}/></button>
                        <button title='Home' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' onClick={() => setAddBar('http://www.geomusic.net/')} src='images/winicon/explorer/Home.png' width={'20px'} height={'20px'}/></button>
                        <button title='Back' className='button-on-bar'><img alt='decor' src='images/winicon/explorer/arrowl-lit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Forward' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/arrowr-unlit.png' width={'20px'} height={'20px'}/></button>
                        <button title='Unload' className='button-on-bar'><img alt='decor' onClick={() => setAddBar('')} src='images/winicon/explorer/Shred.png' width={'20px'} height={'20px'}/></button>
                        <button title='Refresh' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Refresh.png' width={'20px'} height={'20px'}/></button>
                        <button title='New Folder' className='button-on-bar'><img alt='decor' src='images/winicon/explorer/New folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Folder' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Copy to Folder.png' width={'20px'} height={'20px'}/></button>
                        <button title='Upscale Text' className='button-on-bar'><img alt='decor' src='images/winicon/explorer/upsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Downscale Text' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/downsize.png' width={'20px'} height={'20px'}/></button>
                        <button title='Cut' className='button-on-bar'><img alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/winicon/explorer/Cut.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy' className='button-on-bar'><img alt='decor' onClick={() => navigator.clipboard.writeText(addBar)} src='images/winicon/explorer/Copy.png' width={'20px'} height={'20px'}/></button>
                        <button title='Copy to Clipboard' className='button-on-bar' style={{marginRight: '10px'}}><img alt='decor' src='images/winicon/explorer/Paste.png' width={'20px'} height={'20px'}/></button>
                        <button title='Favorite' className='button-on-bar'><img alt='decor' onClick={() => updateFavorite(addBar, 1)} src='images/winicon/Earth Rating Document.ico' width={'20px'} height={'20px'}/></button>
                    </div>
                    <div className='address-bar content' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                        <p style={{color: 'black', marginRight: '3px'}}>Address:</p>
                        <input type={'text'} value={state.link} placeholder='https://www.youtube.com/watch?v=6j18-JVmf7w' disabled={false}
                        style={{fontFamily: "W95FA", width: "80%", backgroundColor: 'white', border: 'inset 2px'}} onChange={(e) => setAddBar(e.currentTarget.value)}/>
                    </div>

                    <div style={{gridRow: 5, display: 'flex', alignItems: 'center', margin: '12px 0 0 0', border: 'inset 3px'}} className='favorite-bar'>
                        <p style={{color: 'black', margin: '0', padding: '0'}}>Favorites:</p><img alt='decor' style={{imageRendering: 'pixelated'}} width={'25px'} height={'25px'} src='/images/winicon/Star.ico' />
                        <FavBar/>
                    </div>
                    
                    <div className='file-bar content' onMouseLeave={() => hideDrops()} style={{width: '100%', height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2'}}>
                        <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>File</p>
                            <div className='hidemenu dropmenu'>
                                <p onClick={() => setAddBar('http://www.georadio.net/')} className='file'>Back</p>
                                <p onClick={() => setAddBar(addBar)} className='file'>Refresh</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='file'>Edit</p>
                                <p onClick={() => onClick()} className='file X'>Close</p>
                            </div>
                        </button>

                        <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Edit</p>
                        <div className='hidemenu dropmenu'>
                                <p onClick={() => navigator.clipboard.writeText(addBar)} className='edit'>Copy Link</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Radios</p>
                                <p onClick={() => window.open('https://www.youtube.com/@_nexsus/playlists', '_blank')} className='edit'>Songs</p>
                                <p onClick={() => window.open('https://github.com/nnexsus/georadio', '_blank')} className='edit'>Pages</p>
                            </div>
                        </button>

                        <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>View</p>
                        <div className='hidemenu dropmenu'>
                                <p className='view'>Zoom</p>
                                <p className='view'>Find</p>
                                <p className='view'>Snapshot</p>
                            </div>
                        </button>

                        <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Favorites</p>
                        <div className='hidemenu dropmenu'>
                                <p className='favorite' onClick={() => updateFavorite(addBar, 1)}>Favorite Page</p>
                                <p className='favorite' onClick={() => updateFavorite(addBar, 0)}>Remove Page</p>
                                <p className='favorite' onClick={() => purgeFavorites()}>Removal All</p>
                            </div>
                        </button>

                        <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0, color: 'black', padding: '1px 3px'}} onClick={() => showDrops()}>Help</p>
                        <div className='hidemenu dropmenu'>
                                <p onClick={() => setAddBar('//help/navigating/')} className='help'>Navigating</p>
                                <p onClick={() => setAddBar('//help/listening/')} className='help'>Listening</p>
                                <p onClick={() => setAddBar('//help/apps/')} className='help'>Apps</p>
                                <p onClick={() => setAddBar('//help/about/')} className='help'>About</p>
                            </div>
                        </button>
                    </div>
                    <hr style={{height: '1px', width: '100%', gridRow: 3, margin: 0}} />
                </div>
                <SiteChanger/>
        </Rnd>
    )
}

export default Browser;