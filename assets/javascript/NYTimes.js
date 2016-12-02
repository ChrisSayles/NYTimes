// Search Term
// Number of records
// Start Year
// End year
// Top Articles

// $("#search").on("click", function() { //add this back
//Article Search API: df04ac9d5b75418da22f348bc63aba52

//search
// endYear
// startYear
// numRecordsSelect
// searchTerm
$(document).ready(function() {

    function queryData() {


        var searchTerm = "'" + $("#searchTerm").val() + "'";

        var startYear = $("#startYear").val();
        console.log(startYear);
        var endYear = $("#endYear").val();

        if (startYear === "") {
            startYear = "20151104";
            console.log("startYear = null setting to default date " + startYear);
        } else {
            startYear = $("#startYear").val();
            console.log("assigning value to start year " + startYear);
        }

        if (endYear === "") {
            endYear = "20161104";
            console.log("endYear = null setting to default date " + endYear);
        } else {
            endYear = $("#startYear").val();
            console.log("assigning value to end year " + endYear);
        }

        var recordsRequested = parseInt($("#numRecordsSelect").val());

        //use this code for next button.
        // if (recordsRequested = 30) {
        //     recordsRequested = 2;
        // } else if (recordsRequested = 20) {
        //     recordsRequested = 1;
        // } else if (recordsRequested = 10) {
        //     recordsRequested = 0;
        // }

        console.log("num records selected: " + recordsRequested);
        console.log(searchTerm);


        event.preventDefault();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "df04ac9d5b75418da22f348bc63aba52",
            'q': searchTerm, //search
            'begin_date': startYear, //begin date
            'end_date': endYear //end date

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            // console.log(url);
            console.log(result);
            for (i = 0; i < recordsRequested; i++) {
                console.log(result.response.docs[i].lead_paragraph);
                console.log("num records selected: " + recordsRequested);
                //write to page
                $("#wellSection").append("<div>" + (i + 1) + "</div>");
                $("#wellSection").append(result.response.docs[i].lead_paragraph);
                $("#wellSection").append("<div>" + result.response.docs[i].byline.original + "</div>");
                $("#wellSection").append("<div></div>");
            }
        }).fail(function(err) {
            throw err;
        });
    };

    $("#Search").on("click", queryData);
});
