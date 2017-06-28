window.onload = function () {
    setInterval(function () {
        date = new Date();
        h = date.getHours();
        m = date.getMinutes();
        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? '0' + m : m;
        s = date.getSeconds();
        s = (s < 10) ? '0' + s : s;
        document.getElementById('time')
            .innerHTML = h + ' : ' + m;
        document.getElementById('second')
            .innerHTML = ' : ' + s;
    }, 1000);
    var a = document.getElementById('clock');

    function handler1() {
        second.style.display = (second.style.display == 'none') ? '' : 'none';
    }
    a.addEventListener('click', handler1);
}

function sum(x) {

    return function (y) {
        return x + y;
    };

}

console.log(sum(1)(2));

var a = 5; //нужно поставить точку с запятой, так как интерпретатор воспринимает эту запись как function Expression, без перевода строки.

(function() {
    alert(a);
})()


//for (var i = 0; i < 10; i++) {  к моменту запуска счетчика в функции цикл уже отработал, поэтому в консоль каждый раз записываеться значение последнего элемента массива цикла.
//    setTimeout(function() {
//        console.log(i);
//    }, 0);
//}

setTimeout(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}, 0);