(function() {
    console.log("*********** mediaEventPlugin.js has loaded ******************");

   myTemplateLoaded = function (experienceID) {
    console.log("loaded");
    player = brightcove.api.getExperience(experienceID);
    modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    modExp = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    modCon = player.getModule(brightcove.api.modules.APIModules.CONTENT);
}

onTemplateReady = function (evt) {
    console.log("ready");
   
}
}());
