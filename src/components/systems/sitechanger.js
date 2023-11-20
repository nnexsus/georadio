import { useContext, useEffect, useRef, useState } from 'react';
import { LinkContext } from './context';

import Empty from '../sites/other/404';
import sites from './sites'; //no peeking

const SiteChanger = ({number, addbar}) => {
    
    const [state, dispatch] = useContext(LinkContext);
    const [prevSite, setPrevSite] = useState('')
    const [lastSite, setLastSite] = useState('')
    const refer = useRef()
    
    var InternalAddBar = sites["Home"];

    useEffect(() => {
        var curr = refer?.current?.childNodes[1]?.id
        if(curr !== prevSite) {
            dispatch({type: 'new_site', newsite: state.newsite + 1})
        }
        setPrevSite(lastSite)
        setLastSite(curr)
        setTimeout(() => {
            if(curr !== lastSite) {
                sessionStorage.setItem(`lastsite-${number}`, `${lastSite}`)
            }
        }, [50])
    }, [addbar])

    sites.hasOwnProperty(addbar) ? InternalAddBar = sites[addbar] : InternalAddBar = Empty

    return (
        <div ref={refer} id='sitechanger' className='content' style={{border: 'inset 2px', cursor: "url(/images/cursor/arrow.cur), auto", height: '-moz-calc(100% - 137px)', height: '-webkit-calc(100% - 137px)', height: 'calc(100% - 137px)', overflowY: 'scroll', overflowX: 'hidden'}}>
            <div id={`scrollto-${number}`}></div>
            <InternalAddBar number={number} addbar={addbar} />
     </div>
    )
}

export default SiteChanger;