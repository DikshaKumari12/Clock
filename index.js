function clock(){
    
    var currenttime = new Date();
     var h = currenttime.getHours()%12 ||12;
     var m = currenttime.getMinutes();
     var s = currenttime.getSeconds();

     document.getElementById("hours").innerHTML=h;
     document.getElementById("minutes").innerHTML=m;
     document.getElementById("seconds").innerHTML=s;
    
    
    
    }
 var interval= setInterval(clock,1000);