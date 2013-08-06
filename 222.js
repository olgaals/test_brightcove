(function() {
    console.log("************** EventPlugin.js has loaded ******************");
    times=0;

function onPlayerReady(){
    console.log("ready");
     $("div[id$='bc12']").remove();
     $('.vjs-controls').remove();  
     
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
 
        if (experience.getReadyAsync()) {
            onPlayerReady();
        };
        
}());
