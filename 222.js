(function() {
    console.log("*****tg******* mediaEventPlugin.js has loaded ******************");
    


    player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
}());
