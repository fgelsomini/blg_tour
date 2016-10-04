/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_16f33e396ff74d6bb4487cc20ddfd25d(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_16f33e396ff74d6bb4487cc20ddfd25d.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fControl_BLGLinks.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
);

        AddPostRenderCallback(ctx, function () {
            //hide entire web part if no results and in display mode
            if (ctx.ListData.ResultTables[0].ResultRows.length == 0 && !Srch.U.isPageInEditMode()){
                $(MainWebPartSelector).parent().css("display","none");
            }
        });

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


        var MainWebPartSelector = "#" + ctx.ClientControl.get_id();
        var titleElement = $($(MainWebPartSelector).parent().siblings().find("h2.ms-webpart-titleText span")[0]);
        var titleLink = $($(MainWebPartSelector).parent().siblings().find("h2.ms-webpart-titleText a")[0]);
            
        var moreLink = "";
        if (titleLink.length > 0){ 
            moreLink = titleLink.attr("href");   
            
            //if the link goes to a pre-refined page     
            if (moreLink.indexOf('#Default=') > -1){
                moreLink = BLG.Utils.prototype.encodeRefinerUrl(moreLink);
            }
        } 

        if (titleElement.length > 0){
            //this is the web part title
            var wpTitle = titleElement.context.innerText;
            //hide the sp title chrome
            $(MainWebPartSelector).parent().siblings().hide();
        }

        var itemTemplateFile = ctx.ClientControl.get_itemTemplateId();
        var moreText = $resource("More");
        

        ms_outHtml.push(''
,'        <div class="document-container">'
,'            <div class="document-sidebar">'
,'                <div class="mini-container-a">'
,'                    <div class="header">'
,'                        <div class="header-left">', wpTitle ,'</div>'
,'                    </div>'
,'                    <div class="mini-container-border">'
,'                        <div class="item">'
,'                            <div class="content">'
,''
);
                                    //Check to see which item template is being used and render the correct html
                                    if (itemTemplateFile.indexOf("Item_BLGLinks_TextOnly.js") > -1)
                                    {
                                ms_outHtml.push(''
,'                                <div class="body">'
,'                                    <ul>'
,'                                        ', ctx.RenderGroups(ctx) ,''
,'                                    </ul>'
,'                                </div>'
);
                                    }
                                ms_outHtml.push(''
);
        //Check to see which item template is being used and render the correct html
        if (itemTemplateFile.indexOf("Item_BLGLinksAllContent.js") > -1)
        {
    ms_outHtml.push(''
,'                                <div class="body">'
,'                                    <ul>'
,'                                        ', ctx.RenderGroups(ctx) ,''
,'                                    </ul>'
,'                                </div>'
);
        }
    ms_outHtml.push(''
,''
);
                                    if (itemTemplateFile.indexOf("Item_BLGLinks_ImageText.js") > -1 || itemTemplateFile.indexOf("Item_BLGLinks_ImageOnly.js") > -1)
                                    {
                                ms_outHtml.push(''
,'                                <div class="body body row small-up-2 medium-up-2 large-up-2 clearfix">'
,'                                    ', ctx.RenderGroups(ctx) ,''
,''
,'                                </div>'
);
                                    }
                                ms_outHtml.push(''
,''
);
                                    if (moreLink != ""){
                                ms_outHtml.push(''
,'                                <div class="footer-more"><a href="', moreLink ,'"> ', moreText ,'</a></div>'
);
                                    }
                                ms_outHtml.push(''
,''
,'                            </div>'
,'                        </div>'
,'                    </div>'
,'                </div>'
,'            </div>'
,'        </div>'
,''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_16f33e396ff74d6bb4487cc20ddfd25d() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_BLGLinks", DisplayTemplate_16f33e396ff74d6bb4487cc20ddfd25d);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fControl_BLGLinks.js", DisplayTemplate_16f33e396ff74d6bb4487cc20ddfd25d);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fControl_BLGLinks.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_16f33e396ff74d6bb4487cc20ddfd25d();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fLinks\u002fControl_BLGLinks.js"), RegisterTemplate_16f33e396ff74d6bb4487cc20ddfd25d);
}