(function() {
    console.log("******************** EventPlugin.js has loaded ******************");
    times=0;

function onPlayerReady(){
    console.log("ready");
     $("div[id$='bc12']").remove();
     $('.vjs-controls').remove();  
     clearInterval(interval);
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    interval=setInterval(function(){
        if (experience.getReady()) {
            onPlayerReady();
        };
        times++;
        if(times>50){
            clearInterval(interval);
        }
    },100);
}());
