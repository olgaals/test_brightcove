(function() {
    console.log("*********t*** EventPlugin.js has loaded ******************");
    times=0;

function onPlayerReady(){
    console.log("ready");
     $("div[id$='bc12']").remove();
     $('.vjs-controls').remove();  
     times=51;
     
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    while(times<50){
    setTimeout(function(){ if (experience.getReady()) {
            onPlayerReady();
        }; }, 100);
        times++;
    }
        
}());
