$(function() {
    var sentences = [
        "Let me put on my slippers first.",
        "I don't want to sit next to Dominik.",
        "Skype me a Hipchat message on my e-mail.",
        "Sorry, reinstalling Windows. Try again in 8 hours.",
        "Try Google.",
        "Are you still chewing? Let me know when your mouth is ready.",
        "Are you sure your computer is plugged in?",
        "Boot in safe mode.",
        "Call the care police.",
        "I can grill some meat."
    ];
    var getRandomInteger = function(min, max) {
        return Math.floor((Math.random() * max) + min);
    };

    var randomInteger = getRandomInteger(0, sentences.length - 1);

    var randomSentence = sentences[getRandomInteger(0, sentences.length - 1)];

    $(".sentence").append(randomSentence);
});