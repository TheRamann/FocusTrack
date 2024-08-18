# FocusTrack

Manage your study sessions with a countdown and stopwatch right in your terminal <br> <br>

# Installation <img src="https://cdn.discordapp.com/emojis/316264057659326464.png?v=1" alt="🖥" width="35px">
<b><a href="https://www.npmjs.com/package/focustrack"> npm: </a></b>
<p>
<code>npm i -g focustrack</code>
</p>
<p><b><a href="https://classic.yarnpkg.com/en/package/focustrack"> yarn: </a></b>
<code>yarn global add focustrack</code>
</p>
<p><b><a href="https://www.npmjs.com/package/focustrack"> npx: </a> (no installation required) <b>
<p>
<code>npx focustrack</code>
</p>

# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt="✏" width="35px">

`focustrack` is an easy-to-use CLI tool for managing your study time. <br>
Type `focustrack` and follow the prompts to start a countdown, use the stopwatch, or track your study sessions. <br>
```powershell
PS D:\Desktop> npx focustrack
npx: installed 228 in 23.908s

? Choose an action
  Start Countdown
  Start Stopwatch
> Exit
```
### Output
```powershell


                                                           ██████╗   ██████╗              ███████╗ ███████╗
                                                          ██╔═████╗ ██╔═████╗     ██╗     ██╔════╝ ╚════██║
                                                          ██║██╔██║ ██║██╔██║     ╚═╝     ███████╗     ██╔╝
                                                          ████╔╝██║ ████╔╝██║     ██╗     ╚════██║    ██╔╝
                                                          ╚██████╔╝ ╚██████╔╝     ╚═╝     ███████║    ██║
                                                           ╚═════╝   ╚═════╝              ╚══════╝    ╚═╝



Start Time: 1:47:08 am
End Time: 1:48:08 am

Total Time Studied: 6 minutes 56 seconds

  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⢛⣛⣛⣛⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢛⣡⣴⣾⣿⣿⣿⣿⣿⣿⣿⣶⣤⡙⠛⣉⣙⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠋⣡⡴⢂⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣦⡉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠏⣠⣾⣿⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢿⣿⣿⣶⣬⣙⠛⠛⠛⠛⠛⠛⠻⠿⣿⣿⣿
⣿⣿⣿⣿⠟⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠈⢻⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠹⣿
⣿⣿⠟⣡⣾⣿⣿⠿⠟⠰⢿⣿⡟⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣀⢼⣿⣿⣿⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢹
⡿⢡⣾⣿⠟⣉⣤⣶⣶⣶⣦⡙⢇⠀⢀⣿⣿⣿⢻⡿⠿⠿⢉⣿⣿⣿⡿⢻⠿⣿⠝⣠⡙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣼
⢡⣿⣿⣇⣾⣿⣿⣿⣿⣿⣿⣿⡌⡿⠟⣿⣿⣿⣶⣶⣿⣿⠿⣿⣿⣿⡿⠟⢋⣧⣾⣿⣿⣷⣬⣙⠻⠿⣿⣿⣿⣿⠿⠛⣡⣾⣿
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣿⣾⣿⡿⠿⠿⢋⣴⡄⢶⣦⣁⢠⡀⠺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣤⣶⣶⣿⣿⣿⣿
⣧⠙⢿⣿⣿⣿⣿⣿⣿⠿⠛⣡⡶⠆⠐⠲⠀⣶⣠⣿⣿⠇⣌⠻⢿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣦⣭⣭⣭⣭⣥⣴⣾⣿⢋⣴⡿⢿⡟⢸⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⡿⢁⣴⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⡇⢿⣇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡟⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣿⣶⣴⣄⠻⣿⣿⣿⣿⣿⠿⠟⠋⣫⣴⣌⣉⣡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⣙⡛⣛⣉⣴⣦⣌⠹⠿⠷⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿


```

# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>