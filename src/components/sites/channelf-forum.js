import { useContext } from 'react';
import { LinkContext } from './../systems/context';

const ChannelFForum = ({number}) => {

    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link, browserInt: number})
    }

    return (
        <div id="channelfforum" style={{width: '100%', backgroundImage: `url(/images/tile3.jpg)`, paddingTop: '10px'}}>
            <hr style={{width: '65%', height: '1px'}}/>
                <div style={{height: '600px', marginTop: '50px', textAlign: 'center'}}>
                    <h2 style={{color: 'white', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '0 20px'}}>WELCOME TO THE KB&R FORUMS!!</h2>
                    <div style={{padding: '20px'}}>
                        <form style={{display: 'flex', flexDirection: 'column', width: '35%', margin: '0 auto'}}>
                            <input type={'text'} placeholder='screenname'/>
                            <textarea type={'textarea'} value={'Message'}>
                            </textarea>
                            <button disabled={true}><p>Post</p></button>
                        </form>
                    </div>
                    <h3 style={{color: 'white', textShadow: '0 0 5px white', fontFamily: 'serif', margin: '0 20px', paddingBottom: '10px'}}>Chat-log:</h3>
                    <div className="logs" style={{padding: '15px', background: 'rgba(0,0,0,0.2)'}}>
                        <div style={{margin: '15px', background: '#151424', overflowY: 'scroll', height: '350px'}}>
                            <ul className='channelf-forum-container'>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p>HELLO EVERYONE!! WELCOME TO THE KB&R FORUM!! VERY EXCITED TO MEET YOU HERE!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">normalgirl222- </i><p>hello... love the energy lol :). havent heard <i>Silent Pterodactyls</i> yet, i think its my favourite now!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p>I LOVE <i>SILENT PTERODACTYLS</i>!!! TOP 5 FOR ME!! IM GLAD YOU LIKE IT!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">ruuubyyy819- </i><p><i>Prosthetic Self Love</i> and <i>Dead End</i> are super good!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p><b className='channelf-bold'>ruuubyyy819</b> -> I KNOW!! <i>IM ON TO ME</i> IS EASILY HIS BEST ALBUM YET!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">user1105- </i><p>hello! I like Your Radio!</p><img alt='decor' src='/images/scratchin.gif'/></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p><b className='channelf-bold'>user1105</b> -> THANK YOU!!</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">nnightwolff- </i><p>Rav's lyric game is simply undefeated. How can one <i>not</i> be blown away by <i>Channel F</i>?</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">KBRULTRAFAN973- </i><p><b className='channelf-bold'>nnightwolff</b> -> YES!! ITS MY FAVORITE SONG!! LETS BE FRIENDS, YES?</p></li>
                                <li className="channelf-forum"><i className="channelf-italic">nnightwolff- </i><p><b className='channelf-bold'>KBRULTRAFAN973</b> -> Yes, of course! haha! Check out my page! My information can be found on it. <b style={{cursor: "url(/images/cursor/pointer.cur), auto"}} onClick={() => clickLink('http://nnightwolff.blog/')}>http://nnightwolff.blog/</b></p></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ChannelFForum;