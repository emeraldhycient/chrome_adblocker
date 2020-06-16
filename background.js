//var blockedurl = [];
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {
            cancel: true
        }
    }, {
        urls: [
    "*://*.zedo.com/*",
    "*://*.epom.com/*",
    "*://*.Adzerk.com/*",
    "*://*.doubleclickbygoogle.com/*",
    "*://*.openX.com/*",
    "*://*.broadstreetads.com/*",
    "*://*.adcolt.com/*",
    "*://*.adbutler.com/*",
    "*://*.revive-adserver.com/*",
    "*://*.oiopublisher.com/*",
    "*://*.adgear.com/*",
    "*://*.aerserv.com/*",
    "*://*.smartadserver.com/*"
]
    },
    ["blocking"]
);


//blockedurl = ;
