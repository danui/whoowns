# wh👀wns

## How to install locally

It is possible to install an extension from your file system—so-called Unpacked Extensions.

Step 1 - Clone this repository.

Step 2 - Follow these instructions to load the extensions from your file system

* https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked

## How it works

The `manifest.json` file describes what goes into the extension. In this
particular case, the extension runs `content-script.js` in the context of the
loaded page. Thus we can access `window.location.host` and inspect that.
