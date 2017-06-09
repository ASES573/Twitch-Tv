$(document).ready(function(){
 basicOperation();
  
$(".btn").on("click",function(){
$("#displayHere").html("");
  basicOperation();
});
 
 
});
function basicOperation(){
 streamsArr=  ["ESl_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","brunofin","comster404"];

 for(var count=0;count<streamsArr.length;count++){ 
getJSONFromTwitch(streamsArr[count]);
} 
}


function getJSONFromTwitch(arrayVal){
$.ajax({
url:"https://api.twitch.tv/kraken/streams/"+arrayVal,
headers: { "Client-ID" : "b1xe3jg0za97oxd0ds6jdfzz65tvk9" },
type:"GET",
success:function(data){
  if(JSON.stringify(data.stream)=="null")
   {
$("#displayHere").append("<a class =\"stylehover\" href=\"https://www.twitch.tv/"+arrayVal+"\" target=\"_blank\">"+"<div class=\"jumbotron row each-channel\"><div class=\"col-md-4\"><img class=\" img-responsive\"  src=\"https://placeholdit.imgix.net/~text?txtsize=25&txt=?&w=50&h=50\"></div><div class=\"col-md-8\"><span style=\"font-size:1.3em;\"> "+arrayVal+": </span><span style=\"color:red;\"> OFFLINE</span></div></div></a>");
}
  else if(data.hasOwnProperty("error"))
    {
     
$("#displayHere").append("<a class =\"stylehover\" href=\"https://www.twitch.tv/"+arrayVal+"\" target=\"_blank\">"+"<div class=\"jumbotron row each-channel\"><div class=\"col-md-4\"><img class=\" img-responsive\"  src=\"https://placeholdit.imgix.net/~text?txtsize=25&txt=X&w=50&h=50?\"></div><div class=\"col-md-8\"><span style=\"font-size:1.3em;\"> "+arrayVal+": </span><span style=\"color:red;\"> NOT FOUND</span></div></div></a>");
}
  else{

$("#displayHere").append("<a class =\"stylehover\" href=\"https://www.twitch.tv/"+arrayVal+"\" target=\"_blank\">"+"<div class=\"jumbotron row each-channel\"><div class=\"col-md-4\"><img class=\" img-responsive\" src=\"" + data.stream.channel.logo.replace("300x300","50x50") + "\"></div><div class=\"col-md-8\"><span style=\"font-size:1.3em;\">  "+JSON.stringify(data.stream.channel.display_name).replace(/"/g,"")+": </span><span style=\"color:green;\">"+JSON.stringify(data.stream.game).replace(/"/g,"")+"</span></div></div></a>");
}
}
});
}
