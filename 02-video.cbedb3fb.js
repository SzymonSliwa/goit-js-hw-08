!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("timeupdate",(function(){console.log("played the video!"),o.getCurrentTime().then((function(e){console.log(e)}))})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.off("play")}();
//# sourceMappingURL=02-video.cbedb3fb.js.map
