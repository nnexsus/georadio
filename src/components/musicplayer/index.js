import { useState, useEffect, useRef, useContext } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

import { LinkContext } from './../systems/context';

import './player.css';

const radios = ['georadio', 'nightcity', 'channelf', 'neonsunrise', 'neonsunset', 'moemoejp', 'liquidelectrum', 'eyeofthestorm']

const MusicPlayer = ({radionum, number}) => {

    const [state, dispatch] = useContext(LinkContext); //fuck this, annotating everything. im sick of this looping bug

    const [song, setSong] = useState({ //current song metadata
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

    const [data, setData] = useState({ //radio player data for visual components
        duration: 0,
        playing: false,
        volume: 0.65,
        muted: false,
        currentID: 1
    })

    const [songNext, setSongNext] = useState({ //preloaded song metadata
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

    const [nextData, setNextData] = useState({ //preloaded visual data
        duration: 0,
        playing: false,
        volume: 0.65,
        muted: false,
        currentID: 1
    })

    const [lastSong, setLastSong] = useState("This is the first song you've listened to. Welcome to the stream!") //self explanatory
    const [nextSong, setNextSong] = useState(null) //song filedata

    const [timestamp, setTimestamp] = useState('0:00') //stupid react moment timestamp to update the text
    const [volume, setVolume] = useState(0.65) //self explanatory

    const audioRef = useRef() //ref to audio player

    const next = () => { //function that runs when the audio ref current song reaches its end
        setLastSong(`${song.song.artist[0].toString()} - ${song.song.name.toString()}`) //last song text
        setData({ //visual components reset or something? idk actually but i imagine its needed
            playing: data.playing,
            volume: data.volume,
            muted: data.muted,
            currentID: data.currentID
        })
        playNextSong() //sets audio from current song to preloaded, no metadata changes
        setSong(songNext) //sets metadata to preloaded
        setData(nextData) //sets visual metadata to preloaded
    }

    useEffect(() => {
        console.log(song.song.id + " " + (song.song.id + 1))
        preload(song.song.id + 1) //preloads next song, backend reads this ID and increments it automatically
    }, [song])

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
        document.getElementById(`mute-${number}`).src = img
    }

    const newSong = async () => { //gets a newsong, only run the very first time an in-site-radio loads
        var currId = 0
        await axios.get(`https://arina.lol/api/geomusic/curr/${radionum}`, {responseType: 'blob'}).then((res) => {
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
        await axios.get(`https://arina.lol/api/geomusic/sync/${radionum}`).then((res) => {
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
                    id: res.data.syncNum
                }
            })
            audioRef.current.currentTime = res.data.currSec;
            currId = res.data.syncNum
        })
        return currId
    }

    const preload = (currId) => {
        console.log(currId)
        axios.get(`https://arina.lol/api/geomusic/currnext/${radionum}/${currId}`, {responseType: 'blob'}).then((res) => {
            if (res.status === 404) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
            }
            if (res.status > 220) {
                return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get data for next song! (geo-currnext-err)'})
            }
            var blob = new Blob([res.data], { type: 'audio/mp3' });
            var url = window.URL.createObjectURL(blob)
            setNextSong(url) //store next song file data

            axios.get(`https://arina.lol/api/geomusic/syncnext/${radionum}/${currId}`).then((res) => {
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
                        id: res.data.syncNum
                    }
                })
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
  
    useEffect(() => { //update volume for audio ref on change
      audioRef.current.volume = volume
    }, [volume])

    useEffect(() => { //inital in-site-site load, start 
        audioRef.current.muted = false
        setTimeout(async () => {
            const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
            document.getElementById(`mute-${number}`).src = img
            var currId = await newSong()
            //preload(currId)
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
                        <button onClick={() => hidePlayer()} className='top-button X'><img alt='x' src='/images/winicon/X.png'/></button>
                        <button onClick={() => hidePlayer()} className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                        <button onClick={() => hidePlayer()} className='top-button m'><img alt='x' src='/images/winicon/Minimize.png'/></button>
                    </div>
                </div>
                <div onMouseLeave={() => hideDrops()} className='file-bar audio-open radio-toggle' style={{width: '25%', marginLeft: '20px', height: '25px', alignItems: 'flex-start'}}>
                    <div className='radio-files' style={{zIndex: 10, gridTemplateColumns: '100%', padding: '0'}}>
                        <p onClick={() => showDrops()} style={{margin: 0}}><u>F</u>ile</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => window.open(`https://www.youtube.com/results?search_query=${song.song.name} ${song.song.artist}`)} className='radio-file'>Find Song</p>
                            <p onClick={() => saveAs(`https://arina.lol/api/geomusic/test/curr/${radionum}`)} className='radio-file'>Download</p>
                        </div>
                    </div>
                    <div className='radio-options' style={{zIndex: 10}}>
                        <p onClick={() => showDrops()} style={{margin: 0}}><u>O</u>ptions</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => play()} className='radio-option'>Play</p>
                            <p onClick={() => pause()} className='radio-option'>Pause</p>
                            <p onClick={() => mute()} className='radio-option'>Mute</p>
                        </div>
                    </div>
                    <div className='radio-helps' style={{zIndex: 10}}>
                        <p onClick={() => showDrops()} style={{margin: 0}}><u>H</u>elp</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => clickLink('//help/listening/')} className='radio-help'>Listening</p>
                            <p onClick={() => clickLink('//help/listening/')} className='radio-help'>Playlist</p>
                        </div>
                    </div>
                </div>
                <div style={{padding: '20px', border: 'outset 3px', display: 'grid', gridTemplateColumns: "80% 20%"}}>
                    <div className='black-box' style={{backgroundColor: 'black', overflowX: 'scroll', overflowY: 'hidden', display: 'grid', gridTemplateRows: '15% 85%', border: 'inset 3px', padding: '10px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px", gap: '2px'}}>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1}}>Track#</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1, marginLeft: '10px'}}>Time</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1}}>Length</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55'}}>{data.currentID}</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2, marginLeft: '10px'}}>{parseInt(timestamp / 60)}:{parseInt(timestamp % 60) < 10 ? "0" : null}{parseInt(timestamp % 60)}</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px', marginLeft: '10px'}}>{Math.floor(parseInt(song.song.length) / 60).toFixed(0)}:{(parseInt(song.song.length) % 60).toFixed(0) < 10 ? '0' :null}{(parseInt(song.song.length) % 60).toFixed(0)}</p>
                            <div style={{gridColumn: 'span 3', gridRow: 3, overflow: 'hidden', backgroundColor: '#001f00'}}>
                                <p style={{color: '#00FF00', padding: '0 3px', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', lineHeight: '30px', whiteSpace: 'nowrap', width: '200%', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis'}} className='scrolling'>{song.song.name} - {song.song.artist}</p>
                            </div>
                            <img alt='decor' src={song.song.imgLink !== undefined ? song.song.imgLink : `/images/home/${radios[radionum]}.png`} style={{gridRow: 'span 3', gridColumn: 4, aspectRatio: '1/1', imageRendering: 'pixelated', marginLeft: '5px'}} height="100%" />
                        </div>
                    </div>
                    <div>
                        <div className='i-button'>
                            <button  onClick={() => hidePlayer()} style={{display: 'flex', alignItems: 'center', border: 'none', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>i</p>
                            </button>
                        </div>
                    </div>
                    <hr className='audio-open radio-toggle' style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                    <div style={{gridColumn: 'span 2'}}>
                        <div className='audio-open buttons-container radio-toggle' style={{alignItems: 'center', border: "outset 3px"}}>
                            <div style={{display: 'flex'}}>
                                <button className='play-button indent player-button' onClick={() => play()}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                    </button>
                                <button className='pause-button player-button' onClick={() => pause()}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                                </button>
                            </div>
                            <div style={{display: 'flex'}}>                                
                                <button style={{display: 'flex', alignItems: 'center', border: 'outset 3px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => mute()}>
                                    <img alt='mute button' id={`mute-${number}`} src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                                </button>
                                <input style={{marginLeft: '5px', width: '100%'}} className='slider' type={'range'} max="100" onChange={(e) => setVolume(e.currentTarget.value / 100)}/>
                            </div>
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
                    <p style={{marginRight: '10px', color: 'black'}}>Progress:</p><progress className='progress-bar' max={parseInt(song.song.length).toFixed(0)} value={timestamp}/>
                </div>
            </div>

            <div>
                <p style={{fontFamily: 'serif'}}>Last Song: <i>{lastSong}</i></p>
            </div>
        </div>
    )
}

export default MusicPlayer;