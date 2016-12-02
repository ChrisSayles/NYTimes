

    // Search Term
    // Number of records
    // Start Year
    // End year
    // Top Articles

    // $("#search").on("click", function() { //add this back
    //Article Search API: df04ac9d5b75418da22f348bc63aba52



    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "df04ac9d5b75418da22f348bc63aba52",
        'q': "batman", //search
        // 'fl': "5", //limit search
        'begin_date': "20160415", //begin date
        'end_date': "20161115" //end date
    });
         'begin_date': "20160415", //begin date
        'end_date': "20161115" //end date
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
        // var i = 0;
        for (i = 0; i < result.response.docs.length; i++) {
            console.log(result.response.docs[i].lead_paragraph);
            //write to page
            $("#results").append(result.response.docs[i].lead_paragraph);
            $("#results").append("<div>" + result.response.docs[i].byline.original + "</div>");
            $("#results").append("<div></div>");
        }
    }).fail(function(err) {
        throw err;
        });
    });
    }