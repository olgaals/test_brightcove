(function() {
    console.log("****r** EventPlugin.js has loaded ******************");
    times=0;
    deleted=0;

 onPlayerReady=function(){
    console.log("ready");
    if($("div[id$='bc12']").length>0){
     
    }
    if($("div[id$='bc12']").length>0){    

    }
     
    
}

player = brightcove.api.getExperience();
    videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
    if(experience.getReady()){
        onPlayerReady();
    }
    
    window.onload=function(){

        console.log("DOM loaded1!");
        if($("div[id$='bc12']").length>0){
            console.log("elem loaded1!");
        }
    };
    $(document).ready(function() {
         console.log("DOM loaded2!");
         if($("div[id$='bc12']").length>0){
            console.log("elem loaded2!");
        }
    });

// or

$(function() {
   console.log("DOM loaded3!");
   if($("div[id$='bc12']").length>0){
            console.log("elem loaded3!");
        }
});

        
}());
