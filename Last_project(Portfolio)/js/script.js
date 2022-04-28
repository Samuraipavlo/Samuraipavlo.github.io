//
let scrolled;
window.onscroll = function scrall() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled < 75){
        $("#menu").css({"background": "", "-webkit-box-shadow": "none"})
        $("#a").css({"color": "#d9d9d9"}) 
    }
    if(scrolled > 75){
        $("#menu").css({"background": "white"})  
        $("#a").css({"color": "#d9d9d9"}) 
    }
    if(scrolled > 370){
        $("#menu").css({"-webkit-box-shadow": "0px 1px 7px 0px rgba(0,0,0,0.75)"})
    }
}
//змінна стилів меню при скролі сторінки 

//
$(".skillbar").each(function() {
    $(this).find(".skillbar-bar").animate({
        width:$(this).attr("data-percent")
    }, 2000)
})
//анімація блоку навичок

//
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 700, 'linear');
  });
//плавна анімація скролу по силкам


//
var modal = document.getElementById('myModel');
var batt = document.getElementById("myBtn_1");

batt.onclick = function () {
    modal.style.display = "block";
}

modal.onclick = function () {
    modal.style.display = "none";
}



var modal_2 = document.getElementById('myModel_2');
var batt_2 = document.getElementById("myBtn_2");

batt_2.onclick = function () {
    modal_2.style.display = "block";
}

modal_2.onclick = function () {
    modal_2.style.display = "none";
}



var modal_3 = document.getElementById('myModel_3');
var batt_3 = document.getElementById("myBtn_3");

batt_3.onclick = function () {
    modal_3.style.display = "block";
}

modal_3.onclick = function () {
    modal_3.style.display = "none";
}


var modal_4 = document.getElementById('myModel_4');
var batt_4 = document.getElementById("myBtn_4");

batt_4.onclick = function () {
    modal_4.style.display = "block";
}

modal_4.onclick = function () {
    modal_4.style.display = "none";
}


var modal_5 = document.getElementById('myModel_5');
var batt_5 = document.getElementById("myBtn_5");

batt_5.onclick = function () {
    modal_5.style.display = "block";
}

modal_5.onclick = function () {
    modal_5.style.display = "none";
}

var modal_6 = document.getElementById('myModel_6');
var batt_6 = document.getElementById("myBtn_6");

batt_6.onclick = function () {
    modal_6.style.display = "block";
}

modal_6.onclick = function () {
    modal_6.style.display = "none";
}
//модульне вікно

//
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
//анімація тексту в header
