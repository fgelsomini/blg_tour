/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_58b0edd7141c4e1daeee245e64c1c897(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_58b0edd7141c4e1daeee245e64c1c897.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fItem_BLGAlerts.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Excerpt':['BLGExcerptOWSTEXT'], 'AlertLevel':['owstaxIdBLGAlertLevel'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'FileExtension':null, 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var encodedId = $htmlEncode(ctx.ClientControl.get_nextUniqueId() + "_2lines_");

        var linkURL = $getItemValue(ctx, "Link URL");
        linkURL.overrideValueRenderer($urlHtmlEncode);
        var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);
        var title = $getItemValue(ctx, "Title");
        var pubDate = $getItemValue(ctx, "Date");
        var excerpt = $getItemValue(ctx, "Excerpt");
        var itemId = $getItemValue(ctx, "ListItemID");
        var alertLevel = $getItemValue(ctx, "AlertLevel");

        var alertClass = "";
        var alertColor = "";
        var showAlert = false;

        var ctId = $getItemValue(ctx, "ContentTypeId");
        if (ctId.value.indexOf("0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF390102") >= 0 )
        {
            showAlert = true;
        }

        if (alertLevel){
            if (alertLevel == "High" || alertLevel == "Urgent") {
                alertClass = "alert";
                alertColor = "white";
            } else if (alertLevel == "Low" || alertLevel == "Normal"){
                alertClass = "warning";
                alertColor = "black";
                if (_spPageContextInfo.serverRequestPath.toLowerCase() != "/pages/default.aspx")
                    showAlert = false;
            }
        }

        $.ajax({
            url: '/_vti_bin/BLG/UserAlertTracker.svc/IsAlertAcknowledgedForCurrentUser?spSiteUrl=' + _spPageContextInfo.siteAbsoluteUrl + '&spListUrl=Alerts+User+Tracking&spListItemId=' + itemId,
            async: false,
            cache: false,
            success: function(result){
                if (!result && showAlert)
                {
                ms_outHtml.push(''
,''
,'                    <div class="callout ', alertClass ,'" data-closable="">'
,'                        <div class="callout-icon">'
,'                            <img src="/_layouts/15/Images/BLG.Intranet.Branding/alert-icon-', alertColor ,'.png" />'
,'                        </div>'
,'                        <div class="callout-left">'
,'                            <a href="', linkURL ,'" style="color:', alertColor ,'">', excerpt ,'</a>'
,'                        </div>'
,''
,'                        <div class="callout-right">'
,'                            <button class="close-button" aria-label="Dismiss alert" type="button" data-close="" data-alertid="', itemId ,'">'
,'                                <span style="color:', alertColor ,'" aria-hidden="true">&#215;</span>'
,'                            </button>'
,'                        </div>'
,'                    </div>'
);
                }
            }
        });

        ms_outHtml.push(''
,''
,''
,''
,''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_58b0edd7141c4e1daeee245e64c1c897() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLGAlerts", DisplayTemplate_58b0edd7141c4e1daeee245e64c1c897);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fItem_BLGAlerts.js", DisplayTemplate_58b0edd7141c4e1daeee245e64c1c897);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fItem_BLGAlerts.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_58b0edd7141c4e1daeee245e64c1c897();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fItem_BLGAlerts.js"), RegisterTemplate_58b0edd7141c4e1daeee245e64c1c897);
}