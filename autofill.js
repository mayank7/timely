$(document).ready(function () {
    setTimeout(function () {
        //document.getElementById('combobox-1120-inputEl').value = 'McKinsey & Company - US - NY : MSO - Promice - 16-17-Bangalore-2016-05-01(A-0079405)';
        $("[data-recordindex='0'] tr td[data-columnid*='projectassignment'] div[id*='trigger-foo']").click();
        setTimeout(function () {
            //$("div[data-ffid='searchProjectAsnText'] input").value = "McKinsey & Company - US - NY : MSO - Promice - 16-17-Bangalore-2016-05-01(A-0079405)";
            //$(".f-btn.timecard-lookup-button-viewall-ff").click();
            setTimeout(function () {
                $('a[id*=ext-element]').click();

            }, 5000);
            //setTimeout(function () {
            $('a[id*=ext-element]').click();

            //}, 2000);
            $('a[id*=ext-element]').click();
        }, 4000);
    }, 4000);

});
