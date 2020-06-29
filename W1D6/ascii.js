(function(){
    "use strict";

    var timer = null,
        // turbo = 250,
        x = 0,
        text = null,
        frame = null,
        temp = null;

    /** Start action */
    function clickStart(){
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("text-area").disabled = true;
        document.getElementById("animation").disabled = true;
        run(250);
    };

    /** Stop action */
    function clickStop(){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("text-area").disabled = false;
        document.getElementById("animation").disabled = false;

        // stop interval
        clearInterval(timer);
        timer = null;
    };

    /* Start moving animation */

    function run(speed){
        // console.log(turbo);
        text = document.getElementById("text-area");
        frame = ANIMATIONS[document.getElementById("animation").value];
        temp = frame.split("=====\n")

        if (timer !== null) return;
        // console.log("3>>>>> : " + turbo);
        timer = setInterval(()=> {
            // console.log("3>>>>> : " + turbo);
            if(x < temp.length) text.value  = temp[x];
            else x=0;
            x++;
        }, speed);
    };

    /* picking-up one: exercise, juggler, bike, dive, custom */
    function selectAnimation(){
        var text = document.getElementById("text-area");
        text.value = ANIMATIONS[this.value].split("=====\n")[0];
        x = 0;
    };

    /*  font size  changing*/
    function changeSize(){
        var size = document.getElementById("mysize");
        document.getElementById("text-area").style.fontSize = size.value + "pt";
    };

    /* Speeding*/
    function changeSpeed(){
        if(document.getElementById("speed").checked == true){
            // turbo = 50;
            run(50);
        }else{
            // turbo = 250;
            run(250);
        }
    };

    /* Assign event handlers right after page load finishes */
    function loadPage(){
        document.getElementById("start").onclick = clickStart;
        document.getElementById("stop").onclick = clickStop;
        document.getElementById("animation").onchange = selectAnimation;
        document.getElementById("mysize").onchange = changeSize;
        document.getElementById("speed").onchange = changeSpeed;
    }
    window.onload = loadPage;
})();