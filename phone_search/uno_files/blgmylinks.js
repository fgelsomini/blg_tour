'use strict';
Type.registerNamespace('BLG.MyLinks');
BLG.MyLinks = function () { };
BLG.MyLinks.prototype = {
    serviceEndPoint: "/_vti_bin/BLG/MyLinksManager.svc",
    addMyLink: function (url, title, user, success) {
        var linkUrl = "";
        var linkTitle = "";
        var linkUser = "";

        if (user) {
            linkUser = user;
        }

        if (title) {
            linkTitle = title;
        }

        if (url) {
            linkUrl = url;
        } else {
            linkUrl = window.location.href;
            linkTitle = document.title;
        }

        linkUrl = encodeURI(linkUrl);

        var restUrl = this.serviceEndPoint + '/AddLink?url=' + linkUrl + '&title=' + linkTitle + '&login=' + linkUser;

        $.post(restUrl, success);
    },

    isLinkAdded: function (url, success) {
        var linkUrl = "";
        if (url) {
            linkUrl = url;
        } else {
            linkUrl = window.location.href;
        }

        linkUrl = encodeURI(linkUrl);

        var restUrl = this.serviceEndPoint + '/IsLinkAdded?url=' + linkUrl;

        var result = $.get(restUrl, success);

        return result;
    },

    removeMyLink: function (url, user, success) {
        var linkUrl = "";
        if (url) {
            linkUrl = url;
        } else {
            linkUrl = window.location.href;
        }

        linkUrl = encodeURI(linkUrl);

        var linkUser = "";

        if (user) {
            linkUser = user;
        }

        var restUrl = this.serviceEndPoint + '/RemoveLink?url=' + linkUrl + '&login=' + linkUser;

        $.post(restUrl, success);
    },

    removeMyLinkByItemId: function (id, success) {
        var restUrl = this.serviceEndPoint + '/RemoveLinkByItemId?spListItemId=' + id;

        $.post(restUrl, success);
    }
}