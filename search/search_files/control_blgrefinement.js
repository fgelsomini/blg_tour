/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_fa3ea01a577b4b26af7cd05a4a32202b(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_fa3ea01a577b4b26af7cd05a4a32202b.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGRefinement.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Refinement'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
        ctx.ClientControl.alternateRenderer = function(container, cntxt) {};
        ms_outHtml.push(''
,'        <div class="ms-ref-ctrl" id="Refinement" name="Control">'
,'            <ul class="accordion-filter" data-multi-expand="true" data-accordion="" data-refinement="">'
);
                if(!$isNull(ctx.ClientControl)){
                    var rcs = ctx.ClientControl.get_selectedRefinementControls();
                    if(!$isEmptyArray(rcs)){
                        for(var i = 0; i < rcs.length; i++){
                        var rc = rcs[i];
                        if(!$isNull(rc)){
                        rc.containerId = ctx.ClientControl.get_nextUniqueId();
                        var refinerCatTitle = Srch.Refinement.getRefinementTitle(rc);

                        //var title = $htmlEncode(rc.propertyName);
                        //if(rc.overrideDisplayName) {
                        //    title = $htmlEncode(rc.overrideDisplayName);
                        //}
                ms_outHtml.push(''
,'                <li class="accordion-item-filter" data-accordion-item="">'
,'                    <a class="accordion-title-filter accordion-header-filter" href="#" data-accordion-title="">', refinerCatTitle ,'</a>'
,'                    <div class="accordion-content-filter" data-tab-content="">'
,'                        <div id="', $htmlEncode(rc.containerId) ,'" name="Group" refinerName="', $htmlEncode(rc.propertyName) ,'"></div>'
,'                    </div>'
,'                </li>'
);
                        }
                    }
                }
                ms_outHtml.push(''
,'            </ul>'
,'            <div id="', ctx.ClientControl.get_emptyRefinementMessageId() ,'" class="ms-disabled ms-alignCenter ms-hide">'
);
                var emptyMessage = ctx.ClientControl.get_emptyMessage();
                if ($isEmptyString(emptyMessage))
                {
                ms_outHtml.push(''
,'                ', $htmlEncode(Srch.U.loadResource("rf_EmptyRefinement")) ,''
);
                }
                else
                {
                ms_outHtml.push(''
,'                ', $htmlEncode(emptyMessage) ,''
);
                }
                ms_outHtml.push(''
,'            </div>'
);
            }
            ms_outHtml.push(''
,'        </div>'
);
        ctx.OnPostRender = function() {
            var accordionEl = $("ul[data-refinement]");
            var accordion = new Foundation.Accordion(accordionEl, null);
        };
        ms_outHtml.push(''
,''
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_fa3ea01a577b4b26af7cd05a4a32202b() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Filter_Control_BLG_Refinement_Accordion", DisplayTemplate_fa3ea01a577b4b26af7cd05a4a32202b);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGRefinement.js", DisplayTemplate_fa3ea01a577b4b26af7cd05a4a32202b);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGRefinement.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
    //
}
RegisterTemplate_fa3ea01a577b4b26af7cd05a4a32202b();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGRefinement.js"), RegisterTemplate_fa3ea01a577b4b26af7cd05a4a32202b);
}