(function() {
    console.log("**********sdfvdfsvdfsvdfsvdfs* mediaEventPlugin.js has loaded ******************");


function onPlayerReady(){
    console.log("ready");
         $("div[id$='bc11']").remove();
         $('.vjs-controls').remove(); 
}
$('document').load(function(){
    console.log('fewfedfgbgfdbdgfbdgfhbdhbdrthdfhbdfhdwfewfew');
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
