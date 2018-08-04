/* 
I need and array to hold all my initial buttons 
loop thru the array
*/

$(document).ready(function () {

    var gifs = ["Skateboarding", "Surfing", "Snowboarding", "Battlefeild 3", "Battlefeild 4", " Battlefeild V", "Fortnite", "Rock Climbing", "Dogs", "Cats", "Boats", "Wake surfing", "Rick and Morty", "Motorcycles"];

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

    function showGifs() {
        // somthing isnt working here
        var gif = $(".git-btn").attr("data-name");
        console.log(gif)
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FfsRcexIXPCCc9p9uV0nTQ9veDJtzk61&q=dogs&limit=25&offset=0&rating=G&lang=en";

        // Creating an AJAX call for the GHIPY data
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=FfsRcexIXPCCc9p9uV0nTQ9veDJtzk61&q=dogs&limit=25&offset=0&rating=G&lang=en",
            method: "GET"
        }).then(function (response) {

            
            var rated = response.data.rating;
            
            console.log(rated);

        });

    }





    $(document).on("click", ".gif-btn", showGifs);

    renderButtons();

});



// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.

// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// Rejoice! You just made something really cool.
