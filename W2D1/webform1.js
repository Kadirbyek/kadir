function CheckPassword(inputtxt) {
    var passw=  /^(?=.*[A-Z])(?=.*[0-9])\w{10,}$/;
     var pattern="https?://.+";
let meURL=document.getElementById("url").value;

    if(!meURL.match(pattern) && !inputtxt.value.match(passw) )
    {
        alert('Both URL and Password Requirement doesn \'t meet');
        return false;
    } else if (!meURL.match(pattern) ) {
        alert('URL Requirement doesn \'t meet');
        return false;
    } else if (!inputtxt.value.match(passw)) {
        alert('Password Complexity doesn \'t meet');
        return false;
    }else {
        alert('Congratulation, all validations passed...!')
        return true;
    }
}