function com(){
    let isBoss = confirm();
    console.log("Hello, world!");
}

function inf(){
    let age = prompt('How old are you?', 100);
    alert('you are ' + age + ' years');
}

function bilshe (){
    let first = prompt('Print first number', 15);
    let secod = prompt('Print second number', 2);

    if(first > secod){
        alert(first + " is more");
    }
    else if(first < secod){
        alert(secod + " is more");
    }
    else{
        alert("2 numbers are equal");
    }
}

function season(){
    let chislo = prompt('Enter the noser of the month');

    if(chislo > 0 && chislo <=2 || chislo == 12){
        alert("winter");
    }
    else if(chislo >= 3 && chislo <= 5){
        alert("spring");
    }
    else if(chislo >=6 && chislo <= 8){
        alert("summer");
    }
    else if(chislo >= 9 && chislo <= 11){
        alert("autumn");
    }
    else{
        alert("incorrect num");
    }
}

function true_false(){
    let comfi = confirm("test");

    if(comfi == true){
        document.body.innerHTML += "the ok button was pressed";
    }
    else{
        document.body.innerHTML += "the cancel button was pressed";
    }
}


function student(){
    let count = prompt("How many students in class?", 10);

    while(count > 0){
        let students = prompt("Enter Name and Surname");
        document.body.innerHTML += students + '<br>';
        count--;
    }
}

function student_cancel(){
    for (var t; t = prompt('Enter Name and Surname');) {
        document.body.innerHTML += t + '<br>';
    }
}

function table(){
    for(var i = 2; i <= 9; i++){
        for(var j = 2; j <= 9; j++){
            document.body.innerHTML += i + " * " + j + " = " + (i*j) + '<br>';
        }
    }
}