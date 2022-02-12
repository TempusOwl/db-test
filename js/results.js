var doglikeness = 0
var catlikeness = 0

//


if(localStorage.getItem('question1-StronglyAgree')){
    var doglikeness = + 2
    var catlikeness = + -2
}

if(localStorage.getItem('question1-Agree')){
    var doglikeness = + 1
    var catlikeness = + -1 
}
