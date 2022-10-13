document.write("<h2> Завдання №1 </h2>");
var data1 = new Date;
data1.setFullYear(2021, 1, 20);
data1.setHours(3, 12, 0);
document.write("<p> Результат: </p>" + data1);

document.write("<h2> Завдання №2 </h2>");
let date = new Date(2012, 0, 3);
document.write("<p> Результат: </p>" + (["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][date.getDay()]));


document.write("<h2> Завдання №3 </h2>");
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
document.write("<p>Результат: </>" + getLastDayOfMonth(2020, 1));

document.write("<h2> Завдання №4 </h2>");
function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
}

document.write("<p>Результат: </>" + getSecondsToTomorrow());

document.write("<h2> Завдання №5 </h2>");
function formatDate(date) {
    let diff = new Date() - date; 
    if (diff < 1000) { 
      return 'прямо зараз';
    }
  
    let sec = Math.floor(diff / 1000); 
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' хв. назад';
    }
  
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

document.write("<p>Результат: </>" + formatDate(new Date(new Date - 1)));
document.write("<p>Результат: </>" + formatDate(new Date(new Date - 30 * 1000)));
document.write("<p>Результат: </>" + formatDate(new Date(new Date - 5 * 60 * 1000)));
document.write("<p>Результат: </>" + formatDate(new Date(new Date - 86400 * 1000)));
