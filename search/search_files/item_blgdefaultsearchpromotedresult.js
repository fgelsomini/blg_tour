/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_434fb273e2ce4801a324c52152f44d56(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_434fb273e2ce4801a324c52152f44d56.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fItem_BLGDefaultSearchPromotedResult.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'owstaxidBLGContentArea':['owstaxidBLGContentArea'], 'BLGContentOwnerOWSUSER':['BLGContentOwnerOWSUSER'], 'BLGPublicationDateOWSDATE':['BLGPublicationDateOWSDATE']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
            var id = ctx.ClientControl.get_nextUniqueId();
            var itemId = id + Srch.U.Ids.item;
            $setResultItem(itemId, ctx.CurrentItem);
            var path = ctx.CurrentItem.Path;
            var title = $htmlEncode(ctx.CurrentItem.Title);
            var hitHighlightedSummary = ctx.CurrentItem.HitHighlightedSummary;
            var icon = BLG.Search.TemplateUtils.prototype.getDefaultIcon();
            var contentArea = BLG.Search.TemplateUtils.prototype.getTaxonomyLabel(ctx.CurrentItem.owstaxidBLGContentArea);
            var pubDate = $getItemValue(ctx, "BLGPublicationDateOWSDATE");
            var dateFormat = $resource("DateFormat");
            var displayDate = pubDate.value.localeFormat(dateFormat);
            var contentOwner = ctx.CurrentItem.BLGContentOwnerOWSUSER;
            if(contentOwner) {
                //generate random id for department placeholder
                var departmentId = ctx.ClientControl.get_nextUniqueId();

                var searchResults;
                searchResults = BLG.Search.Manager.prototype.getPeopleData(contentOwner, null, function(){
                    //callback on search results complete
                    var resultJson = searchResults.m_value.ResultTables[0].ResultRows[0];
                    var dept = resultJson.Department;
                    var currentCulture = BLG.Utils.prototype.getCookie("BlgContextLanguageCookie");

                    if(dept == null)
                    {
                        dept = currentCulture == "en-US" ? resultJson.BLGProNameEn : resultJson.BLGProNameFr;
                    }

                    if(dept == null)
                    {
                        dept = currentCulture == "en-US" ? resultJson.BLGServNameEn : resultJson.BLGServNameFr;
                    }
            
                    $("#" + departmentId).html(dept);
                });
            }
        ms_outHtml.push(''
,''
,'        <div id="', $htmlEncode(itemId) ,'" class="mini-container-b promoted-result">'
,'            <div class="content row">'
,'                <div class="large-12 columns">'
,'                    <div class="image-container large-3 columns float-left">'
,'                        <a href="',path,'">'
,'                            <img class="round-mask" src="',icon,'" alt="" />'
,'                        </a>'
,'                    </div>'
,'                    <div class="title large-9 columns"><a href="',path,'">',title,'</a></div>'
,'                    <div class="body large-9 columns">'
,'                        ',hitHighlightedSummary,''
,'                    </div>'
,'                    <div class="date large-12 columns">'
,'                      <div class="large-3 columns"></div>'
,'                      <div class="large-9 columns"><span>',contentArea,'</span> | <span id="',departmentId,'"></span> | <span>',displayDate,'</span></div>'
,'                    </div>'
,'                </div>'
,'            </div>'
,'        </div>'
);
                }
        ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_434fb273e2ce4801a324c52152f44d56() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("SearchResults_Item_BLG_Promoted_Default", DisplayTemplate_434fb273e2ce4801a324c52152f44d56);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fItem_BLGDefaultSearchPromotedResult.js", DisplayTemplate_434fb273e2ce4801a324c52152f44d56);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fItem_BLGDefaultSearchPromotedResult.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fItem_BLGDefaultSearchPromotedResult.js", "~sitecollection/_catalogs/masterpage/BLGPublishing/Display Templates/Search/Utils.js");
    //
}
RegisterTemplate_434fb273e2ce4801a324c52152f44d56();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fItem_BLGDefaultSearchPromotedResult.js"), RegisterTemplate_434fb273e2ce4801a324c52152f44d56);
}