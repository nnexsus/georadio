import { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import axios from 'axios';

import { LinkContext } from './../systems/context';

import './player.css';

import stations from '../json/stations.json';

const Player = styled.div`
    .progress-bar[value] {
        -webkit-appearance: none;
        appearance: none;
    
        width: 100%;
        height: 16px;
        background: ${prop => `repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px 2px, transparent 2px 4px ), linear-gradient(${stations.stations[prop.themeid].themeColors[1]} 0%, ${stations.stations[prop.themeid].themeColors[1]})`};
    }

    .progress-bar[value]::-webkit-progress-bar {
        background: ${prop => `repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0px 2px, transparent 2px 4px ), linear-gradient(${stations.stations[prop.themeid].themeColors[1]} 0%, ${stations.stations[prop.themeid].themeColors[1]})`};
        border: solid black 2px;
    }

    .progress-bar[value]::-webkit-progress-value {
        background: ${prop => `repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0px 2px, transparent 2px 4px ), linear-gradient(${stations.stations[prop.themeid].themeColors[0]} 0%, ${stations.stations[prop.themeid].themeColors[0]})`};
    }
    
    .progress-bar[value]::-moz-progress-bar {
        background: ${prop => `repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0px 2px, transparent 2px 4px ), linear-gradient(${stations.stations[prop.themeid].themeColors[0]} 0%, ${stations.stations[prop.themeid].themeColors[0]})`};
    }

`;


