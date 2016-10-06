/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_6b24507e7088434cbd03da065b162f81(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_6b24507e7088434cbd03da065b162f81.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNewsSlider.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Excerpt':['BLGExcerptOWSTEXT'], 'Image':['BLGLinkImageOWSURLH', 'PublishingImage'], 'Date':['BLGPublicationDateOWSDATE'], 'Link URL':['Path'], 'Title':['Title'], 'FileExtension':null, 'SecondaryFileExtension':null};
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
        var image = $getItemValue(ctx, "Image");
        var imgSrc = image.value;

        if(image.isNull)
            imgSrc = "/_layouts/15/images/BLG.Intranet.Branding/news-bg.jpg";
        else if (imgSrc.indexOf("src=") > -1)
        {
            imgSrc = imgSrc.substring(imgSrc.indexOf("src=") + 5);
            imgSrc = imgSrc.substring(0, imgSrc.indexOf('"'));
        }

        ms_outHtml.push(''
,''
,'        <li class="orbit-slide" style="max-height: 300px;">'
,'            <img class="orbit-image" src="', imgSrc ,'" alt="', title ,'" />'
,'            <figcaption class="orbit-caption">'
,'                <a href="', linkURL ,'" style="color:#fff;">'
,'                    <h5>', title ,'</h5></a>'
,'</figcaption>'
,'        </li>'
,''
);

        ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_6b24507e7088434cbd03da065b162f81() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLGNews", DisplayTemplate_6b24507e7088434cbd03da065b162f81);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNewsSlider.js", DisplayTemplate_6b24507e7088434cbd03da065b162f81);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNewsSlider.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_6b24507e7088434cbd03da065b162f81();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fItem_BLGNewsSlider.js"), RegisterTemplate_6b24507e7088434cbd03da065b162f81);
}