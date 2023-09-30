import { useContext, useState } from 'react';
import { LinkContext } from '../../systems/context';

import sites from '../../json/sites.json';

import '../../css/searchengine.css';

const SearchEngine = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    const updateResult = (val) => {
        setTimeout(() => {
            var newArr = []
            sites.sites.forEach((el) => {
                if(el.title.toLowerCase().match(val.toLowerCase())) newArr.push(el)
            })
        setResults(newArr)
        }, [250])
    }

    return (
        <div id='http://arina.com/'>
            <div style={{display: 'grid', gridTemplateColumns: '15% 80%'}}>
                <div>
                    <div style={{width: '14%', height: 'calc(100% - 137px)', position: 'fixed', textAlign: 'center', background: 'teal', borderRight: 'outset 3px'}}>
                        <h1 style={{color: 'black'}}>Arina</h1>
                        <input placeholder='Search...' type='text' style={{color: 'black', width: 'calc(100% - 8px)'}} onChange={(e) => updateResult(e.currentTarget.value)} />
                        <div style={{overflowY: 'scroll', overflowX: 'hidden', maxHeight: 'calc(100% - 100px)', background: 'white'}}>
                            {results?.length > 0 ? results?.map((el) => {
                                return (
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                                        <img width={'25px'} height={'25px'} src={`${el.img !== false ? el.img : '/images/Earth (16 colors).ico'}`} />
                                        <p key={el.id}><a href={`#scrollto-${number}`} style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'blue', textDecoration: 'underline'}}>{el.title}</a></p>
                                    </div>
                                )
                            }) : <img alt='decor' width={'50px'} height={'50px'} src='images/winicon/explorer/Shred.png'/>}
                        </div>
                    </div>
                </div>
                <div>
                    {sites.sites.map((site) => {
                        return (
                            <div className='sitelist' id={`mail-${site.id}`} onClick={(e) => clickLink(site.link)} style={{width: '100%', background: 'white', padding: '10px', display: 'flex', flexDirection: 'column', border: 'solid 2px black', margin: '8px 0'}} key={site.id}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div style={{display: 'flex'}}>
                                        <img alt='decor' width={'50px'} height={'50px'} src={`${site.img !== false ? site.img : '/images/Earth (16 colors).ico'}`}/>
                                        <h4 style={{marginLeft: '10px', color: 'black'}}>{site.sitename}</h4>
                                    </div>
                                    <p style={{margin: 0, color: 'rgba(0,0,0,0.6)'}}>{site.link}</p>
                                </div>
                                <hr/>
                                <div style={{marginLeft: '5%'}}>
                                    <h2 style={{margin: 0}}><a href={`#scrollto-${number}`} style={{cursor: "url(/images/cursor/pointer.cur), auto", color: 'blue', textDecoration: 'underline'}}>{site.title}</a></h2>
                                    <h3 style={{margin: 0, color: 'black'}}>{site.text}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchEngine;