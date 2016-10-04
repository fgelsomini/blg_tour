/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fItem_BLGPerson.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Excerpt':['BLGExcerptOWSTEXT'], 'ContentOwner':['BLGContentOwnerOWSUSER'], 'ContentAuthor':['BLGContentAuthorOWSUSER'], 'Date':['BLGPublicationDateOWSDATE'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':[], 'FileExtension':null, 'SecondaryFileExtension':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);

                        var linkURL = $getItemValue(ctx, "Link URL");
                        linkURL.overrideValueRenderer($urlHtmlEncode);
                        var iconURL = Srch.ContentBySearch.getIconSourceFromItem(ctx.CurrentItem);

                        var pubDate = $getItemValue(ctx, "Date");
                        var dateFormat = $resource("DateFormat");
                        var displayDate = BLG.Utils.prototype.getFormattedDate(pubDate.value);

                        var title = $getItemValue(ctx, "Title");
                        var excerpt = $getItemValue(ctx, "Excerpt");
                        var itemIndex = ctx.CurrentItemIdx;
                        var itemId = $getItemValue(ctx, "ListItemID");


                        var contentAuthor = $getItemValue(ctx, "ContentAuthor");
                        var contentOwner = $getItemValue(ctx, "ContentOwner");

                //generate random id for department placeholder
                var nameId = ctx.ClientControl.get_nextUniqueId();
                var titleId = ctx.ClientControl.get_nextUniqueId();
                var pictureId = ctx.ClientControl.get_nextUniqueId();

                var searchResults;
                var leaderResults;
                var user = contentAuthor.inputValue == "" ? contentOwner: contentAuthor;
                var pictureUrl = "/_layouts/15/images/BLG.Intranet.Branding/user-bg.png";

                searchResults = BLG.Search.Manager.prototype.getPeopleData(user.inputValue, null, function(){

                    //callback on search results complete
                    var resultJson = searchResults.m_value.ResultTables[0].ResultRows[0];
                    if(!IsNullOrUndefined(resultJson))
                    {
                        $("#" + nameId).html(resultJson.FirstName + " " + resultJson.LastName);

                        if ($("#" + titleId).html() == ""){
                            $("#" + titleId).html(resultJson.JobTitle);
                        }
                        pictureUrl = resultJson.PictureURL;

                        $("#" + pictureId).attr('src', pictureUrl)
                    }
                });

                leaderResults = BLG.Search.Manager.prototype.getLeadersData(user.inputValue, null, function(){
                    //callback on search results complete
                    var resultJson = leaderResults.m_value.ResultTables[0].ResultRows[0];
                    if(!IsNullOrUndefined(resultJson) && resultJson.owstaxIdBLGRole != null && resultJson.owstaxIdBLGRole != "")
                    {
                        var taxValue = resultJson.owstaxIdBLGRole.split('|')[3];
                        var roleTitle = taxValue.substring(0, taxValue.indexOf(';'));

                        $("#" + titleId).html(roleTitle);
                    }
                });


                        ms_outHtml.push(''
,''
,''
,''
,'        <li class="orbit-slide" style="height:200px;">'
,'            <div class="caption">'
,'                <div class="caption-left float-left"><img id="', pictureId ,'" alt="" src="', pictureUrl ,'" class="round-mask" /></div>'
,'                <div class="caption-right"><span style="font-weight:bold;" id="', nameId ,'"></span><br /><span id="', titleId ,'"></span><br />', displayDate ,'</div>'
,'            </div>'
,''
,'            <a href="', linkURL ,'" style="font-weight:bold;">', title ,'</a><br />'
,'            ', excerpt ,''
,'        </li>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLGPerson", DisplayTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fItem_BLGPerson.js", DisplayTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fItem_BLGPerson.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fItem_BLGPerson.js"), RegisterTemplate_0ac86a86a5eb48bbbfdfa0a4717a2a28);
}