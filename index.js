function clock(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    var am= "AM";


    if(a > 12){
        a = a - 12;
        am = "PM";
    }  
    
    a = (a < 10) ? "0" + a : a
    b = (b < 10) ? "0" + b : b
    c = (c < 10) ? "0" + c : c

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    ampm.innerHTML=am;
}
setInterval(clock,1000);



function settime(){

    var h=document.getElementById("naptime-selector").value;
    var i=document.getElementById("lunchtime-selector").value;
    var j=document.getElementById("wakeuptime-selector").value;


    var hourr =new Date().getHours();

    if(h==hourr){
        document.getElementById("bottom-img").style.backgroundImage="url(./napp.png)";
        document.getElementById("text-show").innerHTML="GOOD NIGHT !!";
    }else if(i==hourr){
        document.getElementById("bottom-img").style.backgroundImage="url(./lunchh.png)";
        document.getElementById("text-show").innerHTML="LET'S HAVE SOME LUNCH !!";
    }else if(j==hourr){
        document.getElementById("bottom-img").style.backgroundImage="url(./wakee.png)";
        document.getElementById("text-show").innerHTML="IT'S TIME TO WAKE UP !!";
    }
    }



function emptydiv(){
    var container = document.createElement('div');
    container.className="grid-container1";
    
document.getElementsByClassName('grid-container1').appendChild(container);
    var invalue=document.getElementById("naptime-selector");
    var value= invalue.option[invalue.selectedIndex].text;
    document.getElementById("empty-block").innerHTML="Nap Time"+value;
}

emptydiv();
