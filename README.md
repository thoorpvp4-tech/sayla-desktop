# Sayla for Windows and Mac

**Say it. It's planned.** Sayla is the voice-first planner: talk through everything on your mind and Sayla plans your day and your week.

## Download

- **Windows:** [Sayla-Setup.exe](https://github.com/thoorpvp4-tech/sayla-desktop/releases/latest/download/Sayla-Setup.exe)
- **Mac:** [Sayla.dmg](https://github.com/thoorpvp4-tech/sayla-desktop/releases/latest/download/Sayla.dmg)

Or use it in your browser at [getsayla.com](https://getsayla.com).

### First install

The installers are not code-signed yet, so your computer shows a warning the first time:

- **Windows:** "Windows protected your PC" → click **More info** → **Run anyway**.
- **Mac:** open the `.dmg`, drag Sayla to Applications and open it. If macOS says it can't verify the developer, go to **System Settings → Privacy & Security** and click **Open Anyway**.

Sayla updates itself: the program always opens the latest version of the app.

## For developers

```
npm install
npm start          # run it
npm run dist:win   # build Sayla-Setup.exe in dist/
```

A new version is built for Windows and Mac by GitHub Actions when a tag like `v1.0.1` is pushed.
