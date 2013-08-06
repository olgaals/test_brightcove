(function() {
    console.log("*********** mediaEventPlugin.js has loaded ******************");


if(brightcove.api.events.ExperienceEvent.TEMPLATE_READY){
    element = document.getElementById('$bc13');
         element.parentNode.removeChild(element);
         $('.vjs-controls').remove(); 
   
}
}());
