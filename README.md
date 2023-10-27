michaelsoft binbows

10/27/23 [
    Design & various patches (ver 1.2.3).

```diff
MAJOR:
+ Fixed a bug that caused track IDs or name to display wrong.

+ Fixed a bug related to the track IDs that would cause the radio to have a chance to loop the 2nd song twice.

+ Fixed a bug where muting a radio when mutliple browsers had radio players loaded would cause the volume toggle button to only update on the first browser you opened.

MINOR:
+ Fixed an issue with the volume slider not adjusting its width and the volume it changed correctly when the browser width is very small.

+ Fixed an issue where the mobile was just a little too large, so you'd have to scroll a very annoying 15px on each side.

+ Fixed several design issues / improved designs for some minor things.
```
]

10/10/23 [
    Mobile use overhaul (ver 1.2.2).

```diff
+ Added a new mobile interface for devices, which should make using the site on small devices possible.

+ Fixed a backend issue that caused the hidden radio (Radio-8) to be stuck on the first song permenantly.

+ A few design and minor bug fixes.
```

I haven't redone the Channel-F forums site just yet, I may end up shifting towards something else with that.
]

10/1/23 [
    Hotfix 3 (ver 1.2.1).

```diff
MAJOR:
+ The bug that would cause a radio to get stuck and loop on a song has been fixed.

+ The bug that would jump backward song ID's - replaying a song just played - has been fixed.

+ The system for connecting to a radio has been changed to allow it on multiple browsers. -- Yes, that is correct. You can now connect to as many radios at once as you want. Please don't DDOS me LOL.

+ Clicking on a link will now only scroll to the top of the page on the active browser, not just the first one or all of them.

+ The Mute Site button on the taskbar (very bottom right) is now functional.

+ The bug that would disconnect you from the radio if you listened to the final song has been fixed.

+ The classname for the fake adspace on the casino site has been changed due to adblocker flags.

+ The LAST SONG: text actually shows the last song now.

+ The site content pack on a hidden site link is functional again.

+ The navigate back and foward buttons are now browser specific.

MINOR:
+ The bug that would round up the minute counter if seconds was over 50 has been fixed.

+ The bug that would prevent the header 0 from appearing in the song length has been fixed.

+ Various filebars that would stretch the entirety of its div have been scaled back down.

+ The WinPlay3 filebar options now appear on top of the content below it again.

+ Help sites (in the browser filebar) were not visible on github! They are now.
```
]


9/29/23
[
    --Version 1.2 [LIQUID_ELECTRUM]

Background Code: nightsdawn
Thank you for actually checking the changelog!

```diff
Added:

+ Added MoeMoeJP (moe) and Liquid.Electrum (liquid, dnb, ufk, etc) radios and sites!!

+ Browser framework rework! Infinite browsers can now be open at once to improve navigation and use!

+ Site framework rework! Sites can now have internal links to different pages, rather than loading entirely new sites.

+ New sites! A total of 7 new sites were added, one of them hidden, but extremely valuable!

+ Search Engine! Visit http://arina.com/ on the in-site browser to use a in-site search engine and discover new or old sites easier! (hidden sites won't appear here)

+ Desktop backgrounds! There are 12 backgrounds to collect, set them in the My Computer app! Many are hidden, but will save once you unlock them.

+ Sound effects! A few processes will play some classic Windows95 sound effects.

+ Error popup! If there's any issues connecting to my server, or if something just goes wrong, it'll let you know!

Changed:
+ Every Radio playlist and associated site has been updated!
Song Count:
    GeoMusic (Breakcore) 84 -> 98
    NightCity (Cyberpunk) 50 -> 81
    ChannelF (KB&R&EXO) -> 103 -> 112
    Neon_Sunrise (Future Funk) 137 -> 167
    Neon_Sunset (Citypop) 48 -> 104 (more than doubled, lol)
    + NEW: MoeMoeJP (Moe) 37
    + NEW: Liquid.Electrum (LDnB) 85

+ Improved Notepad and Taskbar! Notepad is no longer just a draggable window, and the Taskbar no longer looks awful and has some useful links and features!

+ Window priority: the window you click on will always appear on top when active, now, instead of having to move windows to view others.

+ Window smoothing: windows no longer snap to a grid when dragging or resizing, its completely free now.

+ Mail in your Inbox app now saves to localStorage. The amount of mail you can recieve and the discoverability for mailing lists has vastly increased.

+ Nav back/forwards buttons finally kinda work! They will actually navigate a site back now.

+ Fixes to navigation with buttons and links occasionally just not working on the first few clicks.

+ Brand new icon and theming for the Home page!

+ Various fixes to the radio UI, including the major issue of songnames being cutoff if they were too long (scrolling text), and proper loading text has been added.

+ A fucking insane amount of micro-polish that really ties the theme together fully. The actual desktop and browser and such are likely in the final design stage.

+ Several old sites have been updated to improve designs, theming, or to have new content!

+ Fixed the issue with the visit site tracker not setting the cookie on my site (nnexsus.net), making the visited panels panel impossible.

Removed:
- Removed several unusable Desktop apps, except for Recycle Bin cause it looks nice.

- Removed a single hidden site (no one was finding it anyways, it was wayyy too difficult).

- Removed a few older emails.

- Removed functionality for a few browser buttons. Some just didn't make sense or were not worth the effort to uphold with the new framework.

- Removed the ChannelF-Forums site. I wasn't very happy with it, and it used a completely seperate site to load. It will likely come back in the future.
```


FUTURE PLANS:
```ini
    [More sites (of course).]
    [Greater interactivity within sites (more than just text or picture walls).]
    [User-submitted sites and radios (Project: 2023 contest coming).]
    [A bit more desktop functionality.]
```
]


3/26/23 [
--Version 1.1! [NEON_SUNRISE]

```diff
Added:

+ Added NeonSunrise (Future Funk) and NeonSunset (CityPop) Radios!!

+ Added song preloading, to allow for seemless transitions between songs!

+ Added functionality and dropdowns to Window Buttons, WinPlay3 Window Buttons, Windows Start, and Window Tabs!

+ Added Inbox app with functionality, some sites will send you (in-app, not actual) emails!

+ Added Favorites. Bookmark your Favorite tabs to come back to!

+ Added 'Download Song' and 'Find Song (on youtube)' buttons to WinPlay3.

+ Added Help sites through the Help tab dropdown on browser.

+ Added several more sites, blogs, and hidden sites to explore!

Changed:

+ Optimized site and radio load speed.

+ Optimized backend significantly, no longer crashes on failures.

+ Fixed issues with song title/artist not appearing, still working on album covers.

+ Fixed MANY design issues, especially on nightcity.net and the base site itself.

+ Fixed and changed A LOT of different text on sites, some was cringe/wrong.

+ Updated Icons for NEON_SUNRISE update!

+ New cursors!

Removed:

- Removed a few pointless sites, and media that came along with it.

- No functionality to the Inbox buttons or tabs (yet?).
```

Heres some plans for next update patch (which should be soon) 
```ini
[Finish functionality for buttons and tabs]
[3ish more sites]
[More emails]
[Better Start Menu]
[Landing page on Internet Explorer (with a link hub and stuff)]
[Secret stuff hehe]
```

]
