(function() {
    console.log("****rertgrtrtgt*** EventPlugin.js has loaded ******************");
    times=0;
    deleted=0;

 onPlayerReady=function(){
    console.log("ready");
    if($("div[id$='bc12']").length>0){
        $("div[id$='bc12']").remove();
        deleted++;
    }
    if($("div[id$='bc12']").length>0){    
        $('.vjs-controls').remove();  
        deleted++;
    }
     
    
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    onPlayerReady;

        
}());
