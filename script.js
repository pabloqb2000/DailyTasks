let cards = null;

$( document ).ready(function() {
    $.getJSON("info.json", function(json) {
        cards = json["cards"];
    });
});

function choose(choices) {
var index = Math.floor(Math.random() * choices.length);
return choices[index];
}

function change() {
    card = choose(cards);
    $('.my-card h3').html(card["name"]);
    $('.my-card img').attr("src", "imgs/"+card["file"]);
    $('.my-card ol').empty();
    $.each(card["list"], function(index, item) {
        $('.my-card ol').append('<li>' + item + '</li>');
    });
}