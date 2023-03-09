let twitterCounter = document.getElementById('twitterCounter');
let youtubeCounter = document.getElementById('youtubeCounter');
let facebookCounter = document.getElementById('facebookCounter');


function setCounters() {
let counter = 0;

setInterval(() => {
    counter = counter + 100
   if (counter < 12100) {
    twitterCounter.innerHTML=(counter);
   }
   
}, 10);

setInterval(() => {
    counter = counter + 30
   if (counter < 5030) {
    youtubeCounter.innerHTML=(counter);
   }
   
}, 10);

setInterval(() => {
    counter = counter + 50
   if (counter < 7550) {
    facebookCounter.innerHTML=(counter);
   }
   
}, 10);

}

setCounters();
