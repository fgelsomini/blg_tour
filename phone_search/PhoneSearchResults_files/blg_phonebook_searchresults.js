/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_3b2c6478708747638098fa34e1842bcb(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3b2c6478708747638098fa34e1842bcb.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_SearchResults.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'FirstName':['FirstName'], 'LastName':['LastName'], 'AccountName':['AccountName'], 'PictureURL':['PictureURL'], 'BLGLawyerStatusEn':['BLGLawyerStatusEn'], 'BLGLawyerStatusFr':['BLGLawyerStatusFr'], 'BLGProNameEn':['BLGProNameEn'], 'BLGProNameFr':['BLGProNameFr'], 'BLGMergedOfficeEn':['BLGMergedOfficeEn'], 'BLGMergedOfficeFr':['BLGMergedOfficeFr'], 'BLGMergedPhone':['BLGMergedPhone'], 'BLGMergedExtension':['BLGMergedExtension'], 'BLGPBEmail':['BLGPBEmail'], 'BLGMergedAssistantInfo':['BLGMergedAssistantInfo'], 'BLGManagerInfo':['BLGManagerInfo'], 'BLGTitleEn':['BLGTitleEn'], 'BLGTitleFr':['BLGTitleFr'], 'BLGSpecialityEn':['BLGSpecialityEn'], 'BLGSpecialityFr':['BLGSpecialityFr']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);

        var email =  $getItemValue(ctx, "BLGPBEmail");
        var lastname =  $getItemValue(ctx, "LastName");
        var firstname = $getItemValue(ctx, "FirstName");

        var status =  "";
        var group =  "";
        var title = "";
        var office =  "";
        var speciality = "";
        var NewTitle = "";

        status =  $getItemValue(ctx,  $resource("status"));
        group =  $getItemValue(ctx, $resource("group"));
        office =  $getItemValue(ctx, $resource("office"));
        title = $getItemValue(ctx, $resource("title"));
        speciality = $getItemValue(ctx, $resource("speciality"));

        var Lang = $resource("Lang");

        
        if(status != "" && status != null)
        {
            NewTitle = status;
        }
        else
        {
            if(title != "" && title != null){
                if(speciality != "" && speciality != null){
                    NewTitle = speciality + "\\"+  title;
                }
                else
                {
                    NewTitle = title;
                }
            }
        }

        var phone =  $getItemValue(ctx, "BLGMergedPhone");
        var ext = $getItemValue(ctx, "BLGMergedExtension");

        var iconURL =  $getItemValue(ctx, "PictureURL");
        if(iconURL == "" || iconURL == null)
        {
            iconURL = "/PublishingImages/silhouette.jpg";
        }
        else
        {
            iconURL = iconURL.toString().replace("MThumb", "LThumb");
        }

        var assistantinfo =  $getItemValue(ctx, "BLGMergedAssistantInfo");
        var managerinfo =  $getItemValue(ctx, "BLGManagerInfo");

        var acc = $getItemValue(ctx, "AccountName");

        var ProfileURL = "PhoneProfile.aspx?AccountName=" + acc;
        var ProfilePage = "PhoneProfile.aspx?AccountName=";

        var strMore = $resource("More");

        ms_outHtml.push(''
,'        <div class="mini-container-b people-result">'
,'            <div class="content row" data-displaytemplate="BLG_Phonebook" style="padding-bottom:0px">'
,'                <div class="large-2 columns">'
,'                    <a class="cbs-ItemLink" href="', ProfileURL ,'">'
,'                        <img class="round-mask" src="', $urlHtmlEncode(iconURL) ,'" />'
,'                    </a>'
,'                </div>'
,'                <div class="large-5 columns">'
,'                    <div class="primary">'
,'                        <div class="name">'
,'                            <a href="', ProfileURL ,'"><div>', firstname ,' ', lastname ,'</div></a>'
,'                        </div>'
,'                        <div class="title">'
,'                            ', NewTitle ,''
,'                        </div>'
); if(!$isNull(group)){ms_outHtml.push(''
,'                        <div class="area">'
,'                            ', group ,''
,'                        </div>'
);}ms_outHtml.push(''
);for(i=0;i<office.toString().split(";").length;i++)
                    {ms_outHtml.push(''
,'                        <div class="contact">'
,'                            <span> ', office.toString().split(";")[i] ,' | </span>'
,'                            <span> ', phone.toString().split(";")[i] ,' x', ext.toString().split(";")[i] ,'  </span>'
,'                        </div>'
);}ms_outHtml.push(''
,'                        <div class="email">'
,'                            <a href="mailto:', email ,'">', email ,'</a>'
,'                        </div>'
,'                    </div>'
,'                </div>'
,'                <div class="large-5 columns primary">'
);
                        var strExt = "";
                        var moreId = "";
                if(!$isEmptyString(assistantinfo.toString())){

                        assistantinfo = assistantinfo.toString().replace("&#39;", "'")
                    for(i=0;i<assistantinfo.toString().split(";").length;i++)
                    {
                        var assistant = assistantinfo.toString().split(";")[i].toString().split(":");

                        var AssStatus = assistant[3];
                        var AssOffice = assistant[5];
                        strExt = "";
                        if (Lang == "fr")
                        {
                            AssStatus = assistant[4];
                            AssOffice = assistant[6];
                        }
                        if(!$isNull(assistant[7])){
                            strExt = "| x" + assistant[7];
                        }
                        var strFullName =  assistant[1] + " " + assistant[2];

                        if(i == 2){
                        moreId = assistant[0].replace("\\", "") + acc.toString().replace("\\", "");
                        ms_outHtml.push(''
,''
,'                    <div id="MoreAssistants', moreId ,'" class="secondary">'
,''
);

                    }ms_outHtml.push(''
,''
,'                        <div class="name">'
,'                            <a href="', ProfilePage ,'', assistant[0] ,'">'
,'                                ', strFullName ,''
,'                            </a>'
,'                        </div>'
,'                        <div class="title">'
,'                            ', AssStatus ,''
,'                        </div>'
,'                        <div class="contact">'
,'                            ', AssOffice ,' ', strExt ,''
,'                        </div>'
,'                        <div class="email">'
,'                            <a href="mailto:', assistant[8] ,'">', assistant[8] ,'</a>'
,'                        </div>'
,'                        <br />'
,''
); }}
                    if(i>2){ms_outHtml.push(''
,'                    </div>'
); }
                if(!$isEmptyString(managerinfo.toString())){
                    managerinfo = managerinfo.toString().replace("&#39;", "'")
                    for(i=0;i<managerinfo.toString().split(";").length;i++)
                    {
                            var manager = managerinfo.toString().split(";")[i].toString().split(":");


                        var ManStatus = manager[3];
                        var ManOffice = manager[5];
                        strExt = "";
                        if (Lang == "fr")
                        {
                            ManStatus = manager[4];
                            ManOffice = manager[6];
                        }
                        if(!$isNull(manager[7])){
                            strExt = "| x" + manager[7];
                        }

                        var strFullName =  manager[1] + " " + manager[2];

                        if(i == 2){
                            moreId = manager[0].replace("\\", "") + acc.toString().replace("\\", "");
                                ms_outHtml.push(''
,'                    <div id="MoreManagers', moreId ,'" class="secondary">'
);}ms_outHtml.push(''
,''
,'                        <div class="name">'
,'                            <a href="', ProfilePage ,'', manager[0] ,'">'
,'                                ', strFullName ,''
,'                            </a>'
,'                        </div>'
,'                        <div class="title">'
,'                            ', ManStatus ,''
,'                        </div>'
,'                        <div class="contact">'
,'                            ', ManOffice ,' ', strExt ,''
,'                        </div>'
,'                        <div class="email">'
,'                            <a href="mailto:', manager[8] ,'" style="color:#0b2265">', manager[8] ,'</a>'
,'                        </div>'
,''
,'                        <br />'
); }}
                    if(i>2){ms_outHtml.push(''
,'                    </div>'
); }ms_outHtml.push(''
,'                </div>'
,'            </div>'
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3b2c6478708747638098fa34e1842bcb() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("BLG_Phonebook", DisplayTemplate_3b2c6478708747638098fa34e1842bcb);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_SearchResults.js", DisplayTemplate_3b2c6478708747638098fa34e1842bcb);
}
//
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_SearchResults.js", "~sitecollection/_catalogs/masterpage/BLGLanguageFiles/{Locale}/Resource.js");
        EnsureScriptFunc("sp.ui.dialog.js", "SP.UI.ModalDialog.ShowPopupDialog", null);
    //
}
RegisterTemplate_3b2c6478708747638098fa34e1842bcb();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fBLGIntranetPhonebookDisplayTemplates\u002fBLG_PhoneBook_SearchResults.js"), RegisterTemplate_3b2c6478708747638098fa34e1842bcb);
}