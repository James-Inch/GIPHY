$(document).ready(function () {

    var gifs = ["Skateboarding", "Surfing", "Snowboarding", "Battlefield 3", "Battlefield 4", "GTA V", "PUBG", "Fortnite", "Rock Climbing", "Dogs", "Cats", "Boats", "Wake surfing", "Rick and Morty", "Motorcycles"];

    function showGifs() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FfsRcexIXPCCc9p9uV0nTQ9veDJtzk61&q=" + gif + "&limit=10&offset=0&rating=G&lang=en";

        // Creating an AJAX call for the GHIPY data
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            // console.log(results)
            for ( var i = 0; i < results.length; i++) {

            var gifDiv = $("<div class='item'>");

            var rated = results[i].rating;

            console.log(results[i]);

            console.log(rated);

            var p = $("<p>").text("Rating: " + rated);

            var gifTag = $("<img>");

            gifTag.attr("src", results[i].images.fixed_height.url);
            
            gifDiv.append(p);
            gifDiv.append(gifTag);

            $("#gifs-appear-here").append(gifDiv);
            }
             

        });

    }

    // render buttons on screen...
    function renderButtons() {

        // loop throught gifs array...
        for (i = 0; i < gifs.length; i++) {

            // for each itteration...
            // create button tag...
            var btn = $("<button>");
            // add class gif-btn...
            btn.addClass("gif-btn");
            // add a data-attribute()
            btn.attr("data-name", gifs[i]);
            // add text to the button
            btn.text(gifs[i]);
            // add button to button-div
            $("#button-div").append(btn);
        }
       
    }

    $(document).on("click", ".gif-btn", showGifs);

    renderButtons();

});

