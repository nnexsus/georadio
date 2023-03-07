import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';

import { LinkContext } from './../context';

const MusicPlayer = () => {

    const [state, dispatch] = useContext(LinkContext);

    const [song, setSong] = useState({
        currentSong: 'a',
        lastSong: "This is the first song you've listened to. Welcome to the stream!",
        song: {
            name: 'a',
            artist: 'a',
            length: 'a',
            link: 'a',
            imgLink: 'a',
            id: 'a'
        }
    })

    const [data, setData] = useState({
        duration: 0,
        playing: false,
        volume: 0.65,
        muted: false,
        currentID: 1
    })

    const [timestamp, setTimestamp] = useState('0:00')
    const [volume, setVolume] = useState(0.65)

    const audioRef = useRef()

    const next = () => {
        setData({
            playing: data.playing,
            volume: data.volume,
            muted: data.muted,
            currentID: data.currentID + 1 >= 65 ? 1 : data.currentID + 1
        })
        newSong()
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
        var lastSong = `${song.song.name} - ${song.song.artist}`;
        await axios.get(`https://api-nnexsus-server.cfd/api/geomusic/curr/${state.radio}`, {responseType: 'blob'}).then((res) => {
            var blob = new Blob([res.data], { type: 'audio/mp3' });
            var url = window.URL.createObjectURL(blob)
            audioRef.current.src = url;
            audioRef.current.play();
        })
        await axios.get(`https://api-nnexsus-server.cfd/api/geomusic/sync/${state.radio}`).then((res) => {
            setTimestamp(res.data.currSec)
            setData({
                playing: data.playing,
                muted: true,
                currentID: res.data.syncNum
            })
            setSong({
                currentSong: 'a',
                lastSong: lastSong,
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
        })
    }
  
    useEffect(() => {
      audioRef.current.volume = volume
    }, [volume])

    useEffect(() => {
        audioRef.current.pause()
        next()
    }, [state.radio])

    useEffect(() => {
        audioRef.current.muted = true
        setTimeout(() => {
            const img = audioRef.current.muted === false ? '/images/Volume.ico' : '/images/Mute volume.ico'
            document.getElementById('mute').src = img
            newSong()
        }, 1000)
    }, [])

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='audio-box' style={{backgroundColor: '#C0C7C8', border: 'inset 3px', borderColor: 'black', width: '80%', display: 'flex', flexDirection: 'column'}}>
                <div className='top-bar' style={{width: '100%', height: '25px', display: 'flex', backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/cd6.gif'/>
                        <h4 className='title' style={{marginLeft: '2px'}}>WinPlay3</h4>
                    </div>
                    <div className='buttons' style={{marginRight: '1px'}}>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: 'pointer'}} disabled="true"><p style={{margin: 0, color: 'black'}}>X</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: 'pointer'}} disabled="true"><p style={{margin: 0, color: 'black'}}>◻</p></button>
                        <button style={{float: 'right', height: '20px', backgroundColor: '#C0C7C8', margin: '0 1px', cursor: 'pointer'}} disabled="true"><p style={{margin: 0, color: 'black'}}>_</p></button>
                    </div>
                </div>
                <div className='file-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', borderBottom: 'black solid 1px'}}>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: 'pointer'}}><p style={{margin: 0, color: 'black'}}>File</p></button>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: 'pointer'}}><p style={{margin: 0, color: 'black'}}>Options</p></button>
                    <button style={{backgroundColor: '#C0C7C8', border: '0', cursor: 'pointer'}}><p style={{margin: 0, color: 'black'}}>Help</p></button>
                </div>
                <div style={{padding: '20px', border: 'outset 3px', display: 'grid', gridTemplateColumns: "80% 20%"}}>
                    <div className='black-box' style={{backgroundColor: 'black', display: 'grid', gridTemplateRows: '15% 85%', border: 'inset 3px', padding: '10px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "20px 45px 20px"}}>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 1, gridRow: 1}}>Track</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 2, gridRow: 1}}>Min : Sec</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 1}}>Mode</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 1, gridRow: 2, opacity: '0.55'}}>{data.currentID}</p>
                            <p style={{color: '#00FF00', fontFamily: 'alarm', fontSize: '50px', margin: '0', gridColumn: 2, gridRow: 2}}>{parseInt(timestamp / 60)}:{parseInt(timestamp % 60) < 10 ? "0" : null}{parseInt(timestamp % 60)}</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 3, gridRow: 2, lineHeight: '30px'}}>{(parseInt(song.song.length) / 60).toFixed(0)}:{(parseInt(song.song.length) % 60).toFixed(0)}</p>
                            <p style={{color: '#00FF00', fontFamily: 'pixel', fontWeight: '10', margin: '0', fontSize: '10px', gridColumn: 'span 3', gridRow: 3, lineHeight: '30px', overflow: 'hidden'}}>{song.song.name} - {song.song.artist}</p>
                            <img alt='decor' src={song.song.imgLink} style={{gridRow: 'span 3', gridColumn: 4}} width="100%" height="100%" />
                        </div>
                    </div>
                    <div>
                        <div style={{margin: '15px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', border: 'outset 3px'}}>
                            <button style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: 'pointer'}}>
                                <a href={song.song.link}><p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>i</p></a>
                            </button>
                        </div>
                    </div>
                    <hr style={{width: '100%', height: '1px', gridColumn: 'span 2'}}/>
                    <div style={{gridColumn: 'span 2'}}>
                        <div style={{display: 'inline-flex', alignItems: 'center', border: "outset 3px"}}>
                            <button style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: 'pointer'}} onClick={() => audioRef.current.play()}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>▶</p>
                                </button>
                            <button style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: 'pointer'}} onClick={() => audioRef.current.pause()}>
                                <p style={{width: "25px", height: "20px", textAlign: 'center', margin: "0", color: 'black'}}>■</p>
                            </button>
                            <button style={{display: 'flex', alignItems: 'center', border: 'solid black 1px', backgroundImage: "url(/images/button.png)", backgroundSize: 'contain', cursor: 'pointer'}} onClick={() => mute()}>
                                <img alt='mute button' id='mute' src='/images/Mute volume.ico' style={{width: "25px", height: "20px", textAlign: 'center', margin: "0"}}/>
                            </button>
                            <input style={{marginLeft: '5px'}} className='slider' type={'range'} max="100" onChange={(e) => setVolume(e.currentTarget.value / 100)}/>
                        </div>
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    src={''}
                    onEnded={() => next()}
                    onLoadedMetadata={() => audioRef.current.play()}
                    onTimeUpdate={e => setTimestamp(e.currentTarget.currentTime)}
                    
                    autoPlay
                />
            <div style={{display: 'flex', alignItems: 'center', padding: "5px", border: "outset 3px"}}>
                <p style={{marginRight: '10px'}}>Progress:</p><progress className='progress-bar' max={parseInt(song.song.length).toFixed(0)} value={timestamp}/>
            </div>
            </div>

            <div>
                <p style={{fontFamily: 'serif'}}>Last Song: <i>{song.lastSong}</i></p>
            </div>
        </div>
    )
}

export default MusicPlayer;