/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_711b398d3ae44a31a7ce91789f365742(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_711b398d3ae44a31a7ce91789f365742.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fControl_BLGAlerts.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
);
        if (!$isNull(ctx.ClientControl) &&
            !$isNull(ctx.ClientControl.shouldRenderControl) &&
            !ctx.ClientControl.shouldRenderControl())
        {
            return "";
        }
        ctx.ListDataJSONGroupsKey = "ResultTables";
        var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

        var isRollupPageInDisplayMode = Srch.ContentBySearch.isRollupPage(ctx.ClientControl) && !Srch.U.isPageInEditMode();
        var noResultsClassName = isRollupPageInDisplayMode ? "ms-attractMode ms-uppercase ms-alignCenter" : "ms-srch-result-noResults";

        var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
        {
            var iStr = [];
            iStr.push('');
            iStr.push(itemRenderResult);
            iStr.push('');
            return iStr.join('');
        }
        ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
        ms_outHtml.push(''
,''
,'        <div class="row notice-container large-collapse">'
,'            <div class="large-12 columns">'
,'                ', ctx.RenderGroups(ctx) ,''
,'            </div>'
,'        </div>'
,''
);
                        AddPostRenderCallback(ctx, function(){
                            $(".notice-container button.close-button").each(function(){
                                $(this).click(function(){
                                    var endpoint = '/_vti_bin/BLG/UserAlertTracker.svc/AcknowledgeAlertForCurrentUser?spSiteUrl=' + _spPageContextInfo.siteAbsoluteUrl + '&spListUrl=Alerts+User+Tracking&spListItemId=' + $(this).attr("data-alertid");
                                    console.log(endpoint);
                                    $.ajax({
                                        method: "POST",
                                        url: endpoint,
                                        success: function (result) {
                                        }
                                    });
                                });
                            });
                        });
                    ms_outHtml.push(''
,''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_711b398d3ae44a31a7ce91789f365742() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_BLGAlerts", DisplayTemplate_711b398d3ae44a31a7ce91789f365742);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fControl_BLGAlerts.js", DisplayTemplate_711b398d3ae44a31a7ce91789f365742);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fControl_BLGAlerts.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_711b398d3ae44a31a7ce91789f365742();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fAlerts\u002fControl_BLGAlerts.js"), RegisterTemplate_711b398d3ae44a31a7ce91789f365742);
}