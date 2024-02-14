console.log("Start");
console.log(window.location.host);

function sendNotification(mapping) {
    chrome.runtime.sendMessage("", {
        type: "notification",
        options: {
            title: "Wh👀wns",
            message: mapping.message,
            iconUrl: mapping.logo,
            type: "basic"
        }
    });
    // alert(msg);
}

const mappings = [
    {
        domain: "dbs.com.sg",
        message: "You are visiting DBS Singapore",
        logo: "logos/dbs.png",
    },
    {
        domain: "dbs.com",
        message: "You are visiting DBS, the world's best bank",
        logo: "logos/dbs.png",
    },
    {
        domain: "posb.com.sg",
        message: "You are visiting POSB",
        logo: "logos/posb.png",
    },
    {
        domain: "sc.com",
        message: "You are visiting Standard Charted",
        logo: "logos/scb.jpeg",
    },
];

mappings.forEach((mapping) => {
    if (window.location.host.endsWith(mapping.domain)) {
        sendNotification(mapping);
    }
})
