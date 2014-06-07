$(function() {
    var sentences = [
        "Let me put on my slippers",
        "Sentence Two Bla Bla",
        "Sentence Three Bla Bla",
        "Sentence Four Bla Bla"
    ];
    var getRandomInteger = function(min, max) {
        return Math.floor((Math.random() * max) + min);
    };

    var randomInteger = getRandomInteger(0, sentences.length - 1);

    var randomSentence = sentences[getRandomInteger(0, sentences.length - 1)];

    $(".sentence").append(randomSentence);
});