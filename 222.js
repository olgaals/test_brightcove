(function() {
    console.log("****rertgrtrtgt*** EventPlugin.js has loaded ******************");
    times=0;

 onPlayerReady=function(){
    console.log("ready");
    
    alert($("div[id$='bc12']").remove());
     $('.vjs-controls').remove();  
     
    
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    //interval=setInterval(onPlayerReady, 10);
  onPlayerReady;
        
}());
