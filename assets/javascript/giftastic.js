

var topics = ["fail","dog", "cat", "dancing", "baby", "frog", "laughing", "crying", "glare", "mood", "trending", "puns"];




function renderButtons() {
    $("#buttons").empty();
    for (var i=0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("new-topic");
        newButton.attr("data-name", topics[i]);
        newButton.text(topics[i]);
        $("#buttons").append(newButton);
    }
}
$("#addSearch").on("click", function(event) {
    event.preventDefault();
    var search =$("#keywordSearch").val();
    topics.push(search);
    renderButtons();
    $("#keywordSearch").val("");

});
function displayGIF() {
    var searchTerm =$(this).attr("data-name");

// $("#buttons").on("click", function(event) {
    // event.preventDefault();
    var searchTerm =$(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var searchDiv = $("<div>");
            var rating = results[i].rating;
            var p =$("<p>").text("Rating: " + rating);
            var searchImage =$("<img>");
            //I would change the images link below to images.fixed_height_still.url to pause gifs
            searchImage.attr("src", results[i].images.fixed_height.url);
            searchDiv.prepend(p, searchImage);
            $("image-display").prepend(searchDiv);

$("#image-display").prepend(searchDiv);
       
        }
    })    

}


//MY ATTEMPT AT PAUSING GIFS
// $(".gif").on("click", function() {
//     var state =$(this).attr("data-state");
//     var stillURL=$(this).attr("data-still");
//     stillURL.attr("src", results[i].images.fixed_height_still.url);
//     var animatedURL=$(this).attr("data-aniamte");
//     animatedURL.attr("src", results[i].images.fixed_height.url);

// if (state) {
//     $(this).attr({
//         "src": animatedURL,
//         "data-state": "animate",
//     }) 

//     } else { 
//         $(this).attr({
//             "scr": stillURL,
//             "data-state": "still",
//         })
//     }
// })




$(document).on("click", ".new-topic", displayGIF);


renderButtons();
