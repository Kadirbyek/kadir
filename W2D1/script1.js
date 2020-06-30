function myFunctionTest ( expected, fn){
if (expected==fn) return "TEST SUCCEEDED" + fn;
    else return "TEST FAILED" + fn;
}

function sum(intList) {
return intList.reduce((a,b) => a+b);
}

function multiply(intList){
    return intList.reduce((a,b) => a*b)
}
function reverse(str){
    let rev = str.split("").reduce((a,b) => b+a);
    return rev;
}

function findLongestWord(words){
    return words.reduce((x, y) => x.length > y.length ? (x.length-1) : (y.length-1));
}


function filterLongWords (myWordsArray, i){
    return myWordsArray.filter (element => element.length > i);
    }


function multiplyByTen(intList) {
   return intList.map(a => a*10);
 }

function filterEqualThree(intList) {
    return intList.filter(w => w===3);
}

function productAllElements(listInt) {
    return listInt.reduce((a,b) => a*b);
}

function myFunctionTestForArray(expected, found) {
    var counter = 0;
    for (i=0; i < expected.length;i++) {
        if (expected[i] !== found [i]) {
            counter ++;
        }
    }
    if (counter === 0) {
        return "TEST SUCCEEDED" ;
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found;
    }
}
