/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_c3f3856b61344de0a29df54705a457b9(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_c3f3856b61344de0a29df54705a457b9.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGSearchBox.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchBox'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
                var showQuerySuggestions = ctx.ClientControl.get_showQuerySuggestions();
                var showNavigation = ctx.ClientControl.get_showNavigation();

                var prompt = ctx.ClientControl.get_initialPrompt();
                if ($isNull(prompt))
                {
                    prompt = Srch.Res.sb_Prompt;
                }
                
                var squery = GetUrlKeyValue("k", false, location.href)
                if(squery != "" || window.location.href.indexOf("PhoneProfile") != -1){
                    var navNodes = ctx.ClientControl.get_navigationNodes();
                    
                    for (var i = 0; i < navNodes.length; ++i) {
                        nodeUrl = navNodes[i].url

                        if(window.location.href.indexOf(nodeUrl)  != -1 || 
                                (window.location.href.indexOf("PhoneProfile") != -1 && nodeUrl.indexOf("Phone") != -1)){

                            ctx.ClientControl.set_resultsPageAddress(nodeUrl);
                            prompt = navNodes[i].promptString;
                            break;
                        }
                    }   
                } 
               
                
                var searchBoxDivId = ctx.ClientControl.get_id() + "_sboxdiv";
                var searchBoxId = ctx.ClientControl.get_id() + "_sbox";
                var navButtonId = ctx.ClientControl.get_id() + "_NavButton";
                var suggestionsListId = ctx.ClientControl.get_id() + "_AutoCompList";
                var navListId = ctx.ClientControl.get_id() + "_NavDropdownList";
                var searchBoxLinkId = ctx.ClientControl.get_id() + "_SearchLink";
                var searchBoxProgressClass = "ms-srch-sbprogress";
                var searchBoxPromptClass = "ms-srch-sb-prompt ms-helperText";

                ctx.OnPostRender = function(rCtx) {
                    ctx.ClientControl.activate(
                        prompt,
                        searchBoxId,
                        searchBoxDivId,
                        navButtonId,
                        suggestionsListId,
                        navListId,
                        searchBoxLinkId,
                        searchBoxProgressClass,
                        searchBoxPromptClass);
                }

        ms_outHtml.push(''
,'        <div id="SearchBox" name="Control">'
,'            <div style="width:100%; position: relative" class="input-group" id="', $htmlEncode(searchBoxDivId) ,'">'
,'                <input type="text" value="', $htmlEncode(ctx.ClientControl.get_currentTerm()) ,'" maxlength="2048" class="input-group-field" accessKey="', $htmlEncode(Srch.Res.sb_AccessKey) ,'" title="', $htmlEncode(prompt) ,'" id="', $htmlEncode(searchBoxId) ,'" autocomplete="off" autocorrect="off" onkeypress="if (Srch.U.isEnterKey(String.fromCharCode(event.keyCode))) { $getClientControl(this).search(this.value);return Srch.U.cancelEvent(event); }" onkeydown="var ctl = $getClientControl(this);ctl.activateDefaultQuerySuggestionBehavior();" onfocus="var ctl = $getClientControl(this);ctl.hidePrompt();ctl.setBorder(true);" onblur="var ctl = $getClientControl(this);ctl.showPrompt();ctl.setBorder(false);" />'
,''
,'                <a title="', $htmlEncode(Srch.Res.sb_GoSearch) ,'" class="input-group-button search-button" style="width: 50px;" id="', $htmlEncode(searchBoxLinkId) ,'" onclick="$getClientControl(this).search($get(\'', $scriptEncode(searchBoxId) ,'\').value);" href="javascript: {}">'
,'                    <img style="max-width: none;" src="/_layouts/15/images/blg.intranet.branding/search/search.png" id="searchImg" alt="', $htmlEncode(Srch.Res.sb_GoSearch) ,'" />'
,'                </a>'
);
                        var imagesUrl = GetThemedImageUrl('searchresultui.png');
                        if (showNavigation) {
                            var navText = "Search for";
                            if (_spPageContextInfo.currentLanguage == 1036)
                                navText = "Chercher pour";

            ms_outHtml.push(''
,'                '
);
                        }

                        if (showQuerySuggestions) {
            ms_outHtml.push(''
,'                <div class="ms-qSuggest-container ms-shadow search-suggestion-pane" id="AutoCompContainer">'
,'                    <div id="', $htmlEncode(suggestionsListId) ,'"></div>'
,'                </div>'
);
                        }

                        if (showNavigation) {
            ms_outHtml.push(''
,'                <div class="ms-qSuggest-container ms-shadow search-navigation-pane" id="NavDropdownListContainer">'
,'                    <div id="', $htmlEncode(navListId) ,'"></div>'
,'                </div>'
);
                        }
            ms_outHtml.push(''
,''
,''
,''
,'            </div>'
);
                    if (ctx.ClientControl.get_showAdvancedLink()) {
                        var advancedUrl = ctx.ClientControl.get_advancedSearchPageAddress();
                        if(!$isEmptyString(advancedUrl)){
        ms_outHtml.push(''
,'            <div class="ms-srch-sb-link"><a id="AdvancedLink" href="', $urlHtmlEncode(advancedUrl) ,'">', $htmlEncode(Srch.Res.sb_AdvancedLink) ,'</a></div>'
);
                        }
                    }
                    if (ctx.ClientControl.get_showPreferencesLink()) {
                        var preferencesUrl = ctx.ScriptApplicationManager.get_preferencesUrl();
                        if(!$isEmptyString(preferencesUrl)){
        ms_outHtml.push(''
,'            <div class="ms-srch-sb-link"><a id="PreferencesLink" href="', $urlHtmlEncode(preferencesUrl) ,'">', $htmlEncode(Srch.Res.sb_PreferencesLink) ,'</a></div>'
);
                        }
                    }
        ms_outHtml.push(''
,'            </div>'
,'        '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_c3f3856b61344de0a29df54705a457b9() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_SearchBox_Compact", DisplayTemplate_c3f3856b61344de0a29df54705a457b9);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGSearchBox.js", DisplayTemplate_c3f3856b61344de0a29df54705a457b9);
}
//
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGSearchBox.js", "~sitecollection/_catalogs/masterpage/BLGPublishing/Display Templates/Search/Utils.js");
    //
}
RegisterTemplate_c3f3856b61344de0a29df54705a457b9();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGPublishing\u002fDisplay Templates\u002fSearch\u002fControl_BLGSearchBox.js"), RegisterTemplate_c3f3856b61344de0a29df54705a457b9);
}