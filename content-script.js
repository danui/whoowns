console.log("Start");
console.log(window.location.host);
if (window.location.host.endsWith("dbs.com.sg")) {
    alert("You are visiting DBS Singapore");
} else if (window.location.host.endsWith("dbs.com")) {
    alert("You are visiting the world's best bank DBS");
}
