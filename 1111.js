(function(){
var _experience
, _videoPlayer
, currentVideo;
 
player = brightcove.api.getExperience();
 
_experience = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
_videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
 
if(_experience.getReady())
{
initialize();
}
else
{
_experience.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY, initialize);
}
 
_experience.getExperienceID(function(pExperienceID){
console.log(pExperienceID);
});
 
function initialize()
{
_videoPlayer.getCurrentVideo(function(pVideoDTO){
console.log(pVideoDTO.displayName);
});
}
}());
