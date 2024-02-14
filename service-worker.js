chrome.runtime.onMessage.addListener(data => {
    console.log(data);
    if (data.type === "notification") {
        chrome.notifications.create("", data.options, (notificationId) => {
            console.log("notificationId:", notificationId);
            console.log("Last error:", chrome.runtime.lastError);    
        });
    }
});
