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
            // this varible basically shortens response.data to results to make it loook nicer...
            var results = response.data;
            // this will empty the gifDiv before the for loop so the user doesnt have to scroll as much
            $("#gifs-appear-here").empty(gifDiv);
            // for eash object in the reponse, do this stuff...
            for ( var i = 0; i < results.length; i++) {
            // Make a new div with a class of item to hold each gid
            var gifDiv = $("<div class='item'>");
            // stores the rating...
            // var rated = results[i].rating;
            // creates a p tag for the rating 
            // var p = $("<p>").text("Rating: " + rated);
            // creates and image tag for the gif
            var gifTag = $("<img style='float:left; margin:10px;'>");
            // this gives the new image tag an source atrribute of whichever itteration thruogh the results object its on...
            gifTag.attr("src", results[i].images.fixed_height.url);
            // this appends the new paragraph to the new gifDiv that was created 
            // gifDiv.append(p);
            // this appends the gifTag to the gifDiv
            gifDiv.append(gifTag);
            // finaly this appends the difDiv to the html(inside the #gif-appear-here div)
            
            $("#gifs-appear-here").append(gifDiv);


            }
            

        });

    }

    // render buttons on screen...
    function renderButtons() {
        // so we dont get a bunch of duplicate buttons when you search....
        $("#button-div").empty();
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

    $(".newGif").on("click", function(event) {
        event.preventDefault();
        // this gets the value from the search bar...
        var search = $(".search").val().trim();
        console.log(search);
        // this pushes the search bar value to the gifs array
        gifs.push(search);
        // this refires the render button function for the new button to be rendered
        renderButtons();
    });
    // this wires the click to the showGifs function...
    $(document).on("click", ".gif-btn", showGifs);
    // this renders our original buttons
    renderButtons();
});

// add code to pull still img and click function that sawps the still img for the gif... 
// might need an if/else for pausing and unpausing gif... 
// will probably need display none.
