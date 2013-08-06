(function() {
    console.log("*********** mediaEventPlugin.js has loaded ******************");
    


    player = brightcove.api.getExperience();

    onTemplateReady = function(env){
        console.log("ready!!!!");
    }
}());
