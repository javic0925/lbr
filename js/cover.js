document.addEventListener('DOMContentLoaded', function() {
    let np = document.getElementById('coverArt'),
        url = 'https://c20.radioboss.fm/w/nowplayinginfo?u=354';

    function updateTitle() {
        let req = new XMLHttpRequest();
        req.onload = function (e) {
            if (req.response.live === true) {
                np.src = `./Assets/DJS/${req.response.nowplaying}.webp`;}
            else{
                np.src = `./Assets/Imgs/PatternLB.webp`;
            }
        };
        req.open('GET', url + '&_=' + new Date().getTime(), true);
        req.responseType = 'json';
        req.send();
    }


    updateTitle();
    console.log(updateTitle);
    setInterval(updateTitle, 5000);
    
});