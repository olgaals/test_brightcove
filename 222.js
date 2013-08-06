(function() {
    console.log("**********sdfvdfsvdfsvdfsvdfs* mediaEventPlugin.js has loaded ******************");


function onPlayerReady(){
    console.log("ready");
        
}

$('document').ready(function(){
    $("div[id$='bc12']").remove();
         $('.vjs-controls').remove();
});

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    if (experience.getReady()) {
        onPlayerReady();
    } else {
        experience.addEventListener(brightcove.player.events.ExperienceEvent.TEMPLATE_READY, onPlayerReady);
    }
}());
