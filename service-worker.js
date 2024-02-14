chrome.runtime.onMessage.addListener(data => {
    console.log(data);
    if (data.type === "notification") {
        console.log("Creating notification");
        chrome.notifications.create("", data.options, (notificationId) => {
            console.log("notificationId:", notificationId);
            console.log("Last error:", chrome.runtime.lastError);    
        });
        console.log("CHECKPOINT-188")
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        }
    }
});
