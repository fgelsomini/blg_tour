/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_da783cfdaebb459c9610766ad5c413b0(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_da783cfdaebb459c9610766ad5c413b0.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNewsSlider.js';
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
,'        <div class="hero">'
,'            <div class="banner-container">'
,'                <div class="orbit" data-infinite-wrap="true" data-auto-play="true" data-pause-on-hover="true" data-timer-delay="5000">'
,'                    <ul class="orbit-container" tabindex="0" style="height: 300px;">'
,'                        ', ctx.RenderGroups(ctx) ,''
,'                    </ul>'
,'                    <nav class="orbit-bullets">'
,'                    </nav>'
,'                </div>'
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
);
            AddPostRenderCallback(ctx, function(){
                // Add attribute 'data-orbit' to the main orbit container div, 
                // SharePoint Display Template throws error if we set an attribute without value... so have to do it with jQuery
                $('.orbit').attr('data-orbit', '');
                $('.orbit').attr('data-timer-delay', '10000');     

                // Generate the Nav buttons
                $('.banner-container .orbit ul.orbit-container li').each( function(index) {
                    $(this).parents('.orbit').find('nav.orbit-bullets').append('<button type="button" data-slide="' + index + '"><span class="show-for-sr">Slide ' + index + ' Details</span></button>')
                });
                
                // Add the "is-active" class to the first nav button element
                $('.banner-container .orbit nav.orbit-bullets button').first().addClass("is-active");
                $('.banner-container .orbit nav.orbit-bullets button').first().append('<span class="show-for-sr">Current Slide</span>');

                // Reflow the component
                $('.banner-container .orbit').foundation();
            });
        ms_outHtml.push(''
,''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_da783cfdaebb459c9610766ad5c413b0() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_BLGNewsSlider", DisplayTemplate_da783cfdaebb459c9610766ad5c413b0);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNewsSlider.js", DisplayTemplate_da783cfdaebb459c9610766ad5c413b0);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNewsSlider.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_da783cfdaebb459c9610766ad5c413b0();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fNews\u002fControl_BLGNewsSlider.js"), RegisterTemplate_da783cfdaebb459c9610766ad5c413b0);
}