if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstorex";
}
const extentions = ["kppcmdpolcfihnkfbngahdofkdnfbkan"]
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], true,)
}
alert(`Go Guardians ass has been unblasted`)
