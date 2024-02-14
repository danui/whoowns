console.log("Start");
console.log(window.location.host);

function sendNotification(msg) {
    console.log("Sending message: " + msg);
    chrome.runtime.sendMessage("", {
        type: "notification",
        options: {
            title: "Wh👀wns",
            message: msg,
            iconUrl: "eyes.png",
            type: "basic"
        }
    });
    // alert(msg);
}


if (window.location.host.endsWith("dbs.com.sg")) {
    sendNotification("You are visiting DBS Singapore");
} else if (window.location.host.endsWith("dbs.com")) {
    sendNotification("You are visiting the world's best bank DBS");
}
