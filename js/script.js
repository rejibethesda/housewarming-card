/**
 * @author Chetan KUmar <chethanastakar@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

function myFunction() {
    var x = document.getElementById("tapme");
    x.style.display = "none" 
    }

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Welcome Home');
});

// Set the date we're counting down to
var countDownDate = new Date("May 11, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Output the result in an element with id="demo"

    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "You’re Invited to Celebrate with Us and Bless Us!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 3px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 10px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 15px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 10px'
    , 'font-weight: bold'
    , 'font-size: 15px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 10px'
    , 'font-weight: bold'
    , 'font-size: 15px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 11th May, 2023!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

console.log(
    `%Ghar ko zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
