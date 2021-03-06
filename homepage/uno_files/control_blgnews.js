/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_689ebf8895f847b0b1a72d537de6d2f6(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_689ebf8895f847b0b1a72d537de6d2f6.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNews.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
,''
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

                if (titleElement.length > 0){
                    //this is the web part title
                    var wpTitle = titleElement.context.innerText;
                    //hide the sp title chrome
                    $(MainWebPartSelector).parent().siblings().hide();
                }

            var moreText = $resource("More");
        ms_outHtml.push(''
,'        <div class="mini-container-a">'
,'            <div class="header">'
,'                <div class="header-left"> ', wpTitle ,'</div>'
,'            </div>'
,'            <div class="mini-container-border">'
,'                ', ctx.RenderGroups(ctx) ,''
,'                <div class="footer-more"><a href="/news"> ', moreText ,'</a></div>'
,'            </div>'
,'        </div>'
);
        if (ctx.ClientControl.get_shouldShowNoResultMessage())
        {
        ms_outHtml.push(''
,'        <div class="', noResultsClassName ,'">', $noResults ,'</div>'
);
        }
        ms_outHtml.push(''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_689ebf8895f847b0b1a72d537de6d2f6() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_BLGNews", DisplayTemplate_689ebf8895f847b0b1a72d537de6d2f6);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNews.js", DisplayTemplate_689ebf8895f847b0b1a72d537de6d2f6);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNews.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_689ebf8895f847b0b1a72d537de6d2f6();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNews.js"), RegisterTemplate_689ebf8895f847b0b1a72d537de6d2f6);
}