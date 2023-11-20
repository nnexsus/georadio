import { useContext, useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import { LinkContext } from '../systems/context';

import mail from '../json/mail.json';

const Inbox = () => {

    const [open, setOpen] = useState(mail.mail[0])
    const [state, dispatch] = useContext(LinkContext);

    const onClick = () => {
        dispatch({type: 'update_app', browser: state.browser, notes: state.notes, inbox: !state.inbox})
    }

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

    const openMail = (id) => {
        setOpen(mail.mail[id.split('-')[1]])
        document.querySelectorAll('.maillist').forEach((el) => el.classList.remove('mailopen'))
        document.getElementById(`${id}`).classList.add('mailopen')
    }

    useEffect(() => {
        setOpen(0)
    }, [state.email])

    return (
        <Rnd default={{
            x: 0,
            y: 0,
            width: 800,
            height: 410,
        }}
        cancel={'.content'}
        bounds={"#desktop"}
        minHeight={288}
        minWidth={512}
        style={{backgroundColor: "#C0C7C8", border: "groove 2px", cursor: 'url(/images/cursor/move.cur), auto', outline: 'black solid 1px', outlineOffset: '-1px', borderStyle: 'solid', borderWidth: '3px', padding: '2px', borderRightColor: 'black', borderBottomColor: 'black', borderTopColor: '#FFF8FF', borderLeftColor: '#FFF8FF'}}
        className='inboxblack appwindow'>

        <div style={{display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '25px 26px 3px 32px', overflow: 'hidden'}}>
            <div className='top-bar active-toggle-bar' style={{width: '100%', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img alt='decor' style={{marginLeft: '5px'}} width="22px" height="22px" src='/images/Mail.ico'/>
                    <h4 className='active-toggle-text' style={{marginLeft: '2px'}}>Inbox</h4>
                </div>
                <div className='buttons content' style={{marginRight: '1px'}}>
                    <button className='top-button X' onClick={() => onClick()}><img alt='x' src='/images/winicon/X.png'/></button>
                    <button className='top-button m'><img alt='x' src='/images/winicon/Maximize.png'/></button>
                    <button className='top-button m' onClick={() => onClick()}><img alt='x' src='/images/winicon/Minimize.png'/></button>
                </div>
            </div>
        <div className='buttons-bar' style={{gridRow: 4, margin: '3px 0 2px', width: '100%', height: '25px', display: 'flex', alignItems: 'center', zIndex: 6}}>
            <button className='button-on-bar' style={{marginRight: '5px'}}><img alt='decor' src='images/winicon/inbox/New letter.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar'><img alt='decor' src='images/winicon/inbox/Printer.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar'><img alt='decor' src='images/winicon/inbox/Copy.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar' style={{marginRight: '5px'}}><img alt='decor' src='images/winicon/inbox/Cross.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar'><img alt='decor' src='images/winicon/inbox/Send.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar'><img alt='decor' src='images/winicon/inbox/Sendall.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar' style={{marginRight: '5px'}}><img alt='decor' src='images/winicon/inbox/Forward.png' width={'20px'} height={'20px'}/></button>
            <button className='button-on-bar'><img alt='decor' src='images/winicon/inbox/Book.png' width={'20px'} height={'20px'}/></button>
        </div>
        <hr style={{gridRow: 3, width: '100%', margin: 0, height: '1px'}} />
        <div className='file-bar content' onMouseLeave={() => hideDrops()} 
        style={{gridRow: 2, width: '25%', zIndex: 11, height: '25px', display: 'flex', alignItems: 'flex-start', gridRow: '2', cursor: "url(/images/cursor/arrow.cur), auto"}}>
            <button className='files' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0,  padding: '1px 3px'}} onClick={() => showDrops()}><u>F</u>ile</p>
                <div className='hidemenu dropmenu'>
                    <p className='file'>Back</p>
                    <p className='file'>Refresh</p>
                    <p className='file'>Edit</p>
                    <p className='file X'>Close</p>
                </div>
            </button>
            <button className='edits' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0,  padding: '1px 3px'}} onClick={() => showDrops()}><u>E</u>dit</p>
            <div className='hidemenu dropmenu'>
                    <p className='edit'>Copy Link</p>
                </div>
            </button>
            <button className='views' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0,  padding: '1px 3px'}} onClick={() => showDrops()}><u>V</u>iew</p>
            <div className='hidemenu dropmenu'>
                    <p className='view'>Zoom</p>
                    <p className='view'>Find</p>
                </div>
            </button>
            <button className='favorites' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0,  padding: '1px 3px'}} onClick={() => showDrops()}><u>M</u>ail</p>
            <div className='hidemenu dropmenu'>
                    <p className='favorite'>idk</p>
                    <p className='favorite'>what to</p>
                    <p className='favorite'>put here tbh</p>
                </div>
            </button>
            <button className='helps' style={{gridTemplateColumns: '100%', padding: '0'}}><p style={{margin: 0,  padding: '1px 3px'}} onClick={() => showDrops()}><u>H</u>elp</p>
            <div className='hidemenu dropmenu'>
                    <p className='help'>Getting Mail</p>
                </div>
            </button>
        </div>
    </div>
