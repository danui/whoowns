function injectedFunction() {
    // let firstChild = document.body.firstChild;
    // let newElm = document.createElement("div");
    // newElm.textContent = "Host: " + window.location.host;
    // document.body.insertBefore(newElm, firstChild);
    // console.log("Hello");
    // console.log(window.location.host);
    alert("Host: " + window.location.host);
}

console.log("Function defined");

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
    } else {
        console.log(tabs);
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: injectedFunction,
        });
    }
});

console.log("Who Owns loaded loaded");
