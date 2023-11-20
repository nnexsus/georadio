import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Help5 = () => {
    
    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="help" style={{width: '100%', backgroundColor: 'teal', paddingTop: '10px', height: '100%'}}>
            <div style={{textAlign: 'center', backgroundImage: 'url(/images/Earth (16 colors).ico)'}} >
                <div className='opener' style={{textAlign: 'center', filter: 'drop-shadow(0 0 3px black)'}}>
                    <h1 style={{fontFamily: 'serif'}}>Help Page 5: Contact</h1>
                        <hr style={{width: '80%', height: '1px'}}/>
                        <div style={{display: 'flex', flexDirection: 'column'}} className='home-3'>
                            <a target='_blank' rel='noreferrer' href='https://nnexsus.net/'><p>My Site</p></a>
                            <a target='_blank' rel='noreferrer' href='https://twitter.com/_nnexsus'><p>Twitter</p></a>
                            <a target='_blank' rel='noreferrer' href='https://discord.gg/d8R2tDaBK2'><p>Discord</p></a>
                            <a target='_blank' rel='noreferrer' href='https://github.com/nnexsus/'><p>Github</p></a>
                            <a target='_blank' rel='noreferrer' href='https://trello.com/c/5uRXm6pw/85-georadio-v13'><p>Trello</p></a>
                        </div>
                        <h3>Or...</h3>
                        <a href='mailto:nnexsus.service@gmail.com'><p>nnexsus.service@gmail.com</p></a>
                </div>
            </div>
        </div>
    )
}

export default Help5;