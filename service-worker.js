function injectedFunction() {
    document.body.style.backgroundColor = "orange";
    console.log("Hello");
}

console.log(chrome);
// console.log(chrome.runtime.getUrl());
// console.log(window.location.host);

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target : {tabId : tab.id},
//         func : injectedFunction,
//     });
// });

console.log("Service Worker loaded");
