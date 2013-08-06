(function() {
    console.log("*********t*** EventPlugin.js has loaded ******************");
    times=0;

function onPlayerReady(){
    console.log("ready");
     $("div[id$='bc12']").remove();
     $('.vjs-controls').remove();  
    setTimeout(onPlayerReady(), 100);
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    onPlayerReady();
  
        
}());
