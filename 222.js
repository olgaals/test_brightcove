(function() {
    console.log("*********t*** EventPlugin.js has loaded ******************");
    times=0;

function onPlayerReady(){
    console.log("ready");
    if(experience.getReady()){
     $("div[id$='bc12']").remove();
     $('.vjs-controls').remove();  
     return null;
    }
    setTimeout(onPlayerReady(), 500);
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    onPlayerReady();
  
        
}());
