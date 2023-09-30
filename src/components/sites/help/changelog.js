import { useContext } from 'react';
import { LinkContext } from '../../systems/context';

const Changelog = () => {
    
    const [state, dispatch] = useContext(LinkContext);

    const clickLink = (link) => {
        dispatch({type: 'update_link', link: link})
    }

    return (
        <div id="//changelog" style={{width: '100%', backgroundColor: 'teal', paddingTop: '10px'}}>
            <div className='opener' style={{textAlign: 'center', filter: 'drop-shadow(0 0 3px black)'}}>
                <h1 style={{fontFamily: 'serif'}}>CHANGELOG:</h1>
                    <hr style={{width: '80%', height: '1px'}}/>
                <pre style={{fontFamily: 'serif', margin: '0 20px', textAlign: 'left', color: 'white', textWrap: 'balance'}}>
                    {preText}
                </pre>
            </div>
        </div>
    )
}

export default Changelog;

const preText = `
9/29/23
[
    --Version 1.2 [LIQUID_ELECTRUM]

Background Code: nightdawns
Thank you for actually checking the changelog!

+ Added MoeMoeJP (moe) and Liquid.Electrum (liquid, dnb, ufk, etc) radios and sites!!

+ Browser framework rework! Infinite browsers can now be open at once to improve navigation and use!

+ Site framework rework! Sites can now have internal links to different pages, rather than loading entirely new sites.

+ New sites! A total of 7 new sites were added, one of them hidden, but extremely valuable!

+ Search Engine! Visit http://arina.com/ on the in-site browser to use a in-site search engine and discover new or old sites easier! (hidden sites won't appear here)

+ Desktop backgrounds! There are 12 backgrounds to collect, set them in the My Computer app! Many are hidden, but will save once you unlock them.

+ Sound effects! A few processes will play some classic Windows95 sound effects.

+ Error popup! If there's any issues connecting to my server, or if something just goes wrong, it'll let you know!

>> Every Radio playlist and associated site has been updated!
Song Count:
    GeoMusic (Breakcore) 84 -> 98
    NightCity (Cyberpunk) 50 -> 81
    ChannelF (KB&R&EXO) -> 103 -> 112
    Neon_Sunrise (Future Funk) 137 -> 167
    Neon_Sunset (Citypop) 48 -> 104 (more than doubled, lol)
    + NEW: MoeMoeJP (Moe) 37
    + NEW: Liquid.Electrum (LDnB) 85

>> Improved Notepad and Taskbar! Notepad is no longer just a draggable window, and the Taskbar no longer looks awful and has some useful links and features!

>> Window priority: the window you click on will always appear on top when active, now, instead of having to move windows to view others.

>> Window smoothing: windows no longer snap to a grid when dragging or resizing, its completely free now.

>> Mail in your Inbox app now saves to localStorage. The amount of mail you can recieve and the discoverability for mailing lists has vastly increased.

>> Nav back/forwards buttons finally kinda work! They will actually navigate a site back now.

>> Fixes to navigation with buttons and links occasionally just not working on the first few clicks.

>> Brand new icon and theming for the Home page!

>> Various fixes to the radio UI, including the major issue of songnames being cutoff if they were too long (scrolling text), and proper loading text has been added.

>> A fucking insane amount of micro-polish that really ties the theme together fully. The actual desktop and browser and such are likely in the final design stage.

>> Several old sites have been updated to improve designs, theming, or to have new content!

- Removed several unusable Desktop apps, except for Recycle Bin cause it looks nice.

- Removed a single hidden site (no one was finding it anyways, it was wayyy too difficult).

- Removed a few older emails.

- Removed functionality for a few browser buttons. Some just didn't make sense or were not worth the effort to uphold with the new framework.

- Removed the ChannelF-Forums site. I wasn't very happy with it, and it used a completely seperate site to load. It will likely come back in the future.

FUTURE PLANS:
    More sites (of course).
    Greater interactivity within sites (more than just text or picture walls).
    User-submitted sites and radios (Project: 2023 contest coming).
    A bit more desktop functionality.
]

3/26/23
[
--Version 1.1! [NEON_SUNRISE]

+ Added NeonSunrise (Future Funk) and NeonSunset (CityPop) Radios!!

+ Added song preloading, to allow for seemless transitions between songs!

+ Added functionality and dropdowns to Window Buttons, WinPlay3 Window Buttons, Windows Start, and Window Tabs!

+ Added Inbox app with functionality, some sites will send you (in-app, not actual) emails!

+ Added Favorites. Bookmark your Favorite tabs to come back to!

+ Added 'Download Song' and 'Find Song (on youtube)' buttons to WinPlay3.

+ Added Help sites through the Help tab dropdown on browser.

+ Added several more sites, blogs, and hidden sites to explore!

>> Optimized site and radio load speed.

>> Optimized backend significantly, no longer crashes on failures.

>> Fixed issues with song title/artist not appearing, still working on album covers.

>> Fixed MANY design issues, especially on nightcity.net and the base site itself.

>> Fixed and changed A LOT of different text on sites, some was cringe/wrong.

>> Updated Icons for NEON_SUNRISE update!

>> New cursors!

- Removed a few pointless sites, and media that came along with it.

- No functionality to the Inbox buttons or tabs (yet?).
]

Heres some plans for next update patch (which should be soon):
[

Finish functionality for buttons and tabs

3ish more sites

More emails

Better Start Menu

Landing page on Internet Explorer (with a link hub and stuff)

Secret stuff hehe

]
`