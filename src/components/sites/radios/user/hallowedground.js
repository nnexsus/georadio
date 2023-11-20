import MusicPlayer from "../../../musicplayer";


const HallowedGround = ({number}) => {
    return (
        <div style={{backgroundColor: '#d4c8c7', padding: '10px'}}>
            <div style={{border: '#191c30 solid 3px'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'black'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <img src="/images/user/hallowedgrounds/0cornerleft.gif" alt="decor" width={'100px'} height={'100px'} />
                        <img src="/images/user/hallowedgrounds/0cornerright.gif" alt="decor" width={'100px'} height={'100px'} />
                    </div>
                    <div style={{height: '100px', width: '100%', padding: '125px 0', backgroundImage: 'url(/images/user/hallowedgrounds/outerbanner.png', backgroundSize: '750px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 25px'}}>
                        <h1 style={{fontFamily: 'signature', fontSize: '100px', margin: 0, color: '#d4c8c7', fontWeight: 200, textAlign: 'center'}}>Hallowed Grounds</h1>
                    </div>
                    <MusicPlayer radionum={12} themeid={12} number={number}/>
                    <div>

                    </div>
                    <div style={{height: '100px', width: '100%', marginTop: '30px', backgroundImage: 'url(/images/user/hallowedgrounds/bottomborder.png', backgroundSize: '50%'}}></div>
                </div>
            </div>
        </div>
    )
}

export default HallowedGround;