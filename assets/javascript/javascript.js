



var games = ["Mario", "The Legend of Zelda", "Metroid Prime"];

function displayGameInfo() {

    let index = $(this).attr("data-index");

    $("#game-data").empty();       

    var game = games[index];

    console.log(game)


var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=8TtNr1dlzsMgfp2Kyz0AJapRW6QygNaL&limit=9"
  
 $.ajax({
    url: queryURL, 
    method: "GET"}).done(function (response){
    console.log(response);     
    var results = response.data;
   
for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='col-4'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);
    
            var gameImage = $("<img>");
        
            gameImage.attr("still", results[i].images.original_still.url)
            gameImage.attr("active", results[i].images.original.url)
            gameImage.attr("src", gameImage.attr("still"));

            gifDiv.prepend(p);
            gifDiv.prepend(gameImage);

            $("#game-data").append(gifDiv);

            gameImage.on("click", function(){
        
              if($(this).attr("src") === $(this).attr("still")){
                  console.log("heyo");
                  console.log(this);
            			$(this).attr('src', $(this).attr('active'));

            		} else {
            			$(this).attr('src', $(this).attr('still'));
                        console.log(this);
            		}  
});
}})};

function renderButtons() {

        
        $("#buttons-view").empty();

        
        for (var i = 0; i < games.length; i++) {

          
          var a = $("<button>");
          
          a.addClass("game");
          
          a.attr("data-index", i);
          
          a.text(games[i]);
          
          $("#buttons-view").append(a);
        }
      }




   



$("#add-game").on("click", function() {
event.preventDefault();

    
    
 var game = $("#game-input").val().trim(); 
 
    
    console.log(game);
    
    games.push(game);
    
    renderButtons(); 
});



 
   
    

 
$(document).on("click", ".game", displayGameInfo);             
renderButtons();              




