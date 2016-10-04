$(document).ready(function () {

    UILocalization();
    ExpandRefiners();

});

function gotoSearch(name) {
    var qs = "";
    var v = $("input[name='alphaname']:checked").val();

    if (v == "lastname") {
        qs = "#k=lastname:" + name + "*";
    }
    else if (v == "firstname") {
        qs = "#k=firstname:" + name + "*";
    }
    document.location = window.location.href.split(/[?#]/)[0] + qs;
}

function UILocalization()
{
    var refineClearTextEn = "Clear Filters";
    var refineClearTextFr = "Filtres Claires";

    var refineClearText = refineClearTextEn;

    if (_spPageContextInfo.currentLanguage == 1036) {
        refineClearText = refineClearTextFr;
    }

    $("#refineClearLink a").text(refineClearText);

}
function ExpandRefiners() {
    var prefix = "refinementExpandCookieName_";
    var refiners = ['BLGMergedOffice', 'BLGProName', 'BLGPractName', 'BLGLawyerStatus'];
    var lang = 'En';

    if (_spPageContextInfo.currentLanguage == 1036) {
        lang = 'Fr';
    }

    for (var i = 0; i < refiners.length; i++) {
        var key1 = prefix + refiners[i] + lang;
        //$.cookie(key1, 'true', { expires: 1, path: '/phonebook/pages/' });
        var  expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        document.cookie = key1 + '=true; expires=' + expireDate.toUTCString();
    }
}

function ClearFilters()
{
    var hash = window.location.hash;

    if (hash == '')
    {
        return false;
    }

    hash = unescape(hash);
    var n1 = hash.indexOf('"k":');
    if(n1>0)
    {
        var n2 = hash.indexOf('","');
        var term = hash.substring(n1 + 5, n2);
        term = term.replace(/\\/g, '');
        window.location.href = window.location.pathname + '#k=' + escape(term);
    }

    return false;
}

function printContent(el)
{
    var restorepage = document.body.innerHTML;
    var printcontent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent;
    var printWindow = window.open('', '', 'scrollbars=1, height=900,width=800');
    printWindow.document.write('<html><head><title>Print Page</title>');
    printWindow.document.write('<script> $includeLanguageScript(this.url, "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js"); $includeScript(this.url, "~sitecollection/_layouts/15/BLG.Intranet.Branding.PhoneBook/js/PhoneBook-Search.js");EnsureScriptFunc("sp.ui.dialog.js", "SP.UI.ModalDialog.ShowPopupDialog", null);</script>');
    printWindow.document.write('<link href="/_layouts/15/BLG.Intranet.Branding/css/blg-intranet-publishing.css" rel="stylesheet" type="text/css" />');
    printWindow.document.write('</head><body >');
    printWindow.document.write('<div class="top-bar-right"><div><img src="/_layouts/15/images/BLG.Intranet.Branding/blg-intranet-logo.png" alt="BLG"/></div></div><br/><br/>');
    printWindow.document.write(printcontent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    document.body.innerHTML = restorepage;
}

