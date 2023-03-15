const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("timeupdate",(function(){console.log("played the video!"),o.getCurrentTime().then((function(e){console.log(e)}))})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.off("play");
//# sourceMappingURL=02-video.2e6aa9ae.js.map
