let cards = null;
let idx = 0;

$( document ).ready(function() {
    $.getJSON("info.json", function(json) {
        cards = shuffle(json["cards"]);
        change();
    });
});

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function change() {
    let card = cards[idx % cards.length];
    
    $('.my-card h3').html(card["name"]);
    $('.my-card img').attr("src", "imgs/"+card["file"]);
    $('.my-card ol').empty();
    $.each(card["list"], function(index, item) {
        $('.my-card ol').append('<li>' + item + '</li>');
    });

    idx++;
}