NRML Client 2.2.0 (STABLE)  -  Developed by Nermal

EN
A fast, clean Minecraft: Java Edition client for Fabric. Requires a licensed Minecraft account.
Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.

Getting started: run "NRML Client.exe", sign in with your Microsoft account, create or import a profile, press Play.
Tip: "NRML Optimization" installs performance mods and tuned Java flags. If the game crashes, use "Enable stable mode and retry".

Privacy: NRML Client has no telemetry and no account of its own. Your Microsoft login token is stored encrypted
with Windows (DPAPI) on your PC only. The client talks only to: Microsoft/Xbox/Minecraft (sign-in), Mojang (game files),
Modrinth (mods), Adoptium (Java), and mc-heads.net (your skin avatar). Discord Rich Presence is optional and hides your
profile name by default.

HU
Gyors, letisztult Minecraft: Java Edition kliens Fabrichoz. Licencelt Minecraft fiók szükséges.
Nem hivatalos Minecraft-termék, nincs kapcsolatban a Mojanggal vagy a Microsofttal.

Indulás: nyisd meg a "NRML Client.exe"-t, jelentkezz be Microsoft-fiókkal, hozz létre vagy importálj profilt, nyomj Playt.
Tipp: az "NRML Optimalizálás" teljesítmény-modokat és hangolt Java-flageket telepít. Összeomlás esetén használd a
"Stabil mód bekapcsolása és újrapróbálás" gombot.

Adatvédelem: az NRML Client nem küld telemetriát, és nincs saját fiókrendszere. A Microsoft bejelentkezési tokened
titkosítva (Windows DPAPI) csak a te gépeden van. A kliens csak ezekkel kommunikál: Microsoft/Xbox/Minecraft (belépés),
Mojang (játékfájlok), Modrinth (modok), Adoptium (Java), mc-heads.net (skin-avatar). A Discord Rich Presence opcionális,
és alapból nem mutatja a profilnevedet.

Changelog 2.0
- Security: all IPC calls validated, profile data sanitised, account token encrypted, DevTools disabled, strict CSP
- Fixed: Stable mode now really disables risky mods (ImmediatelyFast / MoreCulling / Dynamic FPS)
- Lower CPU/RAM use, tuned JVM flags, idle animations pause, more animations
- Renamed to NRML Client


CHANGELOG 2.0.1
- Mods/shaders/resource packs show real names, icons; click for details (description, credits, location, Modrinth)
- Click the version in a profile to change it (with warnings and optional world backup)
- Click memory to change it; shown in MB with GB beside it
- Optimize always sets Minecraft RAM to half of system RAM
- Faster game start: cached Java/Fabric checks, more parallel downloads, quick asset check
- Animations no longer disabled by the Windows 'animation effects off' setting
- FPS booster: while Minecraft runs it gets high CPU priority; the launcher drops to low priority and 10 FPS rendering

CHANGELOG 2.0.3
- Smoother animations: memory dialog counts up from 0 with a filling slider, memory/mods counters, staggered dialog content
- Taskbar identity: app ID set to NRML Client. To replace the Electron icon/name in the exe itself run Apply-Branding.bat (needs rcedit-x64.exe next to it)

CHANGELOG 2.0.4
- GPU stability: launcher UI is rendered on the CPU (no more GPU driver errors/freezes; more GPU left for Minecraft). Auto-recovery if the UI process crashes or hangs.

CHANGELOG 2.0.5
- Crash auto-fix: when a mod crashes with NoSuchMethodError/NoClassDefFoundError, the culprit mod is detected from the stack trace and disabled automatically
- Optimizer no longer installs More Culling (breaks with new Sodium builds)

CHANGELOG 2.0.6
- Top banner when mod updates are available (with Update mods button and crash tip)
- Optimizer installs More Culling again; crash auto-fix still disables a mod that breaks the game

CHANGELOG 2.1.0
- Main menu theme designer (button 'Menu theme' in a profile): gradient presets or your own image, blur, scroll speed, zoom, brightness, live animated preview
- Applied as resource pack 'NRML Menu Theme' + options.txt (menuBackgroundBlurriness, panoramaScrollSpeed). Turn off in the same dialog to remove it.

CHANGELOG 2.1.1
- Menu theme now also restyles ALL buttons (modern dark glass with accent colour), replaces the Minecraft logo with NRML, custom splash texts, accent colour picker

CHANGELOG 2.1.2
- Menu theme: rounded high-resolution glass buttons with animated shine on hover, smooth (filtered) modern NRML logo

CHANGELOG 2.1.3
- Fix: button textures showed as magenta/black (sprite size must match 200x20). Buttons are rounded again at the correct size; hover shine animation is now optional (experimental, off by default)

CHANGELOG 2.1.4
- Menu theme: six procedurally generated shader-style Minecraft scenes (sunset, dawn, night, mist, ocean, nether) with sun, god rays, blocky terrain, bloom
- Flat modern glass buttons, logo lower, Poppins font option (bundled font: Poppins Medium, SIL Open Font License), splash texts only 'Play Minecraft with NRML Client!' and 'Made by Nermal!'

CHANGELOG 2.1.5
- Menu theme: static 2D background (full-screen image, no movement), original Minecraft logo and original font are now the default (NRML logo / Poppins font are optional)

CHANGELOG 2.1.6
- Custom (Poppins) font now only on the menu buttons (Singleplayer, Multiplayer, Realms, Options, Quit, pause menu). Chat, scoreboards and server text keep the vanilla font (font uses private-use glyphs + translated button labels)

CHANGELOG 2.2.0
- Menu theme font reworked (additive glyph mapping + skip list) and self-healing: if the game crashes natively right after loading the theme, the launcher first strips the font, then the whole theme, so the next start works
