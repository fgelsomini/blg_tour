/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_153e014e23994f4295ad70d2c8d13d5b(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_153e014e23994f4295ad70d2c8d13d5b.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fEvents\u002fItem_BLGEvents.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'EventStartDate':['BLGStartDate'], 'EventType':['owstaxIdBLGEventType'], 'ContentOwner':['BLGContentOwnerOWSUSER'], 'ImageUrl':['BLGLinkImage', 'PublishingImage', 'PictureURL', 'PictureThumbnailURL'], 'Link URL':['Path'], 'Line 1':['Title'], 'Line 2':['Description'], 'Line 3':[], 'SecondaryFileExtension':null, 'ContentTypeId':null};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var linkURL = $getItemValue(ctx, "Link URL");
        linkURL.overrideValueRenderer($urlHtmlEncode);

        var pictureURL = $getItemValue(ctx, "ImageUrl");
        var imgSrc = pictureURL;
        var noImg = false;

        if(pictureURL.isNull || pictureURL.isEmpty == true)
        {
            imgSrc = "/_layouts/15/images/BLG.Intranet.Branding/events-bg.png";
            noImg = true;
        }

        var title = $getItemValue(ctx, "Title");

        var eventDate = $getItemValue(ctx, "EventStartDate");
        var shortMonth = BLG.Utils.prototype.getShortMonth(eventDate.value);
        var day = eventDate.value.format('dd');

        var eventType = $getItemValue(ctx, "EventType");

        //***Content Owner Dept
        var contentOwner = $getItemValue(ctx, "ContentOwner");

        //generate random id for department placeholder
        var departmentId = ctx.ClientControl.get_nextUniqueId();

        var searchResults;
        searchResults = BLG.Search.Manager.prototype.getPeopleData(contentOwner.inputValue, null, function(){

            //callback on search results complete
            var resultJson = searchResults.m_value.ResultTables[0].ResultRows[0];
            var currentCulture = BLG.Utils.prototype.getCookie("BlgContextLanguageCookie");
            
            var dept = resultJson.Department;

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
        //***


        if (noImg == true)
        {
         ms_outHtml.push(''
,'            <div class="item">'
,'                <div class="content">'
,'                    <div class="image-container">'
,'                        <img alt="Test" src="', imgSrc ,'" />'
,'                        <figcaption><div class="month">', shortMonth ,'</div><div class="stat">', day ,'</div></figcaption>'
,'                        <div class="event-noimg-content">'
,'                            <div class="title">'
,'                                <a href="', linkURL ,'">', title ,'</a>'
,'                            </div>'
,'                            <div class="footer">'
,'                                <span>', eventType ,'</span>'
,'                                |'
,'                                <span id="', departmentId ,'"></span>'
,'                            </div>'
,'                        </div>'
,'                    </div>'
,'                </div>'
,'            </div>'
);
        }
        else
        {
        ms_outHtml.push(''
,''
,'            <div class="item">'
,'                <div class="content">'
,'                    <div class="image-container">'
,'                        <img alt="Test" src="', imgSrc ,'" />'
,'                        <figcaption><div class="month">', shortMonth ,'</div><div class="stat">', day ,'</div></figcaption>'
,'                    </div>'
,'                </div>'
,'                <div class="title"><a href="', linkURL ,'">', title ,'</a></div>'
,'                <div class="footer">'
,'                    <span>', eventType ,'</span>'
,'                    |'
,'                    <span id="', departmentId ,'"></span>'
,'                </div>'
,'            </div>'
);
        }
        ms_outHtml.push(''
,''
,''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_153e014e23994f4295ad70d2c8d13d5b() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_BLGEvents", DisplayTemplate_153e014e23994f4295ad70d2c8d13d5b);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fEvents\u002fItem_BLGEvents.js", DisplayTemplate_153e014e23994f4295ad70d2c8d13d5b);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fEvents\u002fItem_BLGEvents.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_153e014e23994f4295ad70d2c8d13d5b();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fEvents\u002fItem_BLGEvents.js"), RegisterTemplate_153e014e23994f4295ad70d2c8d13d5b);
}