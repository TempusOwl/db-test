//call reload on page load
reload();

//add click functionality to radio buttons
Array.from(document.querySelectorAll('input[type="radio"]')).forEach(function (item, index) {
    item.addEventListener('click', save);
});

//Save Values
function save() {
    //Radiobuttons  
    var question1 = document.querySelector('input[name=question1]:checked').value;
    localStorage.setItem("question1", question1);
    var question2 = document.querySelector('input[name=question2]:checked').value;
    localStorage.setItem("question2", question2);
}
//Restoring saved Values
function reload() {
    // Radiobuttons - get a list of DOM elements 
    // question1
    var Q1 = Array.from(document.getElementsByName('question1'));
    var val1 = localStorage.getItem('question1');
    for (var i = 0; i < Q1.length; i++) {
        if (Q1[i].value == val1) {
            Q1[i].checked = true;
        }
    }
    var Q2 = Array.from(document.getElementsByName('question2'));
    var val1 = localStorage.getItem('question2');
    for (var i = 0; i < Q2.length; i++) {
        if (Q2[i].value == val1) {
            Q2[i].checked = true;
        }
    }
}