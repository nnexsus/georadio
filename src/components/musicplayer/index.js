import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';

import { LinkContext } from './../systems/context';

import './player.css';
import { saveAs } from 'file-saver';

const radios = ['georadio', 'nightcity', 'channelf', 'neonsunrise', 'neonsunset', 'moemoejp', 'liquidelectrum', 'eyeofthestorm']

const MusicPlayer = () => {

    const [state, dispatch] = useContext(LinkContext);

    const [song, setSong] = useState({
        currentSong: '',
        song: {
            name: 'Loading...',
            artist: '',
            length: '',
            link: '',
            imgLink: '',
            id: ''
        }
    })

    const [data, setData] = useState({
        duration: 0,
        playing: false,
        volume: 0.65,
        muted: false,
        currentID: 1
    })

    const [songNext, setSongNext] = useState({
        currentSong: '',
        song: {
            name: 'Loading...',
            artist: '',
            length: '',
            link: '',
            imgLink: '',
            id: 1
        }
    })

    const [nextData, setNextData] = useState({
        duration: 0,
        playing: false,
        volume: 0.65,
        muted: false,
        currentID: 1
    })

    const [lastSong, setLastSong] = useState({
        artist: "This is the first song you've listened to. Welcome to the stream!",
        song: ""
    })
    const [nextSong, setNextSong] = useState(null)

    const [timestamp, setTimestamp] = useState('0:00')
    const [volume, setVolume] = useState(0.65)

    const audioRef = useRef()

    const next = () => {
        setLastSong({
            artist: song.song.artist,
            song: song.song.name
        })
        setData({
            playing: data.playing,
            volume: data.volume,
            muted: data.muted,
            currentID: data.currentID + 1 >= 65 ? 1 : data.currentID + 1
        })
        playNextSong()
        setSong(songNext)
        setData(nextData)
        setTimeout(() => {
            preload(song.song.id + 1)
        }, 1000)
    }

    const playNextSong = () => {
        audioRef.current.src = nextSong;
        audioRef.current.play();
    }

    const mute = () => {
        setData({
            playing: data.playing,
            volume: data.volume,
            muted: !data.muted,
            currentID: data.currentID
        })
        audioRef.current.muted = data.muted;
        const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
        document.getElementById('mute').src = img
    }

    const newSong = async () => {
        var currId = 0
        await axios.get(`https://arina.lol/api/geomusic/curr/${state.radio}`, {responseType: 'blob'}).then((res) => {
            if (res.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get data for current song! (geo-curr-err)'})
            }
            var blob = new Blob([res.data], { type: 'audio/mp3' });
            var url = window.URL.createObjectURL(blob)
            audioRef.current.src = url;
            audioRef.current.play();
        })
        await axios.get(`https://arina.lol/api/geomusic/sync/${state.radio}`).then((res) => {
            if (res.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get info for current song! (geo-sync-err)'})
            }
            setTimestamp(res.data.currSec)
            setData({
                playing: data.playing,
                muted: false,
                currentID: res.data.syncNum
            })
            setSong({
                song: {
                    name: res.data.metastat.title,
                    artist: res.data.metastat.artist,
                    length: res.data.metastat.durrNum,
                    link: res.data.metastat.title,
                    imgLink: res.data.metastat.picture,
                    id: res.data.metastat.track
                }
            })
            audioRef.current.currentTime = res.data.currSec;
            currId = res.data.syncNum
        })
        return currId
    }

    const preload = async (currId) => {
        await axios.get(`https://arina.lol/api/geomusic/currnext/${state.radio}/${currId}`, {responseType: 'blob'}).then((res) => {
            if (res.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get data for next song! (geo-currnext-err)'})
            }
            var blob = new Blob([res.data], { type: 'audio/mp3' });
            var url = window.URL.createObjectURL(blob)
            setNextSong(url)
        })
        await axios.get(`https://arina.lol/api/geomusic/syncnext/${state.radio}/${currId}`).then((res) => {
            if (res.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get info for next song! (geo-syncnext-err)'})
            }
            setNextData({
                playing: data.playing,
                muted: false,
                currentID: res.data.syncNum
            })
            setSongNext({
                currentSong: 'a',
                song: {
                    name: res.data.metastat.title,
                    artist: res.data.metastat.artist,
                    length: res.data.metastat.durrNum,
                    link: res.data.metastat.title,
                    imgLink: res.data.metastat.picture,
                    id: res.data.metastat.track
                }
            })
        })
    }

    const play = () => {
        audioRef.current.play()
        document.querySelector('.play-button').classList.add('indent')
        document.querySelector('.pause-button').classList.remove('indent')
    }

    const pause = () => {
        audioRef.current.pause()
        document.querySelector('.play-button').classList.remove('indent')
        document.querySelector('.pause-button').classList.add('indent')
    }
  
    useEffect(() => {
      audioRef.current.volume = volume
    }, [volume])

    useEffect(() => {
        audioRef.current.muted = false
        setTimeout(async () => {
            const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
            document.getElementById('mute').src = img
            var currId = await newSong()
            await preload(currId + 1)
        }, 1000)
    }, [])


    //visual stuff

    const showDrops = () => {
        document.querySelectorAll('.radio-dropmenu').forEach((el) => {
            el.classList.remove('radio-hidemenu')
        })
    }

    const hideDrops = () => {
        document.querySelectorAll('.radio-dropmenu').forEach((el) => {
            el.classList.add('radio-hidemenu')
        }) 
    }

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    const hidePlayer = () => {
        var elements = document.querySelectorAll('.radio-toggle')
        elements.forEach((el) => {
            if (el.classList.contains('audio-open')) {
                el.classList.remove('audio-open')
                el.classList.add('audio-closed')
            } else {
                el.classList.add('audio-open')
                el.classList.remove('audio-closed')
            }
        })
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='audio-box' style={{backgroundColor: '#C0C7C8', border: 'inset 3px', borderColor: 'black', width: '80%', display: 'flex', flexDirection: 'column'}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/cd6.gif'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>WinPlay3</h4>
                    </div>
                    <div className='buttons' style={{marginRight: '1px'}}>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(/images/cursor/pointer.cur), auto"}} disabled="true"><p onClick={() => hidePlayer()} style={{margin: 0, color: 'black'}}>X</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(/images/cursor/pointer.cur), auto"}} disabled="true"><p onClick={() => hidePlayer()} style={{margin: 0, color: 'black'}}>◻</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: "url(/images/cursor/pointer.cur), auto"}} disabled="true"><p onClick={() => hidePlayer()} style={{margin: 0, color: 'black'}}>_</p></button>
                    </div>
                </div>
                <div onMouseLeave={() => hideDrops()} className='file-bar audio-open radio-toggle' style={{width: '100%', height: '25px', alignItems: 'flex-start', borderBottom: 'black solid 1px'}}>
                    <div className='radio-files' style={{gridTemplateColumns: '100%', padding: '0', cursor: "url(/images/cursor/pointer.cur), auto"}}>
                        <p onClick={() => showDrops()} style={{margin: 0, color: 'black'}}>File</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => window.open(`https://www.youtube.com/results?search_query=${song.song.name} ${song.song.artist}`)} className='radio-file'>Find Song</p>
                            <p onClick={() => saveAs(`https://arina.lol/api/geomusic/curr/${state.radio}`)} className='radio-file'>Download</p>
                        </div>
                    </div>
                    <div className='radio-options' style={{cursor: "url(/images/cursor/pointer.cur), auto"}}>
                        <p onClick={() => showDrops()} style={{margin: 0, color: 'black'}}>Options</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => play()} className='radio-option'>Play</p>
                            <p onClick={() => pause()} className='radio-option'>Pause</p>
                            <p onClick={() => mute()} className='radio-option'>Mute</p>
                        </div>
                    </div>
                    <div className='radio-helps' style={{cursor: "url(/images/cursor/pointer.cur), auto"}}>
                        <p onClick={() => showDrops()} style={{margin: 0, color: 'black'}}>Help</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => clickLink('//help/listening/')} className='radio-help'>Listening</p>
                            <p onClick={() => clickLink('//help/listening/')} className='radio-help'>Playlist</p>
                        </div>
                    </div>
                </div>
                <div style={{padding: '20px', border: 'outset 3px', display: 'grid', gridTemplateColumns: "80% 20%"}}>
                    <div className='black-box' style={{backgroundColor: 'black', overflowX: 'scroll', overflowY: 'hidden', display: 'grid', gridTemplateRows: '15% 85%', border: 'inset 3px', padding: '10px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px"}}>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1}}>Track#</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1, marginLeft: '10px'}}>Time</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1}}>Length</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55'}}>{data.currentID}</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2, marginLeft: '10px'}}>{parseInt(timestamp / 60)}:{parseInt(timestamp % 60) < 10 ? "0" : null}{parseInt(timestamp % 60)}</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px', marginLeft: '10px'}}>{(parseInt(song.song.length) / 60).toFixed(0)}:{(parseInt(song.song.length) % 60).toFixed(0)}</p>
                            <div style={{gridColumn: 'span 3', gridRow: 3, overflow: 'hidden'}}>
                                <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', lineHeight: '30px', whiteSpace: 'nowrap', width: '200%', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis'}} className='scrolling'>{song.song.name} - {song.song.artist}</p>
                            </div>
                            <img alt='decor' src={song.song.imgLink !== undefined ? song.song.imgLink : `/images/home/${radios[state.radio]}.png`} style={{gridRow: 'span 3', gridColumn: 4, aspectRatio: '1/1', imageRendering: 'pixelated', marginLeft: '5px'}} height="100%" />
                        </div>
                    </div>
                    <div>
                        <div className='i-button'>
                            <button  onClick={() => hidePlayer()} style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>i</p>
                            </button>
                        </div>
                    </div>
                    <hr className='audio-open radio-toggle' style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                    <div style={{gridColumn: 'span 2'}}>
                        <div className='audio-open radio-toggle' style={{alignItems: 'center', border: "outset 3px"}}>
                            <button className='play-button indent player-button' onClick={() => play()}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                </button>
                            <button className='pause-button player-button' onClick={() => pause()}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                            </button>
                            <button style={{display: 'flex', alignItems: 'center', border: 'outset 3px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => mute()}>
                                <img alt='mute button' id='mute' src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                            </button>
                            <input style={{marginLeft: '5px'}} className='slider' type={'range'} max="100" onChange={(e) => setVolume(e.currentTarget.value / 100)}/>
                        </div>
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    onEnded={() => next()}
                    src={''}
                    onLoadedMetadata={() => audioRef.current.play()}
                    onTimeUpdate={e => setTimestamp(e.currentTarget.currentTime)}
                    autoPlay
                />
                <div className='audio-open radio-toggle' style={{alignItems: 'center', padding: "5px", border: "outset 3px"}}>
                    <p style={{marginRight: '10px'}}>Progress:</p><progress className='progress-bar' max={parseInt(song.song.length).toFixed(0)} value={timestamp}/>
                </div>
            </div>

            <div>
                <p style={{fontFamily: 'serif'}}>Last Song: <i>{lastSong.artist - lastSong.song}</i></p>
            </div>
        </div>
    )
}

export default MusicPlayer;