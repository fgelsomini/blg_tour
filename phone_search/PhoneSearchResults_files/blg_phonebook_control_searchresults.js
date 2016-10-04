/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_5915c3a8051e46a68acbe6e407a87578(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_5915c3a8051e46a68acbe6e407a87578.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);

            var strResults = $resource("results");
            var strMore = $resource("More");
            var strSort = $resource("SortBy");
            var strPrint = $resource("Print");
            var strLang = $resource("Lang");

        ms_outHtml.push(''
,'        '
);
                if (Srch.U.shouldAnimate(ctx.DataProvider)){
                    Srch.U.hideElement(ctx.ClientControl.get_element());
                    ctx.OnPostRender = function(){ Srch.U.animateResults(ctx.ClientControl, ctx.DataProvider.get_userAction()); };
                }
        ms_outHtml.push(''
,'        <div id="Result" name="Control" class="row small-uncollapse large-collapse">'
,'            <div class="row small-uncollapse large-collapse search-meta-container">'
,''
);
                            if(ctx.ClientControl.get_showResultCount() && ctx.DataProvider.get_totalRows() > 0){
                                var start = ctx.DataProvider.get_currentQueryState().s;
                                var resultsPerPage = ctx.DataProvider.get_resultsPerPage();
                                var totalRows = ctx.DataProvider.get_totalRows();
                                var countDisplayString = Srch.Res.rs_ApproximateResultCount;
                                if (start + resultsPerPage > totalRows) { countDisplayString = (totalRows == 1)? Srch.Res.rs_SingleResultCount : Srch.Res.rs_ResultCount; }
        ms_outHtml.push(''
,'   '
);
                            }
        ms_outHtml.push(''
);

        var showSortOptions = ctx.ClientControl.get_showSortOptions() && !$isEmptyArray(ctx.DataProvider.get_availableSorts());
        if(showSortOptions){
            var resultHeaderClassNoEncode = "ms-metadata";
            var availableSorts = ctx.DataProvider.get_availableSorts();

               ms_outHtml.push(''
,''
,'                <div id="ResultHeader" class="large-3 columns">'
,'                    <ul id="actions" class="dropdown menu menu-sort" role="menubar" data-dropdown-menu="m8dfh0-dropdown-menu">'
,'                        <li class="is-dropdown-submenu-parent opens-right" role="menuitem" aria-expanded="false" aria-haspopup="true" aria-label="Sort" data-is-click="false" onmouseover="$(\'#SortBySel\').show()" onmouseout="$(\'#SortBySel\').hide();">'
,'                            <a tabindex="0" href="#" style="text-decoration:none">', strSort ,'</a>'
,'                            <ul id="SortBySel" title="', $htmlEncode(Srch.Res.rs_SortDescription) ,'" class="menu is-dropdown-submenu-parent is-dropdown-submenu-parent first-sub vertical submenu is-dropdown-submenu" role="menu" aria-hidden="true" data-submenu="">'
);
                                    for (var i = 0; i < availableSorts.length; i++) {
                                    var cplxsort = availableSorts[i];
                                    if(!$isNull(cplxsort)){
                                        var strSort = cplxsort.name;
                                        if(strLang == "fr")
                                        {
                                            if(cplxsort.name == "Last Name (A-Z)")
                                                {strSort = "Nom (A-Z)";}
                                            else if(cplxsort.name == "Last Name (Z-A)")
                                                {strSort = "Nom (Z-A)";}
                                            else if(cplxsort.name == "First Name (A-Z)")
                                                {strSort = "Prénom (A-Z)";}
                                            else if(cplxsort.name == "First Name (Z-A)")
                                                {strSort = "Prénom (Z-A)";}
                                        }

        ms_outHtml.push(''
,'                                <li value="', $htmlEncode(cplxsort.name) ,'" class="is-submenu-item is-dropdown-submenu-item" role="menuitem">'
,'                                    <a href="#" title="', $htmlEncode(strSort) ,'" onclick="$getClientControl(this).sortOrRank(\'', $htmlEncode(strSort) ,'\');return false" style="color:#0a0a0a;background-color:white">'
,'                                        ', $htmlEncode(strSort) ,''
,'                                    </a>'
,'                                </li>'
,''
);
                                                }
                                            }
        ms_outHtml.push(''
,'                            </ul>                                '
,'</li>'
,'                    </ul>'
,'                </div>'
);  }

        ms_outHtml.push(''
,'                <div id="ResultCount" class="large-7 columns">'
,'                  <label class="middle text-right">', totalRows ,' ', strResults ,'</label>'
,'                </div>'
,'                <div class="large-2 columns">'
,'                    <label class="middle text-center" onclick="if (! /chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){printContent(&quot;DeltaPlaceHolderMain&quot;)}else{printContent(&quot;Groups&quot;)}">', strPrint ,'</label>'
,'                </div>'
,'            </div>'
,'            <br />'
);
                        var arwImageUrl = GetThemedImageUrl('ecbarw.png');

                        function getDropDownArrowHtml(alttext) {
                            return String.format('<img src="{0}" class="ms-core-menu-arrow" alt="{1}"/>',
                                $urlHtmlEncode(arwImageUrl),
                                $htmlEncode(alttext)
                            );
                        }

                        function getDropdownMenu(linkId, linkText, linkTitle, funcName) {
                            var cssLink = "color: inherit; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; word-wrap: normal; display:inline-block; max-width: 250px; vertical-align: top; text-decoration: none";
                            var cssSpan = "unicode-bidi:embed; display:inline-block;"
                            return String.format('<span id="{0}" class="ms-core-menu-button ms-core-menu-item" title="{2}" onclick="$getClientControl(this).{4}(this); return Srch.U.cancelEvent(event);" style="{5}"><a class="ms-core-menu-root" style="{6}">{1}</a>{3}</span>',
                                                linkId,
                                                $htmlEncode(linkText),
                                                $htmlEncode(linkTitle),
                                                getDropDownArrowHtml(linkTitle),
                                                funcName,
                                                cssSpan,
                                                cssLink);
                        }

                        function shouldRenderNewUI() {
                            return     ctx.ScriptApplicationManager.getNavigationNodes && typeof ctx.ScriptApplicationManager.getNavigationNodes === "function"
                                    && ctx.DataProvider.get_effectiveLanguageDisplayName && typeof ctx.DataProvider.get_effectiveLanguageDisplayName === "function"
                                    && typeof(Srch.Res.rs_PreferredSearchLanguage) === "string"
                                    && typeof(Srch.Res.rs_SearchScope) === "string";
                        }

                        if(!$isNull(ctx.ScriptApplicationManager) && !$isNull(ctx.DataProvider) && !$isNull(ctx.ClientControl)){
                            var appStates = ctx.ScriptApplicationManager.states;

                            var getUpScopeHtmlFunc, langPrefHtml;
                            if(ctx.ClientControl.get_showUpScopeMessage()){

                                getUpScopeHtmlFunc = function(linkId) {
                                    var upScopeUrl = ctx.DataProvider.get_upScopeUrl();
                                    if (!$isEmptyString(upScopeUrl)) {
                                        if (shouldRenderNewUI()) {
                                            var _idScopeMenuSuffix = linkId + '_ScopeMenu';
                                            var _idScopeLinkSuffix = linkId + '_ScopeLink';
                                            var _idScopeMenuItemSuffix = linkId + '_ScopeMenuItem';

                                            var scopeLinkIdNoEncode = ctx.ClientControl.get_id() + _idScopeLinkSuffix;
                                            var contextTitle = appStates["contextTitle"];
                                            var scopeName = $isEmptyString(contextTitle) ?
                                                    "undefined":
                                                    contextTitle;

                                            function showSearchScopeMenu(anchorElement) {
                                                var self = $getClientControl(anchorElement);
                                                EnsureScriptFunc('SP.js', 'SP.UI.Menu', function () {
                                                    var menu = SP.UI.Menu.create(self.get_id() + _idScopeMenuSuffix);
                                                    var seqNo = 0;

                                                    var navigationNodes = ctx.ScriptApplicationManager.getNavigationNodes();
                                                    for (var i = 0; i < navigationNodes.length; i++) {
                                                        var navNode = navigationNodes[i];
                                                        var script = String.format("SP.Utilities.HttpUtility.navigateTo(Srch.U.getResultsPageUrl('{0}', $getClientControl(document.getElementById(\'{1}\')).get_dataProvider().get_currentQueryState().k));", navNode.url, self.get_id());
                                                        menu.addMenuItem(navNode.name, script, null, null, seqNo, navNode.promptString, self.get_id() + _idScopeMenuItemSuffix + seqNo++);
                                                    }

                                                    menu.hideIcons();
                                                    menu.show(anchorElement, true, false, 0);
                                                });
                                            }

                                            ctx.ClientControl.showSearchScopeMenu = showSearchScopeMenu;

                                            var upScopeLinkHtml = getDropdownMenu(scopeLinkIdNoEncode,
                                                scopeName,
                                                $resource("rs_SearchScopeTooltip"),
                                                "showSearchScopeMenu");
                                            return String.format($htmlEncode($resource("rs_SearchScope")), upScopeLinkHtml);
                                        } else {

                                            var upScopeTitle = String.format($resource("rs_UpscopeTitle"), $resource("rs_UpScopeActionPhrase"));
                                            var upScopeLinkHtml = String.format('<a id="{0}" href="{1}" class="ms-searchNotification" title="{2}">' +
                                                $htmlEncode($resource("rs_UpScopeActionPhrase")) +
                                            '</a>', $htmlEncode(linkId), $urlHtmlEncode(upScopeUrl), $htmlEncode(upScopeTitle));
                                            return String.format($htmlEncode($resource("rs_Upscope")), upScopeLinkHtml);
                                        }
                                    } else {
                                        return "";
                                    }
                                };
                            }

                            var showLanguageOptions = ctx.ClientControl.get_showLanguageOptions();
                            var oldLanguageMarkupRequired = false;

                            if(showLanguageOptions){
                                if (shouldRenderNewUI()) {
                                    var _idLangMenuSuffix = '_LangMenu';
                                    var _idLangLinkSuffix = '_LangLink';
                                    var _idLangSelectSuffix = '_LangLSelect';
                                    var _idLangMenuItemSuffix = '_LangMenuItem';
                                    var _idLangMenuItemPrefSuffix = '_LangMenuItemLangPref';
                                    var _idLangMenuItemMoreSuffix = '_LangMenuItemMoreLang';

                                    var langLinkIdNoEncode = ctx.ClientControl.get_id() + _idLangLinkSuffix;

                                    function showLanguageMenu(anchorElement) {
                                        var self = $getClientControl(anchorElement);
                                        EnsureScriptFunc('SP.js', 'SP.UI.Menu', function () {
                                            var menu = SP.UI.Menu.create(self.get_id() + _idLangMenuSuffix);
                                            var sam =  Srch.ScriptApplicationManager.get_current();
                                            var languagePreferences = sam.getUserPreferenceLanguages();
                                            var seqNo = 0;

                                            if (!Srch.U.n(languagePreferences) && languagePreferences.length > 0) {
                                                for (var i = 0; i < languagePreferences.length; i++) {
                                                    var langPref = languagePreferences[i];
                                                    var displayName = langPref.label;
                                                    var actionScript = String.format('$getClientControl(document.getElementById(\'{1}\')).changeQueryLanguage({0});', $htmlEncode(langPref.id + ''), SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(self.get_id()));
                                                    menu.addMenuItem(displayName, actionScript, null, null, seqNo++, null, self.get_id() + _idLangMenuItemSuffix + displayName);
                                                }
                                            }

                                            var advancedLanguagePreferencesUrl = sam.states['userAdvancedLanguageSettingsUrl'];
                                            if (!$isEmptyString(advancedLanguagePreferencesUrl)) {
                                                menu.addSeparator();
                                                var langPrefScript = String.format('window.location = \'{0}\';', SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode(advancedLanguagePreferencesUrl));
                                                menu.addMenuItem(Srch.Res.rs_LanguagePreferences, langPrefScript, null, null, seqNo, Srch.Res.rs_LanguagePreferences, self.get_id() + _idLangMenuItemPrefSuffix);
                                            }

                                            menu.hideIcons();
                                            menu.show(anchorElement, true, false, 0);
                                        });
                                    }

                                    ctx.ClientControl.showLanguageMenu = showLanguageMenu;

                                    var currLangLabel = ctx.DataProvider.get_effectiveLanguageDisplayName();

                                    if ($isEmptyString(currLangLabel)) {

                                        var advLangSettingsUrl = ctx.ScriptApplicationManager.states['userAdvancedLanguageSettingsUrl'];
                                        var settingsLinkHtml = String.format('<span><a class="ms-searchNotification" href="{0}">{1}</a></span>',
                                            $urlHtmlEncode(advLangSettingsUrl),
                                            $htmlEncode(Srch.Res.rs_SelectPreferredSearchLanguage_Language)
                                        );
                                        langPrefHtml = String.format($htmlEncode(Srch.Res.rs_SelectPreferredSearchLanguage), settingsLinkHtml);
                                    } else {
                                        var langLinkHtml = getDropdownMenu(langLinkIdNoEncode,
                                            currLangLabel,
                                            Srch.Res.rs_LanguageDescription,
                                            "showLanguageMenu");
                                        langPrefHtml = String.format($htmlEncode(Srch.Res.rs_PreferredSearchLanguage), langLinkHtml);
                                    }
                                } else {

                                    oldLanguageMarkupRequired = !$isNull(appStates.languages) && appStates.languages.length > 1;
                                }
                            }

                            var upScopeHtml = getUpScopeHtmlFunc ? getUpScopeHtmlFunc("UpScopeLinkTopA") : "";
                            if (langPrefHtml || upScopeHtml || oldLanguageMarkupRequired) {
            ms_outHtml.push(''
,''
,'            <div id="UpScopeLinkTop" class="ms-srch-upscope-top" style="display:table;  width: 500px">'
);
                                    if (upScopeHtml) {
                ms_outHtml.push(''
,'                <div style="display: table-cell">',  upScopeHtml ,'</div>'
);
                                        if (langPrefHtml || oldLanguageMarkupRequired) {
                ms_outHtml.push(''
,'                <div style="display: table-cell; width: 20px"></div>'
);
                                         }
                                    }
                                    if (langPrefHtml) {
                ms_outHtml.push(''
,'                <div style="display: table-cell">', langPrefHtml ,'</div>'
);
                                    } else if (oldLanguageMarkupRequired) {
                ms_outHtml.push(''
,'                <div style="display: table-cell">'
);
                                                   var languageDropDownClassNoEncode = "";
                                                   if (ctx.ClientControl.get_repositionLanguageDropDown()) {
                                                        languageDropDownClassNoEncode = "ms-srch-result-languageDropDown";
                                                   }
                    ms_outHtml.push(''
,'                    <select title="', $htmlEncode(Srch.Res.rs_LanguageDescription) ,'" id="LangSel" onchange="$getClientControl(this).changeQueryLanguage(this.value);">'
);
                                                            for (var i = 0; i < appStates.languages.length; i++) {
                                                                var lang = appStates.languages[i];
                                                                if(ctx.DataProvider.get_currentQueryState().l == lang.id) {
                        ms_outHtml.push(''
,'                        <option selected="selected" value="', $htmlEncode(lang.id) ,'">'
,'                            ', $htmlEncode(lang.label) ,''
,'                        </option>'
);
                                                                } else {
                        ms_outHtml.push(''
,'                        <option value="', $htmlEncode(lang.id) ,'">'
,'                            ', $htmlEncode(lang.label) ,''
,'                        </option>'
);
                                                                }
                                                            }
                        ms_outHtml.push(''
,'                    </select>'
,'                </div>'
);
                                    }
                ms_outHtml.push(''
,''
,'            </div>'
);
                            }
                            var hasPersonalResults = false;
                            if(ctx.ClientControl.get_showPersonalFavorites()){

                                var pfTable = Srch.U.getTableOfType(ctx.ClientControl.get_currentResultTableCollection(), Microsoft.SharePoint.Client.Search.Query.KnownTableTypes.personalFavoriteResults);
                                if(!$isNull(pfTable)){
                                    var pfRows = pfTable[Srch.U.PropNames.resultRows];
                                    if(!$isNull(pfRows) && pfRows.length > 0)
                                    {
                                        var pfRow = pfRows[0];
                                        if(!$isNull(pfRow) && !$isEmptyString(pfRow.Title) && !$isEmptyString(pfRow.Url))
                                        {
                                            hasPersonalResults = true;
                                            var pfId = ctx.ClientControl.get_nextUniqueId();
                                            var pfTitle = Srch.U.getHighlightedProperty(pfId, pfRow, "Title");
                                            if ($isEmptyString(pfTitle))
                                                pfTitle = $htmlEncode(pfRow.Title);
            ms_outHtml.push(''
,'            <div class="ms-srch-result-personalResult">'
,'                <div class="ms-srch-result-personalResult-prompt">', $htmlEncode(Srch.Res.qs_PersonalResultTitleSingular) ,'</div>'
,'                <a id="PersonalResult" class="ms-textLarge" href="', $urlHtmlEncode(pfRow.Url) ,'">', Srch.U.trimTitle(pfTitle, Srch.U.titleTruncationLength, 2) ,'</a>'
,'            </div>'
);
                                        }
                                    }

                                }
                            }
                            if(ctx.ClientControl.get_showDidYouMean() && !hasPersonalResults){
                                if(!$isNull(ctx.ListData) && !$isEmptyString(ctx.ListData.SpellingSuggestion)){
                                    var dymTerm = ctx.ListData.SpellingSuggestion;
                                    var dymHtml = "<a id='DidYouMean' class='ms-bold ms-italic' href='#' onclick='$getClientControl(this).changeQueryTerm(\"" + $scriptEncode(dymTerm) + "\");return Srch.U.cancelEvent(event);'>" + $htmlEncode(dymTerm) + "</a>";
            ms_outHtml.push(''
,'            <div class="ms-srch-result-didYouMean">'
,'                ', String.format($htmlEncode(Srch.Res.rs_DidYouMean), dymHtml) ,''
,'            </div>'
);
                                }
                            }
                            if (Srch.U.isPageInEditMode()){
                                var sourcesHtml = "<a href='" + $urlHtmlEncode(ctx.ScriptApplicationManager.get_resultSourcesUrl()) + "' target='_blank'>" + $htmlEncode(Srch.Res.rs_Edit_ResultSources) + "</a>";
                                var displayTemplatesHtml = "<a href='" + $urlHtmlEncode(ctx.ScriptApplicationManager.get_displayTemplatesUrl()) + "' target='_blank'>" + $htmlEncode(Srch.Res.rs_Edit_DisplayTemplate) + "</a>";
                                var resultTypesHtml = "<a href='" + $urlHtmlEncode(ctx.ScriptApplicationManager.get_resultTypesUrl()) + "' target='_blank'>" + $htmlEncode(Srch.Res.rs_Edit_ResultType) + "</a>";
                                var queryRulesHtml = "<a href='" + $urlHtmlEncode(ctx.ScriptApplicationManager.get_queryRulesUrl()) + "' target='_blank'>" + $htmlEncode(Srch.Res.rs_Edit_QueryRules) + "</a>";
                                var configureResultsUrl = "javascript:HelpWindowKey(\"WSSEndUser_ConfigureResultsWPInEditMode\")";
                                var configureResultsLink = "<a href=" + configureResultsUrl + ">" + $htmlEncode(Srch.Res.rs_Edit_ConfigureSearchResults_Link) + "</a>";
            ms_outHtml.push(''
,'            <div id="EditMode-CustomizingResults" class="ms-trcnoti-base ms-srch-msg ms-srch-msg-border">'
,'                <div class="ms-srch-msg-section">'
,'                    <h2 class="ms-accentText">', $htmlEncode(Srch.Res.rs_Edit_ResultSourcesTitle) ,'</h2>'
,'                    <div>', String.format($htmlEncode(Srch.Res.rs_Edit_ResultSourcesDescription), sourcesHtml) ,'</div>'
,'                </div>'
,'                <div class="ms-srch-msg-section">'
,'                    <h2 class="ms-accentText">', $htmlEncode(Srch.Res.rs_Edit_ResultTypesTitle) ,'</h2>'
,'                    <div>', String.format($htmlEncode(Srch.Res.rs_Edit_ResultTypesDescription), displayTemplatesHtml, resultTypesHtml) ,'</div>'
,'                </div>'
,'                <div class="ms-srch-msg-section">'
,'                    <h2 class="ms-accentText">', $htmlEncode(Srch.Res.rs_Edit_QueryRulesTitle) ,'</h2>'
,'                    <div>', String.format($htmlEncode(Srch.Res.rs_Edit_QueryRulesDescription), queryRulesHtml) ,'</div>'
,'                </div>'
,'                <div class="ms-srch-msg-section">'
,'                    <div>', String.format($htmlEncode(Srch.Res.rs_Edit_ConfigureSearchResults), configureResultsLink) ,'</div>'
,'                </div>'
,'            </div>'
);
                            }
            ms_outHtml.push(''
,'            <div id="Groups" class="ms-srch-result-groups" onmouseout="$(\'#SortBySel\').hide();">'
);
                                    ctx.ListDataJSONGroupsKey = "ResultTables";
                ms_outHtml.push(''
,'                ', ctx.RenderGroups(ctx) ,''
);
                                    if(ctx.ClientControl.get_shouldShowNoResultMessage()){
                ms_outHtml.push(''
,'                <div id="NoResult">'
);
                                                var emptyMessage = ctx.ClientControl.get_emptyMessage();
                                                if ($isEmptyString(emptyMessage))
                                                {
                    ms_outHtml.push(''
,'                    <div class="ms-textLarge ms-srch-result-noResultsTitle">', $htmlEncode(Srch.Res.rs_NoResultsTitle) ,'</div>'
,'                    <div>', $htmlEncode(Srch.Res.rs_NoResultsSuggestions) ,'</div>'
,'                    <ul>'
,'                        <li>', $htmlEncode(Srch.Res.rs_NoResultsSpelling) ,'</li>'
,'                        <li>', $htmlEncode($resource("SuggestionPartialWord")) ,'</li>'
,'                        <li>', $htmlEncode(Srch.Res.rs_NoResultsDifferentTerms) ,'</li>'
,'                        <li>', $htmlEncode(Srch.Res.rs_NoResultsGeneralTerms) ,'</li>'
,'                        <li>', $htmlEncode(Srch.Res.rs_NoResultsFewerTerms) ,'</li>'
);
                                                            if(ctx.DataProvider.get_currentQueryState().r){
                        ms_outHtml.push(''
,'                        <li>', $htmlEncode(Srch.Res.rs_NoResultsRefiners) ,'</li>'
);
                                                            }
                                                            var searchTipsUrl = "javascript:HelpWindowKey(\"WSSEndUser_SearchTips\")";
                                                            var searchTipsLink = "<a href=" + searchTipsUrl + ">" + $htmlEncode(Srch.Res.rs_NoResultsTips_Link) + "</a>";
                        ms_outHtml.push(''
,'                        <li>', String.format($htmlEncode(Srch.Res.rs_NoResultsTips), searchTipsLink) ,'</li>'
,'                    </ul>'
);
                                                }
                                                else
                                                {
                    ms_outHtml.push(''
,'                    ', $htmlEncode(emptyMessage) ,''
);
                                                }
                    ms_outHtml.push(''
,'                </div>'
);
                                    }
                ms_outHtml.push(''
,'            </div>'
,''
);
                            if(getUpScopeHtmlFunc){
            ms_outHtml.push(''
,'            <div id="UpScopeLinkBottom" class="ms-srch-upscope-bottom" style="display:table;  width: 500px">'
,'                <div style="display: table-cell">', getUpScopeHtmlFunc("UpScopeLinkBottomA") ,'</div>'
,'            </div>'
);
                            }

                            if(ctx.ClientControl.get_showPaging()){
                                var pagingInfo = ctx.ClientControl.get_pagingInfo();
                                if(!$isEmptyArray(pagingInfo)){
            ms_outHtml.push(''
);
    var showPaging = ctx.ClientControl.get_showPaging();
    if(showPaging)
    {
        var pagingInfo = ctx.ClientControl.get_pagingInfo();
        showPaging = !$isEmptyArray(pagingInfo);
        if(showPaging)
        {
            var currentPage = null;
            var firstPage = pagingInfo[0];
            var lastPage = pagingInfo[pagingInfo.length - 1];

            for (var i = 0; i< pagingInfo.length; i++)
            {
                var pl = pagingInfo[i];
                if (!$isNull(pl))
                {
                    if (pl.startItem == -1)
                    {
                        currentPage = pl;
                    }
                }
            }

            var getPagingImageClassName = function(buttonClassNamePrefix, isNext, isEnabled)
            {
                var className = buttonClassNamePrefix;
                className += (isNext && !Srch.U.isRTL()) || (!isNext && Srch.U.isRTL()) ? "right" : "left";
                if(!$isNull(isEnabled) && isEnabled == false)
                {
                    className += "-disabled";
                }
                return className;
            }

            var getPagingContainerClassName = function(buttonClassNamePrefix, isEnabled)
            {
                var className = buttonClassNamePrefix;
                className += isEnabled ? "enabled" : "disabled";
                return className;
            }

            var hasNextPage = lastPage.pageNumber == -2;
            var hasPreviousPage = firstPage.pageNumber == -1;
            var buttonClassNamePrefix = "ms-promlink-button-";
            var nextPageContainerClassName = getPagingContainerClassName(buttonClassNamePrefix, hasNextPage);
            var previousPageContainerClassName = getPagingContainerClassName(buttonClassNamePrefix, hasPreviousPage);
            var nextPageImageClassName = getPagingImageClassName(buttonClassNamePrefix, true, hasNextPage);
            var previousPageImageClassName = getPagingImageClassName(buttonClassNamePrefix, false, hasPreviousPage);
    ms_outHtml.push(''
,'            <div class="row small-uncollapse">'
,'                <ul class="pagination" role="navigation" aria-label="Pagination">'
);
                        if(hasPreviousPage)
                        {
                    ms_outHtml.push(''
,''
,'                    <li class="pagination-previous">'
,'                        <a href="#" onclick="$getClientControl(this).page(', $htmlEncode(firstPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                            Prev'
,'                            <span class="show-for-sr">page</span>'
,'                        </a>'
,'                    </li>'
);
                        }
                    ms_outHtml.push(''
,''
,''
);
            // Show the paging numbers
            for (var i = 0; i < pagingInfo.length; i++) {
                var pi = pagingInfo[i];
                if(!$isNull(pi)) {
                    if (pi.pageNumber !== -1 && pi.pageNumber !== -2) {
                        var pageLinkId = "PageLink_" + pi.pageNumber;
                        // Check if it is the current selected page
                        if (pi.startItem === -1) {
            ms_outHtml.push(''
,'                    <li class="current"><span class="show-for-sr">You are on page</span>', $htmlEncode(pi.pageNumber) ,'</li>'
);
                        } else {
            ms_outHtml.push(''
,'                    <li>'
,'                        <a href="#" onclick="$getClientControl(this).page(', $htmlEncode(pi.startItem) ,');return Srch.U.cancelEvent(event);">', $htmlEncode(pi.pageNumber) ,'</a>'
,'                    </li>'
,''
);
                        }
                    }
                }
              }
            ms_outHtml.push(''
);
                    if(hasNextPage)
                    {
                    ms_outHtml.push(''
,''
,'                    <li class="pagination-next">'
,'                        <a href="#" onclick="$getClientControl(this).page(', $htmlEncode(lastPage.startItem) ,');return Srch.U.cancelEvent(event);">'
,'                            Next'
,'                            <span class="show-for-sr">page</span>'
,'                        </a>'
,'                    </li>'
);
                        }
                    ms_outHtml.push(''
,''
,'                </ul>'
,'            </div>'
);
        }
    }
    ms_outHtml.push(''
,''
);
                                }
                            }
            ms_outHtml.push(''
,''
,''
,'            <div class="ms-srch-resultFooter">'
,'               '
,'                <ul id="ResultFooter">'
);
                                            if(ctx.ClientControl.get_showAlertMe()){
                                                var alertMeLabel = $htmlEncode($resource("rs_AlertMe"));
                                                var queryTerm = ctx.DataProvider.get_currentQueryState().k;
                                                var serializedQuery = Srch.U.getTableProperty(ctx.ClientControl.get_currentResultTableCollection(), "SerializedQuery");
                    ms_outHtml.push(''
,'                    <li id="AlertMeLi">'
,'                        <a id="CSR_AM1" href="javascript:{}" title="', alertMeLabel ,'" onclick="EnsureScriptParams(\'SearchUI.js\', \'Srch.SU.searchResultAlertMe\', \'', $scriptEncode(queryTerm) ,'\', \'', $scriptEncode(serializedQuery) ,'\');">'
,'                            ', alertMeLabel ,''
,'                        </a>'
,'                    </li>'
);
                                            }

                                            if(ctx.ClientControl.get_showPreferencesLink()){
                                                var preferencesUrl = ctx.ScriptApplicationManager.get_preferencesUrl();
                                                if(!$isEmptyString(preferencesUrl)){
                    ms_outHtml.push(''
,'                    <li id="Preferences"><a title="', $htmlEncode(Srch.Res.rs_Preferences) ,'" id="PreferencesLink" href="', $urlHtmlEncode(preferencesUrl) ,'">', $htmlEncode(Srch.Res.rs_Preferences) ,'</a></li>'
);
                                                }
                                            }

                                            if(ctx.ClientControl.get_showAdvancedLink()){
                                                var advancedUrl = ctx.ClientControl.get_advancedUrl();
                                                if(!$isEmptyString(advancedUrl)){
                    ms_outHtml.push(''
,'                    <li id="Advanced"><a title="', $htmlEncode(Srch.Res.rs_Advanced) ,'" id="AdvancedLink" href="', $urlHtmlEncode(advancedUrl) ,'">', $htmlEncode(Srch.Res.rs_Advanced) ,'</a></li>'
);
                                                }
                                            }
                    ms_outHtml.push(''
,'                </ul>'
,'            </div>'
);
                        }
            ms_outHtml.push(''
,'        </div>'
,'    '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_5915c3a8051e46a68acbe6e407a87578() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Control_SearchResults", DisplayTemplate_5915c3a8051e46a68acbe6e407a87578);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js", DisplayTemplate_5915c3a8051e46a68acbe6e407a87578);
}
//

        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js", "~sitecollection/_layouts/15/BLG.Intranet.Branding/js/blgprint.js");
        $includeScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js", "~sitecollection/_layouts/15/BLG.Intranet.Branding.PhoneBook/js/PhoneBook-Search.js");
        EnsureScriptFunc("sp.ui.dialog.js", "SP.UI.ModalDialog.ShowPopupDialog", null);
    //
}
RegisterTemplate_5915c3a8051e46a68acbe6e407a87578();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_Control_SearchResults.js"), RegisterTemplate_5915c3a8051e46a68acbe6e407a87578);
}