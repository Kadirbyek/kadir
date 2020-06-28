function alt(){
    alert("Hello, world!");
}
function timer() {
 setInterval(largeText,500);
}
function largeText() {
    var ta=document.getElementById("ta")
    var style1 = window.getComputedStyle(ta,null).getPropertyValue('font-size');
    var fontSize= parseInt(style1);
    ta.style.fontSize = (fontSize + 2) + "px"
}

function boldIt() {
    var checkBox=document.getElementById("myCheck");
    let text=document.getElementById("ta");
    if(checkBox.checked === true){
        text.style.fontWeight="bold";
        text.style.color = "green";
        text.style.textDecorationLine ="underline";
        document.body.style.backgroundImage ="url(img/hundred-dollar-bill.jpg)";

    }else{
        text.style.fontWeight="normal";
        text.style.color = "black";
        text.style.textDecorationLine ="none";
    }

}
