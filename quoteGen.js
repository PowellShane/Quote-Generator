$(document).ready(function() {
  function getQuote() {
    var quotes = ["Moral indignation is jealousy with a halo", "Glory is fleeting, but obscurity is forever", "If a man does his best, what else is there?", "Give me a museum and I'll fill it"];
    var author1 = ["-H. G. Wells", "-Napoleon Bonaparte", "-General George S. Patton", "-Pablo Picasso"];
    var randomNum = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomNum];
    var randomAuthor = author1[randomNum];
    $(".quotes").text(randomQuote);
    $(".author1").text(randomAuthor);
  }

  $(".btn").on("click", function() {
    getQuote();
  });
});
