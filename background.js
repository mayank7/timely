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

function isTimeSheetUrl(url){
    return url.indexOf("https://pse.na32.visual.force.com/apex/PSATimecardEntry")>=0
}