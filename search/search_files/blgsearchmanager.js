'use strict';
Type.registerNamespace('BLG.Search.Manager');

BLG.Search.Manager = function () { }

BLG.Search.Manager.prototype =
    {
        defaultPeopleManagedProperties: ["AccountName", "Title", "FirstName", "LastName", "PictureURL", "BLGTitleEn", "BLGTitleFr", "BLGPBEmail", "BLGMergedPhone", "BLGDepartmentEn", "BLGDepartmentFr", "BLGLawyerStatusEn", "BLGLawyerStatusFr", "BLGPractNameEn", "BLGPractNameFr", "BLGProNameEn", "BLGProNameFr", "BLGServNameEn", "BLGServNameFr"],

        defaultLeadersManagedProperties: ["Title", "owstaxIdBLGRole", "BLGBioOWSHTML", "BLGUserOWSUSER"],

        peopleResultSourceId: "b09a7990-05ea-4af9-81ef-edfab16c4e31",

        localResultSourceId: "8413cd39-2156-4e00-b54d-11efd9abdb89",

        onQuerySuccess: function () {
            console.log('Query execution completed');
        },

        onQueryFail: function (sender, args) {
            console.error('Query failed. Error:' + args.get_message());
        },

        getPeopleData: function (users, managedProperties, callback) {

            var selectProperties = managedProperties != null ? managedProperties : this.defaultPeopleManagedProperties;

            if (users != null && users != "") {
                var userArray = users.split(";");

                var userAccounts = new Array();

                $.each(userArray, function () {
                    var user = this.split("|");
                    if (user.length > 1) {
                        if (user[3].toLowerCase().indexOf("super_") > -1)
                            userAccounts.push("AccountName=\"" + user[3] + "*\"");
                        else
                            userAccounts.push("AccountName=\"" + user[3] + "\"");
                    }
                    else {
                        if (user[0].toLowerCase().indexOf("super_") > -1)
                            userAccounts.push("AccountName=\"" + user[0] + "*\"");
                        else
                            userAccounts.push("AccountName=\"" + user[0] + "\"");
                    }
                });

                var userQuery = userAccounts.join(" OR ");
                var sortList = new Array();
                sortList.push("FirstName");

                var result = this.executeSearch(userQuery, selectProperties, this.peopleResultSourceId, sortList, callback, this.onQueryFail);

                return result;
            }

            return null;
        },

        getUserDataByDisplayName: function (user, managedProperties, callback) {

            var selectProperties = managedProperties != null ? managedProperties : this.defaultPeopleManagedProperties;

            var userAccounts = new Array();

            userAccounts.push("PreferredName:" + user);

            var userQuery = userAccounts.join(" OR ");

            var result = this.executeSearch(userQuery, selectProperties, this.peopleResultSourceId, null, callback, this.onQueryFail);

            return result;
        },

        getLeadersData: function (users, managedProperties, callback) {

            var selectProperties = managedProperties != null ? managedProperties : this.defaultLeadersManagedProperties;

            if (users != null && users != "") {
                var userArray = users.split(";");

                var userAccounts = new Array();

                $.each(userArray, function () {
                    var user = this.split("|");

                    if (user.length > 1) {
                        userAccounts.push("BLGUserOWSUSER:" + user[3]);
                    }
                    else {
                        userAccounts.push("BLGUserOWSUSER:" + user[0]);
                    }
                });

                var query = "(((((((((((((((ContentType:\"BLG Leaders\" AND (" + userAccounts.join(" OR ") + ") ";
                query += "XRANK(cb=1000) owstaxIdBLGRole:2ccf069e-780b-4142-95ca-c79d94e638ec) "; //National Managing Partner & CEO
                query += "XRANK(cb=900) owstaxIdBLGRole:eeb1daef-6388-4605-acd4-d614ffbda40b) "; //National Group Head
                query += "XRANK(cb=800) owstaxIdBLGRole:4379334b-3978-4f32-90dd-cbb71b98a1e4) "; //National Practice Group Leader
                query += "XRANK(cb=700) owstaxIdBLGRole:640fdf4c-5d44-4bb0-987f-fc96c9b9652a) "; //Regional Managing Partner
                query += "XRANK(cb=600) (owstaxIdBLGRole:ee66c843-e0b8-444a-9b7c-3e3ee8c6d3d4 OR owstaxIdBLGRole:79d22ded-781b-4b55-9fbd-ae2c347c2544 OR owstaxIdBLGRole:812f8166-12a6-4d2c-840c-4698dd80b35d)) "; //Chief Operation Officer, Chief Talent Officer, Chief Practice Managers
                query += "XRANK(cb=500) (owstaxIdBLGRole:5c3f0f72-8d87-43b5-9158-b33d71ba4d07 OR owstaxIdBLGRole:c0107592-025f-433d-964d-344d0e77636a OR owstaxIdBLGRole:014b0f67-c80a-41cd-95e5-c467a084dce9 OR owstaxIdBLGRole:45784497-586c-46b1-829e-51b2e65016e8)) "; //Chief Financial Officer, National Director of Business Development, National Director of Communications & Marketing, Chief Information Officer
                query += "XRANK(cb=400) owstaxIdBLGRole:0da2ff10-eaa9-4e3f-a5e4-2e10a31cfc21) "; //Focus Group Leader
                query += "XRANK(cb=300) owstaxIdBLGRole:b249da5d-7124-4f78-924f-9f295f595335) "; //Regional Group Representative
                query += "XRANK(cb=200) owstaxIdBLGRole:d1c1057f-32a2-4b5a-8ff1-47527b70eade) "; //BD Leader
                query += "XRANK(cb=180) owstaxIdBLGRole:c208c80c-9f01-404e-bff9-24320dd0949e) "; //Director of Technical Support Services
                query += "XRANK(cb=170) owstaxIdBLGRole:3c55a669-4659-47d3-9ed1-498ffd87a1af) "; //IT Regional Manager
                query += "XRANK(cb=150) owstaxIdBLGRole:8fe69b8e-8fa1-4a48-9af2-4809b7f1604e) "; //Chair 
                query += "XRANK(cb=100) owstaxIdBLGRole:4712055d-47e4-4bd2-9d2a-bdc948a4cdfc) "; //Member 
                query += "XRANK(cb=75) owstaxIdBLGRole:1554975b-46b6-49b8-aa22-6e58734709dd) "; //Category Owner  
                query += "XRANK(cb=50) (owstaxIdBLGRole:bca79b14-31d2-4db5-904f-ba2c5939f4d7 OR owstaxIdBLGRole:e098da1d-4323-4837-926f-72330553f392)) "; //Office Service Managers, Professional Recruiting Manager

                var sortList = new Array();
                sortList.push("Rank:descending");
                sortList.push("Title:ascending");

                var result = this.executeSearch(query, selectProperties, this.localResultSourceId, sortList, callback, this.onQueryFail);

                return result;
            }

            return null;
        },


        getLeadersDataWithFilter: function (users, managedProperties, additionalFilter, callback) {

            var selectProperties = managedProperties != null ? managedProperties : this.defaultLeadersManagedProperties;

            if (users != null && users != "") {
                var userArray = users.split(";");

                var userAccounts = new Array();

                $.each(userArray, function () {
                    var user = this.split("|");

                    if (user.length > 1) {
                        userAccounts.push("BLGUserOWSUSER:" + user[3]);
                    }
                    else {
                        userAccounts.push("BLGUserOWSUSER:" + user[0]);
                    }
                });

                var query = "(((((((((((((((ContentType:\"BLG Leaders\" AND (" + userAccounts.join(" OR ") + ") " + additionalFilter + " ";
                query += "XRANK(cb=1000) owstaxIdBLGRole:2ccf069e-780b-4142-95ca-c79d94e638ec) "; //National Managing Partner & CEO
                query += "XRANK(cb=900) owstaxIdBLGRole:eeb1daef-6388-4605-acd4-d614ffbda40b) "; //National Group Head
                query += "XRANK(cb=800) owstaxIdBLGRole:4379334b-3978-4f32-90dd-cbb71b98a1e4) "; //National Practice Group Leader
                query += "XRANK(cb=700) owstaxIdBLGRole:640fdf4c-5d44-4bb0-987f-fc96c9b9652a) "; //Regional Managing Partner
                query += "XRANK(cb=600) (owstaxIdBLGRole:ee66c843-e0b8-444a-9b7c-3e3ee8c6d3d4 OR owstaxIdBLGRole:79d22ded-781b-4b55-9fbd-ae2c347c2544 OR owstaxIdBLGRole:812f8166-12a6-4d2c-840c-4698dd80b35d)) "; //Chief Operation Officer, Chief Talent Officer, Chief Practice Managers
                query += "XRANK(cb=500) (owstaxIdBLGRole:5c3f0f72-8d87-43b5-9158-b33d71ba4d07 OR owstaxIdBLGRole:c0107592-025f-433d-964d-344d0e77636a OR owstaxIdBLGRole:014b0f67-c80a-41cd-95e5-c467a084dce9 OR owstaxIdBLGRole:45784497-586c-46b1-829e-51b2e65016e8)) "; //Chief Financial Officer, National Director of Business Development, National Director of Communications & Marketing, Chief Information Officer
                query += "XRANK(cb=400) owstaxIdBLGRole:0da2ff10-eaa9-4e3f-a5e4-2e10a31cfc21) "; //Focus Group Leader
                query += "XRANK(cb=300) owstaxIdBLGRole:b249da5d-7124-4f78-924f-9f295f595335) "; //Regional Group Representative
                query += "XRANK(cb=200) owstaxIdBLGRole:d1c1057f-32a2-4b5a-8ff1-47527b70eade) "; //BD Leader
                query += "XRANK(cb=180) owstaxIdBLGRole:c208c80c-9f01-404e-bff9-24320dd0949e) "; //Director of Technical Support Services
                query += "XRANK(cb=170) owstaxIdBLGRole:3c55a669-4659-47d3-9ed1-498ffd87a1af) "; //IT Regional Manager
                query += "XRANK(cb=150) owstaxIdBLGRole:8fe69b8e-8fa1-4a48-9af2-4809b7f1604e) "; //Chair 
                query += "XRANK(cb=100) owstaxIdBLGRole:4712055d-47e4-4bd2-9d2a-bdc948a4cdfc) "; //Member 
                query += "XRANK(cb=75) owstaxIdBLGRole:1554975b-46b6-49b8-aa22-6e58734709dd) "; //Category Owner  
                query += "XRANK(cb=50) (owstaxIdBLGRole:bca79b14-31d2-4db5-904f-ba2c5939f4d7 OR owstaxIdBLGRole:e098da1d-4323-4837-926f-72330553f392)) "; //Office Service Managers, Professional Recruiting Manager

                var sortList = new Array();
                sortList.push("Rank:descending");
                sortList.push("Title:ascending");

                var result = this.executeSearch(query, selectProperties, this.localResultSourceId, sortList, callback, this.onQueryFail);

                return result;
            }

            return null;
        },

        getTermLabels: function (input) {

            return input;
        },

        executeSearch: function (queryText, managedProperties, queryResultSourceId, sortList, onSuccess, onFail) {

            var context = SP.ClientContext.get_current();
            var keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(context);
            keywordQuery.set_queryText(queryText);

            if (queryResultSourceId != null) {
                keywordQuery.set_sourceId(queryResultSourceId);
            }

            if (managedProperties != null && managedProperties != "") {
                var properties = keywordQuery.get_selectProperties();

                $.each(managedProperties, function () {
                    properties.add(this);
                });
            }

            if (sortList != null && sortList != "") {
                keywordQuery.set_enableSorting(true);
                var sortproperties = keywordQuery.get_sortList();

                $.each(sortList, function () {
                    var sortExp = this;
                    var sortOrder = 0; // If unspecified, default to Ascending (the value 0)

                    if (sortExp.indexOf(":") > -1) {
                        var split = sortExp.split(':');
                        sortExp = split[0];
                        var s = split[1].toLowerCase();
                        if (s == "descending" || s == "desc")
                            sortOrder = 1; // Descending = 1
                    }

                    sortproperties.add(sortExp, sortOrder);
                });
            }

            // Set Trim Duplicates to False
            keywordQuery.set_trimDuplicates(true);

            var searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(context);
            var queryResults = searchExecutor.executeQuery(keywordQuery);

            context.executeQueryAsync(onSuccess, onFail);

            return queryResults;
        }
    }
