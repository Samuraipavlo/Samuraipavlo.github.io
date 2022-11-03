function time(){
    let time = new Date();

    if(time.getHours() < 10){
        chas.value = "0" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    }

    if(time.getMinutes() < 10){
        chas.value = time.getHours() + ":" + "0" + time.getMinutes() + ":" + time.getSeconds();
    }
     
    else{
        chas.value = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    }

    setTimeout('time', 1000)
}

time();
setTimeout(
    () => {
      alert('Час буде оновленно');
    },
    28 * 1000
);

(function () {
    var str = 'Привіт, як справи?',
    
        len = str.length + 1,
    
        i = 0;
    
        setInterval(function () {
    
          data.innerHTML += str[i++];
    
          if (i == len) data.innerHTML = '', i = 0;
    
        }, 400);
    
    }());
    
