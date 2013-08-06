(function() {
    console.log("**********sdfvdfsvdfsvdfsvdfs* mediaEventPlugin.js has loaded ******************");


function onPlayerReady(){
    console.log("ready");
    element = document.getElementById('$bc13');
         element.parentNode.removeChild(element);
         $('.vjs-controls').remove(); 
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    experience.addEventListener(brightcove.player.events.ExperienceEvent.TEMPLATE_READY, onPlayerReady);
}());
