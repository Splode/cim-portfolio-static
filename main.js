// Jumbotron Intro Word List
var wordList = [
    "cycling",
    "action flicks",
    "great books",
    "great design",
    "invigorating challenges",
    "contemporary art",
    "learning new skills",
    "brilliant ideas",
    "making furniture",
    "quiet moments",
    "smart, fatalistic dramas",
    "coding",
    "hikes in alpine settings",
    "esoteric vocabulary",
    "board games",
    "clean drawings",
    "elegant connections",
    "creative problem solving",
    "learning",
    "working with my hands",
    "gripping stories",
    "reading",
    "engaging games",
    "strong coffee",
    "the golden hour",
    "star-gazing",
    "clearly structured and commented code",
    "elegant architecture",
    "white space",
    "grids",
    "connecting with people in meaningful ways"
    ];

// random integer generation
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random string from wordList
function getWord() {
	var i = getRandomInt(0, wordList.length);
	return wordList[i];
}

// animate Intro wordList function
function words() {
 	var $spanWords = $("#words");
    
    setInterval(function() {
        getWord();
        $($spanWords).animate({"opacity": 0}, 1000, function() {
        	$($spanWords).text(getWord());
        }).animate({"opacity": 1}, 1000);
        }, 4000);
}

// Main scripting
$(document).ready(function() {
   //wordList ticker
   words();
  
  //smooth scroll
   $('a').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
	});
});