<div style={{display: 'grid', gridTemplateColumns: '19% 1% 80%', gridTemplateRows: '30% 70%', height: '-moz-calc(100% - 112px)', height: '-webkit-calc(100% - 112px)', height: 'calc(100% - 112px)'}}>
        <div style={{gridRow: 'span 2', gridColumn: 1, border: 'inset 3px', overflow: 'hidden', cursor: "url(/images/cursor/arrow.cur), auto", backgroundColor: 'white'}}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '5px'}}><img alt='decor' width={'16px'} src='/images/Mail.ico'/><p className='text-overflow' style={{margin: 0}}>Microsoft Exchange</p></div>
            <div style={{marginLeft: '35px'}}>
                <li style={{marginLeft: '-30px', display: 'flex'}}><img alt='decor' width={'16px'} src='/images/winicon/inbox/Folder catalog 2.ico' /><p style={{ margin: '0 5px'}}>Inbox</p></li>
                <li style={{display: 'flex'}}><img alt='decor' width={'16px'} src='/images/winicon/inbox/204.ico' /><p className='text-overflow' style={{ margin: '0 5px'}}>Outbox</p></li>
                <li style={{display: 'flex'}}><img alt='decor' width={'16px'} src='/images/winicon/inbox/203.ico' /><p className='text-overflow' style={{ margin: '0 5px'}}>Sent</p></li>
                <li style={{display: 'flex'}}><img alt='decor' width={'16px'} src='/images/winicon/inbox/203.ico' /><p className='text-overflow' style={{ margin: '0 5px'}}>Deleted</p></li>
                <li style={{display: 'flex'}}><img alt='decor' width={'16px'} src='/images/winicon/inbox/203.ico' /><p className='text-overflow' style={{ margin: '0 5px'}}>Drafts</p></li>
            </div>
        </div>
        <div style={{gridRow: 1, gridColumn: 3, border: 'inset 3px', overflow: 'hidden', cursor: "url(/images/cursor/arrow.cur), auto"}}>
            <div className='mailbox' style={{height: '100%', overflowY: 'scroll', overflowX: 'hidden', display: 'flex', flexDirection: 'column', backgroundColor: 'white'}}>
                <div className='inboxkey' style={{display: 'grid', gridTemplateColumns: 'calc(5% + 25px) calc(15% + 25px) calc(15% + 25px) calc(65% + 25px)', height: '25px', zIndex: '2', marginBottom: '5px'}}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 33.3%)', gridTemplateRows: '100%', width: '100%'}}>
                        <div style={{border: 'outset 3px', backgroundColor: 'lightgray'}}>
                            <p style={{ margin: '0 6px'}}>!</p>
                        </div>      
                        <div style={{border: 'outset 3px', backgroundColor: 'lightgray'}}>
                            <img alt='decor' width={'20px'} src='/images/winicon/inbox/2001.ico'/>
                        </div>
                        <div style={{border: 'outset 3px', backgroundColor: 'lightgray'}}>
                            <img alt='decor' width={'20px'} src='/images/winicon/inbox/Paperclip.ico'/>
                        </div>
                    </div>
                    <p style={{ margin: 0, border: 'outset 3px', backgroundColor: 'lightgray'}}>From</p>
                    <p style={{ margin: 0, border: 'outset 3px', backgroundColor: 'lightgray'}}>Subject</p>
                    <p style={{ margin: 0, border: 'outset 3px', backgroundColor: 'lightgray'}}>Body</p>
                </div>
                {state.email.map((num) => {
                    var email = mail.mail[num]
                    return (
                        <div className='maillist' id={`mail-${email.id}`} onClick={(e) => openMail(e.currentTarget.id)} style={{width: '100%', display: 'grid', gridTemplateColumns: 'calc(5% + 25px) 15% 15% 65%', gap: '25px', gridTemplateRows: '100%', zIndex: '1', cursor: "url(/images/cursor/pointer.cur), auto"}} key={email.id}>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 33.3%)', gridTemplateRows: '100%', width: '100%'}}>
                                <p style={{ margin: '0 6px'}}>{email.important ? "!" : null}</p>
                                <img alt='decor' width={'20px'} src='/images/winicon/inbox/2001.ico'/>
                                {email.img ? <img alt='decor' width={'20px'} src='/images/winicon/inbox/Paperclip.ico'/> : null}
                            </div>
                            <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{email.from}</p>
                            <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{email.title}</p>
                            <p style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 'calc(100% - 106px)'}}>{email.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='openmail' style={{overflowY: 'scroll', marginTop: '5px', gridRow: 2, gridColumn: 3, border: 'inset 3px', cursor: "url(/images/cursor/arrow.cur), auto", backgroundColor: 'white', padding: '10px'}}>
            <p>From: {open.from}</p>
            <h3>{open.title}</h3>
            <p>{open.text}</p>
            <hr/>
            {open.img !== false ? <img alt='blank' style={{maxHeight: '200px'}} src={`${open.img}`} /> : null}
        </div>
</div>
        <div className='bottombar' style={{display: 'grid', backgroundColor: 'lightgray', padding: '2px'}}>
            <p style={{border: 'inset 3px', margin: 0}}>{state.email.length} Items</p>  
        </div>
        </Rnd>
    )
}

export default Inbox;