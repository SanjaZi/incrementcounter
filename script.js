let twitterCounter = document.getElementById('twitterCounter');
let youtubeCounter = document.getElementById('youtubeCounter');
let facebookCounter = document.getElementById('facebookCounter');


function setCounters() {
let countertw = 0;
let counteryt = 0;
let counterfb = 0;
setInterval(() => {
    countertw = countertw + 100
   if (countertw < 12100) {
    twitterCounter.innerHTML=(countertw);
   }
   
}, 10);

setInterval(() => {
    counteryt = counteryt + 30
   if (counteryt < 5030) {
    youtubeCounter.innerHTML=(counteryt);
   }
   
}, 10);

setInterval(() => {
    counterfb = counterfb + 50
   if (counterfb < 7550) {
    facebookCounter.innerHTML=(counterfb);
    console.log(counterfb);
   }
   
}, 10);

}

setCounters();
