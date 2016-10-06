/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_32b8482e9dcb4aeaa7361837ad643541(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_32b8482e9dcb4aeaa7361837ad643541.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fItem_BLGLinks_TextOnly.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'BLGLinkUrl':['BLGLinkUrlOWSURLH'], 'NavigationParam':['BLGLinkNavigateParamUrlOWSMTXT'], 'Date':['BLGPublicationDateOWSDATE'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'FileExtension':null, 'SecondaryFileExtension':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var linkURL = $getItemValue(ctx, "Link URL");
        linkURL.overrideValueRenderer($urlHtmlEncode);
        var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);

        var title = $getItemValue(ctx, "Title");
        var linkUrl = $getItemValue(ctx, "BLGLinkUrl");

        var linkTarget = "_self";
        if (linkUrl.value[0].value.indexOf("intranet") < 0){
            linkTarget = "_blank";
        }

        // Additional query string parameters
        var NavigationParam = $getItemValue(ctx, "NavigationParam");
        var queryString = "";
        if(NavigationParam.isNull == false && NavigationParam.isEmpty == false)
        {
            queryString = NavigationParam.value;
            linkUrl += BLG.Utils.prototype.processNavigationParams(queryString);
        }
        ms_outHtml.push(''
,''
,'        <li>'
,'            <a href="', linkUrl ,'" target="', linkTarget ,'">', title ,'</a>'
,'        </li>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_32b8482e9dcb4aeaa7361837ad643541() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLGLinks_TextOnly", DisplayTemplate_32b8482e9dcb4aeaa7361837ad643541);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fItem_BLGLinks_TextOnly.js", DisplayTemplate_32b8482e9dcb4aeaa7361837ad643541);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fItem_BLGLinks_TextOnly.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_32b8482e9dcb4aeaa7361837ad643541();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fItem_BLGLinks_TextOnly.js"), RegisterTemplate_32b8482e9dcb4aeaa7361837ad643541);
}