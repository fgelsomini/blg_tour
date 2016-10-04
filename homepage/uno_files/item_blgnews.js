/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_abd39d9ae994437890766fcd3c29ea87(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_abd39d9ae994437890766fcd3c29ea87.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNews.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'NewsType':['owstaxIdBLGNewsType'], 'ContentOwner':['BLGContentOwnerOWSUSER'], 'Excerpt':['BLGExcerptOWSTEXT'], 'Date':['BLGPublicationDateOWSDATE'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'FileExtension':null, 'SecondaryFileExtension':null};
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
        var dateFormat = $resource("DateFormat");
        var displayDate = BLG.Utils.prototype.getFormattedDate(pubDate.value);
        var excerpt = $getItemValue(ctx, "Excerpt");
        var newsType = $getItemValue(ctx, "NewsType");

        ms_outHtml.push(''
,''
,'        <div class="item">'
,'            <div class="content">'
,'                <div class="title"><a href="', linkURL ,'">', title ,'</a></div>'
,'                <div class="body">'
,'                    ', excerpt ,''
,'                </div>'
,'            </div>'
,'            <div class="footer">'
,'                ', displayDate ,' | ', newsType ,''
,'            </div>'
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_abd39d9ae994437890766fcd3c29ea87() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLGNews", DisplayTemplate_abd39d9ae994437890766fcd3c29ea87);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNews.js", DisplayTemplate_abd39d9ae994437890766fcd3c29ea87);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNews.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_abd39d9ae994437890766fcd3c29ea87();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNews.js"), RegisterTemplate_abd39d9ae994437890766fcd3c29ea87);
}