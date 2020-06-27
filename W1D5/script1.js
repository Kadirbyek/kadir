function myFunctionTest ( expected, fn){
if (expected==fn) return "TEST SUCCEEDED"
    else return "TEST FAILED"
}

function max(a,b){
    return a>=b? a:b;
}
function maxOfThree(a,b,c) {
return max(a,(max(b,c)))
}

function isVowel(char)
{
    if ( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
    return true;
    return false;
}

function sum(intList) {
return intList.reduce(function (a,b) {
        return a+b;
})
//     let s=0;
//     for(let i=0;i<intList.length;i++){
//         s+=intList[i];
//     }
//     return s;
}

function multiply(intList){
    return intList.reduce(function (a,b) {
        return a*b;
    })
}

function reverse(strList) {
  let str="";
  for(let i=strList.length-1; i>=0;i--){
      str+=strList[i];
  }
    return str;
}

function findLongestWord(listWord) {
       let l=0;
       for(let i=0; i<listWord.length;i++) {
           if(listWord[i].length>l) l=listWord[i].length;
       }
       return l;
}


function filterLongWords (myWordsArray, i){
    return myWordsArray.filter (function (element) {
        return element.length > i;
    })
}


function multiplyByTen(intList) {
   return intList.map(function (a) {
           return a*10;
   })
}

function filterEqualThree(intList) {
    return intList.filter(function (w) {
           return  w === 3;
    })
}

function productAllElements(listInt) {
    return listInt.reduce(function (a,b) {
        return a*b;
    })


}


function myFunctionTestForArray(expected, found) {
    var counter = 0;
    for (i=0; i < expected.length;i++) {
        if (expected[i] !== found [i]) {
            counter ++;
        }
    }
    if (counter === 0) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found;
    }
}
