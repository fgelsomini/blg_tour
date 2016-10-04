/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_4857e02d10fb4b60ade03ea749dcfb9b(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_4857e02d10fb4b60ade03ea749dcfb9b.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fControl_BLGPerson.js';
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

        var MainWebPartSelector = "#" + ctx.ClientControl.get_id();
        var titleElement = $($(MainWebPartSelector).parent().siblings().find("h2.ms-webpart-titleText span")[0]);

        if (titleElement.length > 0){
            //this is the web part title
            var wpTitle = titleElement.context.innerText;
            //hide the sp title chrome
            $(MainWebPartSelector).parent().siblings().hide();
        }

        ms_outHtml.push(''
,'        <div class="hero">'
,'            <div class="leaders-corner-container" style="height:300px;">'
,''
,'                <div class="title" style="font-size:16px; font-weight:bold;">', wpTitle ,'</div>'
,''
,'                <div class="content">'
,''
,'                    <div class="orbit" data-orbit="">'
,'                        <ul class="orbit-container">'
,'                            ', ctx.RenderGroups(ctx) ,''
,'                        </ul>'
,'                        <nav class="orbit-bullets">'
,''
,'                        </nav>'
,'                    </div>'
,'                </div>'
,''
,'            </div>'
,'        </div>'
,''
);
                    AddPostRenderCallback(ctx, function(){
                        // Add attribute 'data-orbit' to the main orbit container div,
                        // SharePoint Display Template throws error if we set an attribute without value... so have to do it with jQuery
                        $('.leaders-corner-container .orbit').attr('data-orbit', '');
                        $('.leaders-corner-container .orbit').attr('data-timer-delay', '20000');            

                        // Generate the Nav buttons
                        $('.leaders-corner-container .orbit ul.orbit-container li').each( function(index) {
                            $(this).parents('.orbit').find('nav.orbit-bullets').append('<button type="button" data-slide="' + index + '"><span class="show-for-sr">Slide ' + index + ' Details</span></button>')
                        });

                        // Add the "is-active" class to the first nav button element
                        $('.leaders-corner-container .orbit nav.orbit-bullets button').first().addClass("is-active");
                        $('.leaders-corner-container .orbit nav.orbit-bullets button').first().append('<span class="show-for-sr">Current Slide</span>');

                        // Reflow the component
                        $('.leaders-corner-container .orbit').foundation();
                    });
                ms_outHtml.push(''
,''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_4857e02d10fb4b60ade03ea749dcfb9b() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_BLGNews", DisplayTemplate_4857e02d10fb4b60ade03ea749dcfb9b);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fControl_BLGPerson.js", DisplayTemplate_4857e02d10fb4b60ade03ea749dcfb9b);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fControl_BLGPerson.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_4857e02d10fb4b60ade03ea749dcfb9b();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fControl_BLGPerson.js"), RegisterTemplate_4857e02d10fb4b60ade03ea749dcfb9b);
}