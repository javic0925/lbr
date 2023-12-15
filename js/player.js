$(function () {
    var song = document.getElementsByTagName('audio')[0],
        sourceMp3 = document.getElementsByTagName('audio')[0];

    sourceMp3.src = 'https://c20.radioboss.fm:18354/stream';


    $('#player').click(function (e) {
        e.preventDefault();
        if (song.paused) song.play();
        else 
        song.setAttribute('src' , 'https://c20.radioboss.fm:18354/stream'); 
    
    });
    $('#player').bind('click', function() {
        if ($('#playback').attr('class') == 'fa fa-stop fa-lg beat')
            $('#playback').attr('class', 'fa fa-play fa-lg');
        else
            $('#playback').attr('class', 'fa fa-stop fa-lg beat');
    });

    song.addEventListener('pause', function () {
        song.setAttribute('src' , 'https://c20.radioboss.fm:18354/stream');
        song.currentTime = 0;
        $('#playback').attr('class', 'fa fa-play fa-lg');
    });

    

    



    
});


let mediaSession = navigator.mediaSession;

if ("mediaSession" in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: "La Boom",
      artist: "",
      album: "Radio",
      artwork: [{src: "https://c20.radioboss.fm/w/artwork/354.png"}]
    });}
