'use strict';
Type.registerNamespace('BLG.Search.TemplateUtils');

BLG.Search.TemplateUtils = function () { };

BLG.Search.TemplateUtils.prototype = {
    replaceAll: function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    },
    icons: {
        "default": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-default.png",
        "pdf": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-pdf.png",
        "word": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-doc.png",
        "excel": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-xls.png",
        "powerPoint": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-ppt.png",
        "video": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-video.png",
        "app": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-app.png",
        "link": "/_layouts/15/Images/BLG.Intranet.Branding/search/item-icon-link.png"
    },

    getDefaultIcon: function () {
        return this.icons.default;
    },
    getDocumentIcon: function (ext) {
        var icon = this.icons.word;
        if (ext == 'doc' || ext == 'docx' || ext == 'rtf') {
            icon = this.icons.word;
        } else if (ext == 'xls' || ext == 'xlsx' || ext == 'csv') {
            icon = this.icons.excel;
        } else if (ext == 'ppt' || ext == 'pptx') {
            icon = this.icons.powerPoint;
        } else if (ext == 'pdf') {
            icon = this.icons.pdf;
        }
        return icon;
    },
    getLinkIcon: function (linkType) {
        var icon = this.icons.link;
        if (linkType == 'App') {
            icon = this.icons.app;
        }

        return icon;
    },
    getVideoIcon: function () {
        return this.icons.video;
    },
    parseTaxonomySearchResultValue: function (raw) {
        var taxValue = { TermSetGuids: [], TermValues: [] };
        if (raw) {
            raw = this.replaceAll(raw, "\n\n", ";");
            var parts = raw.split(';');
            parts.forEach(function (part) {
                if (part.startsWith("GP0|#")) //term?
                {
                    var termGuid = part.replace("GP0|#", "");
                    taxValue.TermValues.push({ TermGuid: termGuid });
                }
                else if (part.startsWith("GTSet|#")) //term set?
                {
                    taxValue.TermSetGuids.push(part.replace("GTSet|#", ""));
                }
                else if (part.startsWith("L0|#")) //Term with label?
                {
                    var termParts = part.replace("L0|#0", "").split('|');
                    var termGuid = termParts[0];
                    var termLabel = termParts[1];
                    var result = taxValue.TermValues.filter(function (tv) {
                        return tv.TermGuid == termGuid;
                    });
                    if (result.length == 0)
                        taxValue.TermValues.push({ TermGuid: termGuid, Label: termLabel });
                    else
                        result[0].Label = termLabel;
                }
            });
        }
        return taxValue;
    },
    getTaxonomyId: function (raw) {
        var tax = this.parseTaxonomySearchResultValue(raw);
        var result = null;

        if (tax && tax.TermValues && tax.TermValues.length > 0) {
            result = tax.TermValues[0].TermGuid;
        }
        return result;
    },
    getTaxonomyLabel: function (raw) {
        var tax = this.parseTaxonomySearchResultValue(raw);
        var result = null;

        if (tax && tax.TermValues && tax.TermValues.length > 0) {
            result = tax.TermValues[0].Label;
        }
        return result;
    },
    parseLinkSearchResultValue: function (raw) {
        var linkValue = { Url: null, Description: null };
        if (raw) {
            var parts = raw.split(',');
            if (parts.length > 0) {
                linkValue.Url = parts[0];
                if (parts.length > 1) {
                    linkValue.Description = parts[1];
                }
            }
        }
        return linkValue;
    },
    getLinkUrl: function (raw) {
        var link = this.parseLinkSearchResultValue(raw);
        var result = null;

        if (link) {
            result = link.Url;
        }
        return result;
    },
    getLinkDescription: function (raw) {
        var link = this.parseLinkSearchResultValue(raw);
        var result = null;

        if (link) {
            result = link.Description;
        }
        return result;
    },
    getSearchResultValue: function (searchResults, property) {
        var value = null;

        try {
            value = searchResults.m_value.ResultTables[0].ResultRows[0][property];
        }
        catch (ex) {

        }
        return value;
    }

}