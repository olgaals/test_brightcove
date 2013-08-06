(function() {
    console.log("**yEventPlugin.js has loaded ******************");


function onPlayerReady(){
    console.log("ready");
     $("div[id$='bc12']").live("ready", function(){
         $("div[id$='bc12']").remove();
     });
         $('.vjs-controls').remove();  
}

$(window).ready( function () {
    $("div[id$='bc12']").remove();
         $('.vjs-controls').remove();  
});

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    if (experience.getReady()) {
        onPlayerReady();
    } else {
        experience.addEventListener(brightcove.api.events.MediaEvent.BEGIN, onPlayerReady);
    }
}());