const MusicPlayer = ({radionum, number, themeid}) => {

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
    const [timestamp, setTimestamp] = useState('0') //stupid react moment timestamp to update the text
    const [volume, setVolume] = useState(0.65) //self explanatory
    const [playlistLength, setPlaylistLength] = useState(0); //for random selector
    const [recentlyPlayed, setRecentlyPlayed] = useState([0, 0, 0, 0, 0, 0, 0]); //verify that random selector isnt playing the same song too often
    const [preloadActive, setPreloadActive] = useState(false) //simple qualifier for preventing preload from running on the inital setSong()
    const audioRef = useRef() //ref to audio player

    let playsound = new Audio('/sounds/play.wav')
    let pausesound = new Audio('/sounds/pause.wav')
    let mutesound = new Audio('/sounds/mute.wav')

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
        console.log('Running for preload')
        if (preloadActive) {
            preload(song.song.id + 1) //preloads next song, backend reads this ID and increments it automatically
        }
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
        mutesound.play()
        audioRef.current.muted = data.muted;
        const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
        document.getElementById(`mute-${number}`).src = img
    }

    const newSong = async () => { //gets a newsong, only run the very first time an in-site-radio loads
        var currId = 0
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
            setPlaylistLength(res.data.listLength)
            audioRef.current.currentTime = res.data.currSec;
            axios.get(`https://arina.lol/api/geomusic/newcurr/${radionum}/${res.data.syncNum}`, {responseType: 'blob'}).then((res2) => {
                if (res2.status === 404) {
                    return dispatch({type: 'update_error', error: true, errorMsg: 'Cannot connect to server! Check uptime on nnexsus.net'})
                }
                if (res2.status > 220) {
                    return dispatch({type: 'update_error', error: true, errorMsg: 'Unable to get data for current song! (geo-curr-err)'})
                }
                var blob = new Blob([res2.data], { type: 'audio/mp3' });
                var url = window.URL.createObjectURL(blob)
                audioRef.current.src = url;
                audioRef.current.play();
            })
            currId = res.data.syncNum
        })
        return currId
    }

    const preload = (currId) => {
        if (shuffleActive) {
            currId = Math.round(Math.random() * (parseInt(playlistLength) - 1))
            const recentSort = recentlyPlayed.sort((a, b) => a - b)
            console.log(recentSort)
            for (var x = 0; x < 7; x++) {
                if(recentSort[x] === currId) {
                    currId++
                }
            }
        }
        console.log(recentlyPlayed, [currId, recentlyPlayed[0], recentlyPlayed[1], recentlyPlayed[2], recentlyPlayed[3], recentlyPlayed[4], recentlyPlayed[5], recentlyPlayed[6]])
        setRecentlyPlayed([currId, recentlyPlayed[0], recentlyPlayed[1], recentlyPlayed[2], recentlyPlayed[3], recentlyPlayed[4], recentlyPlayed[5], recentlyPlayed[6]])
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
        playsound.play()
        document.getElementById(`play-${number}`).classList.add('indent')
        document.getElementById(`pause-${number}`).classList.remove('indent')
    }

    const pause = () => {
        audioRef.current.pause()
        pausesound.play()
        document.getElementById(`play-${number}`).classList.remove('indent')
        document.getElementById(`pause-${number}`).classList.add('indent')
    }
  
    useEffect(() => { //update volume for audio ref on change
      audioRef.current.volume = volume
    }, [volume])

    useEffect(() => { //inital in-site-site load, start 
        if (radionum >= 0) {
            setPreloadActive(true)
            audioRef.current.muted = false
            setTimeout(async () => {
                const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
                document.getElementById(`mute-${number}`).src = img
                await newSong()
            }, 1000)
        }
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

    const [shuffleActive, setShuffleActive] = useState(false);

    const shuffle = () => {
        setShuffleActive(!shuffleActive)
        document.getElementById(`shuffle-${number}`).classList.toggle('indent')
        playsound.play()
    }

    if ("mediaSession" in navigator && radionum >= 0) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: `${song.song.name}`,
            artist: `${song.song.artist}`,
            album: `${stations.stations[radionum].name}`,
            artwork: [
                {
                  src: `https://velvety-baklava-651152.netlify.app/images/home/${stations.stations[radionum].name}192.png`,
                  sizes: "192x192",
                  type: "image/png",
                },
                {
                  src: `https://velvety-baklava-651152.netlify.app/images/home/${stations.stations[radionum].name}256.png`,
                  sizes: "256x256",
                  type: "image/png",
                },
                {
                  src: `https://velvety-baklava-651152.netlify.app/images/home/${stations.stations[radionum].name}384.png`,
                  sizes: "384x384",
                  type: "image/png",
                },
                {
                  src: `https://velvety-baklava-651152.netlify.app/images/home/${stations.stations[radionum].name}512.png`,
                  sizes: "512x512",
                  type: "image/png",
                },
            ],
          });
          try {
              navigator.mediaSession.setActionHandler("previoustrack", () => {
                  clickLink(`http://${stations.stations[radionum === 0 ? stations.stations.length - 1 : radionum - 1].link}`)
              });
              navigator.mediaSession.setActionHandler("nexttrack", () => {
                  clickLink(`http://${stations.stations[(radionum + 1) > stations.stations.length ? 0 : radionum + 1].link}`)
              });
              navigator.mediaSession.setActionHandler("seekto", () => {
                  shuffle()
              });
          } catch(e) {
            return dispatch({type: 'update_error', error: true, errorMsg: 'Browser does not support media player notifications.'})
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='audio-box' style={{background: `${stations.stations[themeid].background}`, 
            backgroundPosition: `${stations.stations[themeid].backgroundPosition !== null ? stations.stations[themeid].backgroundPosition : 'center' }`, 
            backgroundSize: `${stations.stations[themeid].backgroundSize !== null ? stations.stations[themeid].backgroundSize : '100%' }`,
            border: 'inset 3px', borderColor: 'black', width: '80%', display: 'flex', flexDirection: 'column'}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/cd6.gif'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>WinPlay4</h4>
                    </div>
                    <div className='buttons' style={{marginRight: '1px'}}>
                        <button onClick={() => hidePlayer()} className='top-button X'><img alt='x' src='/images/winicon/X.png'/></button>
                        <button onClick={() => hidePlayer()} className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                        <button onClick={() => hidePlayer()} className='top-button m'><img alt='x' src='/images/winicon/Minimize.png'/></button>
                    </div>
                </div>
                <div onMouseLeave={() => hideDrops()} className='file-bar audio-open radio-toggle' style={{width: '25%', marginLeft: '20px', height: '22px', paddingTop: '3px', alignItems: 'flex-start'}}>
                    <div className='radio-files' style={{zIndex: 10, gridTemplateColumns: '100%', padding: '0'}}>
                        <p onClick={() => showDrops()} style={{margin: 0}}><u>F</u>ile</p>
                        <div className='radio-hidemenu radio-dropmenu'>
                            <p onClick={() => window.open(`https://www.youtube.com/results?search_query=${song.song.name} ${song.song.artist}`)} className='radio-file'>Find Song</p>
                            <p onClick={() => saveAs(`https://arina.lol/api/geomusic/newcurr/${radionum}/${song.song.id}`)} className='radio-file'>Download</p>
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
                <Player themeid={themeid} style={{padding: '5px', border: 'outset 3px'}}>
                    <div className='black-box' style={{backgroundColor: 'black', overflowX: 'scroll', overflowY: 'hidden', border: 'inset 3px', padding: '10px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px", gap: '2px', alignItems: 'center'}}>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1, textAlign: 'center'}}>Track#</p>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1, textAlign: 'center'}}>Time</p>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1, textAlign: 'center'}}>Length</p>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'alarm', fontSize: `${data.currentID > 100 ? '40' : '50'}px`, margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55', textAlign: 'center'}}>{data.currentID}</p>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2, marginLeft: '10px'}}>{parseInt(timestamp / 60)}:{parseInt(timestamp % 60) < 10 ? "0" : null}{parseInt(timestamp % 60)}</p>
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px', marginLeft: '10px'}}>{Math.floor(parseInt(song.song.length) / 60).toFixed(0)}:{(parseInt(song.song.length) % 60).toFixed(0) < 10 ? '0' :null}{(parseInt(song.song.length) % 60).toFixed(0)}</p>
                            <div style={{gridColumn: 'span 3', gridRow: 3, overflow: 'hidden', backgroundColor: `${stations.stations[themeid].themeColors[2]}`}}>
                                <p style={{color: `${stations.stations[themeid].themeColors[0]}`, padding: '0 3px', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', lineHeight: '30px', whiteSpace: 'nowrap', width: '200%', textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis'}} className='scrolling'>{song.song.name} - {song.song.artist}</p>
                            </div>
                            <div className='audio-open radio-toggle' style={{alignItems: 'center', padding: "5px", gridColumn: 'span 3', gridRow: 4}}>
                                <progress className='progress-bar' max={parseInt(song.song.length).toFixed(0)} value={timestamp}/>
                            </div>
                            <img alt='decor' src={song.song.imgLink !== undefined ? song.song.imgLink : `/images/home/${stations.stations[radionum].name}.png`} style={{gridRow: 'span 3', gridColumn: 4, aspectRatio: '1/1', imageRendering: 'pixelated', marginLeft: '5px'}} height="100%" />
                            <p style={{color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 4, gridRow: 4, lineHeight: '30px', marginLeft: '10px'}}>{radionum >= 0 ? stations.stations[radionum].updateStatus : "New!"}</p>
                        </div>
                    </div>
                    <hr className='audio-open radio-toggle' style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                    <div style={{gridColumn: 'span 2'}}>
                        <div className='audio-open buttons-container radio-toggle' style={{alignItems: 'center'}}>
                            <div style={{display: 'flex'}}>
                                <button title='play' id={`play-${number}`} className='play-button indent player-button' onClick={() => play()}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                    </button>
                                <button title='pause' id={`pause-${number}`} className='pause-button player-button' onClick={() => pause()}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                                </button>
                                <button title='shuffle' id={`shuffle-${number}`} className='shuffle-button player-button' onClick={() => shuffle()}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>⇋</p>
                                </button>
                                <button title='download' className='player-button' onClick={() => saveAs(`https://arina.lol/api/geomusic/newcurr/${radionum}/${song.song.id}`)}>
                                    <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}><img alt='download song' style={{imageRendering: 'pixelated'}} src="/images/winicon/Download.png" width="16px" height="16px" /></p>
                                </button>
                            </div>
                            <div style={{display: 'flex', width: '100%'}}>                                
                                <button style={{display: 'flex', alignItems: 'center', border: 'outset 3px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => mute()}>
                                    <img alt='mute button' id={`mute-${number}`} src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                                </button>
                                <input style={{margin: '0', width: '100%', height: '27px'}} className='slider' type={'range'} max="100" onChange={(e) => setVolume(e.currentTarget.value / 100)}/>
                            </div>
                        </div>
                    </div>
                    <div style={{background: 'black', border: 'inset 3px', width: 'calc(100% - 12px)', padding: '3px', margin: '3px'}}>
                        <p style={{lineHeight: '12px', textAlign: 'center', margin: 0, color: `${stations.stations[themeid].themeColors[0]}`, fontFamily: 'pixel', fontSize: '10px'}}>Last Song: <i>{lastSong}</i></p>
                    </div>
                </Player>
                <audio
                    ref={audioRef}
                    onEnded={() => next()}
                    src={''}
                    onLoadedMetadata={() => audioRef.current.play()}
                    onTimeUpdate={e => setTimestamp(e.currentTarget.currentTime)}
                    autoPlay
                />
            </div>
        </div>
    )
}

export default MusicPlayer;