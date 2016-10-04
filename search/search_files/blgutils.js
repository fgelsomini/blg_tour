'use strict';
Type.registerNamespace('BLG.Utils');

BLG.Utils = function () { };

BLG.Utils.prototype = {
    parseUrlParameters: function (raw) {
        var params = {},
            match,
            plusRegEx = /\+/g,
            matchRegEx = /([^&=]+)=?([^&]*)/g,
            decode = function (enc) {
                return decodeURIComponent(enc.replace(plusRegEx, ' '));
            };
        while (match = matchRegEx.exec(raw)) {
            params[decode(match[1])] = decode(match[2]);
        }
        return params;
    },
    getUrlQueryString: function () {
        var raw = window.location.search;
        if (raw && raw[0] == '?') {
            raw = raw.substring(1);
        }
        return raw;
    },
    getUrlHash: function () {
        var raw = window.location.hash;
        if (raw && raw[0] == '#') {
            raw = raw.substring(1);
        }
        return raw;
    },
    getUrlQueryStringParameter: function (key) {
        var params = this.parseUrlParameters(this.getUrlQueryString());
        var param = '';
        if (params) {
            param = params[key];
        }
        return param;
    },
    getUrlHashParameter: function (key) {
        var params = this.parseUrlParameters(this.getUrlHash());
        var param = '';
        if (params) {
            param = params[key];
        }
        return param;
    },
    getSearchQuery: function () {
        var query = this.getUrlHashParameter('k');
        if (!query) {
            query = this.getUrlQueryStringParameter('k');
        }
        return query;
    },
    setCookie: function (cookieName, cookieValue, expirationDays) {
        var expires = "";
        if (expirationDays && expirationDays > 0) {
            var d = new Date();
            d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
            expires = "; expires=" + d.toUTCString();
        }
        document.cookie = cookieName + "=" + cookieValue + expires +  ";domain=." + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0] + "; path=/";
    },
    setSessionCookie: function (cookieName, cookieValue) {
        document.cookie = cookieName + "=" + cookieValue + ";domain=." +  location.hostname.split('.').reverse()[1] + "." +  location.hostname.split('.').reverse()[0] + "; path=/";
    },
    getCookie: function (cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    deleteCookie: function (cookieName) {
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;' + "domain=." + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0] + "; path=/";;
    },
    getCurrentSearchResultObject: function () {
        var keys = Object.keys(window);
        var value = null;
        for (var i = keys.length - 1; i >= 0; i--) {
            var key = keys[i];
            if (key.endsWith('_ctl00results')) {
                var results = window[key];
                if (results && results.Properties && results.Properties.RowLimit && results.Properties.RowLimit == 1)  {
                    value = results;
                    break;
                }
            }
        }
        return value;
    },
    getCurrentSearchResultRows: function () {
        var resultsObject = this.getCurrentSearchResultObject();
        var value = null;
        if (resultsObject && resultsObject.ResultTables && resultsObject.ResultTables.length > 0) {
            value = resultsObject.ResultTables[0].ResultRows;
        }

        return value;
    },
    getCurrentSearchResultFirstRow: function () {
        var rows = this.getCurrentSearchResultRows();
        var value = null;
        if (rows && rows.length > 0) {
            value = rows[0];
        }

        return value;
    },
    scrollToTop: function () {
        var element = "#s4-workspace";
        $(element).animate({ scrollTop: 0 }, 500);
    },
    processNavigationParams: function (params) {
        var value = params;
        value = value.replace("{LoginName}", _BLGClientContext.LoginName);
        value = value.replace("{FirstName}", _BLGClientContext.UserProfile.FirstName);
        value = value.replace("{LastName}", _BLGClientContext.UserProfile.LastName);

        if (IsNullOrUndefined( _BLGClientContext.Language))
            value = value.replace("{Language}", "");
        else
            value = value.replace("{Language}",  _BLGClientContext.Language.Label);

        value = value.replace("{TimeKeeperCode}", _BLGClientContext.TimeKeeperCode);

        if (IsNullOrUndefined(_BLGClientContext.Offices))
            value = value.replace("{Office}", "");
        else
            value = value.replace("{Office}", _BLGClientContext.Offices[0].Label);

        if (IsNullOrUndefined(_BLGClientContext.UserProfile.BLGBenefitsPlan))
            value = value.replace("{UserType}", "");
        else
            value = value.replace("{UserType}", _BLGClientContext.UserProfile.BLGBenefitsPlan);

        if (IsNullOrUndefined(_BLGClientContext.UserProfile.BLGEmail))
            value = value.replace("{Email}", "");
        else
            value = value.replace("{Email}", _BLGClientContext.UserProfile.BLGEmail);

        if (!IsNullOrUndefined(_BLGClientContext.AdminGroup))
            value = value.replace("{Department}", _BLGClientContext.AdminGroup.Label);
        else if (!IsNullOrUndefined(_BLGClientContext.PracticeGroup))
            value = value.replace("{Department}", _BLGClientContext.PracticeGroup.Label);
        else
            value = value.replace("{Department}", "");

        if (!value.startsWith("?") && !value.startsWith("#"))
            value = "?" + value;

        return value;
    },
    getFormattedDate: function (date) {
        var monthsEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthsFR = ["janvier", "f&eacute;vrier", "mars", "avril", "mai", "juin", "juillet", "ao&ucirc;t", "septembre", "octobre", "novembre", "d&eacute;cembre"];

        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        var value = "";

        switch (_spPageContextInfo.currentLanguage) 
        {
            case 1036: //fr-fr format: d MMMM yyyy
                value = day + " " + monthsFR[month] + " " + year;
                break;
            default: //default to en-us format: MMMMM dd, yyyy
                value = monthsEN[month] + " " + day + ", " + year;
                break;
        }

        return value;
    },
    getShortMonth: function (date) {
        var monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var monthsFR = ["jan", "f&eacute;v", "mar", "avr", "mai", "jun", "jul", "ao&ucirc;", "sep", "oct", "nov", "d&eacute;c"];

        var month = date.getMonth();

        switch (_spPageContextInfo.currentLanguage) {
            case 1036: //fr-fr
                return monthsFR[month];
                break;
            default: //default to en-us
                return monthsEN[month];
                break;
        }
    },
    encodeRefinerUrl: function(url){
	    var baseurl = url.substring(0,url.indexOf('=') + 1);
        var hash = url.substring(url.indexOf('=') + 1);

        var encoded = encodeURIComponent(hash);
        encoded = encoded.replace('%2523','#');
        encoded = encoded.replace('%3D','=');
        encoded = encoded.replace('(','(%5c');
        encoded = encoded.replace('%22)','%5c%22)');

        return baseurl + encoded;
    }
}