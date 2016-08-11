$(function() {
    var sentences = [
        "Let me put on my slippers first.",
        "I don't want to sit next to Dominik.",
        "Skype me a Hipchat message on my e-mail.",
        "Sorry, reinstalling Windows. Try again in 8 hours.",
        "I can grill some meat.",
        "Only if you have an ID and are above 18 y.o.",
        "Sorry, I don't know how giftcards work. Can't help you.",
        "Just use duct tape.",
        "One Mozzarella salad.",
        "Live long and prosper.",
        "My old PC is VR-ready",
        "My hands are the favourite part of my body. I do all my favourite things with them."
    ];
    var getRandomInteger = function(min, max) {
        return Math.floor((Math.random() * max) + min);
    };

    var randomInteger = getRandomInteger(0, sentences.length - 1);

    var randomSentence = sentences[getRandomInteger(0, sentences.length - 1)];

    $(".sentence").append(randomSentence);
});
