var topics = ["dog", "cat", "dancing", "baby"];




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
            searchImage.attr("src", results[i].images.fixed_height.url);
            searchDiv.prepend(p, searchImage);
            $("image-display").prepend(searchDiv);

$("#image-display").prepend(searchDiv);
        // }
    
        }
    })    

}







$(document).on("click", ".new-topic", displayGIF);


renderButtons();
