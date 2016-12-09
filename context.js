chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];
        console.log('Storage key "%s" in namespace "%s" changed. ' +
            'Old value was "%s", new value is "%s".',
            key,
            namespace,
            storageChange.oldValue,
            storageChange.newValue);
    }
});

function getword(info,tab) {
    chrome.storage.sync.get("preferences", function (items){
    });
    chrome.tabs.query({active: true}, function(tabs) {
        var tab = tabs[0];
        tab_title = tab.title;
        if(!isTimeSheetUrl(tab.url)){
            chrome.tabs.create({
                url: "https://pse.na32.visual.force.com/apex/PSATimecardEntry" ,
            });
            return;
        }
        chrome.tabs.executeScript(tab.id, {file: "autofill.js"});
        chrome.tabs.executeScript(tab.id, {
            code: "document.getElementById('combobox-1128-inputEl').value='1a'"
        }, function(){
            console.log(arguments);
        });
    });
}
function isTimeSheetUrl(url){
    return url.indexOf("https://pse.na32.visual.force.com/apex/PSATimecardEntry")>=0
}
chrome.contextMenus.create({
    title: "Fill Time Sheet!",
    contexts:["page"],
    onclick: getword,
});

