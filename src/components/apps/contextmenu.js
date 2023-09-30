import { useContext } from 'react';
import { LinkContext } from '../systems/context';

import '../css/contextmenu.css';

const ContextMenu = () => {

    const [state, dispatch] = useContext(LinkContext);

    return (
        <div id='context-menu' className='dontclose' style={{position: 'absolute', left: `${state.contextPos[0]}px`, top: `${state.contextPos[1]}px`, background: '#C0C7C8', width: '110px', height: '150px'}}>
            <button className='dontclose context-button'>Arrange Icons ▶</button>
            <button className='dontclose context-button'>Line up Icons</button>
            <hr className='dontclose context-hr' />
            <button className='dontclose context-button'>Paste</button>
            <button className='dontclose context-button'>Paste Shortcut</button>
            <button className='dontclose context-button'>Undo</button>
            <hr className='dontclose context-hr'/>
            <button className='dontclose context-button'>New ▶</button>
            <hr className='dontclose context-hr'/>
            <button className='dontclose context-button'>Properties</button>
        </div>
    )
}

export default ContextMenu;