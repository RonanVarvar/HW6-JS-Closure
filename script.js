function makeClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    document.getElementById('time')
        .innerHTML = h + ' : ' + m;
    document.getElementById('second')
        .innerHTML = ' : ' + s;
}

setInterval(function () {
    makeClock();
}, 1000);

function toggleСlock() {
    var obj = document.getElementById('second');

    if (obj.style.display != "inline") {
        obj.style.display = "inline";
    } else {
        obj.style.display = "none";
    }
}

var click = document.getElementById('clock');

click.addEventListener('click', toggleСlock);

function sum(x) {
    return function (y) {
        return x + y;
    };
}
console.log(sum(1)(2));

var a = 5; //нужно поставить точку с запятой, так как интерпретатор воспринимает эту запись как function Expression, без перевода строки.

(function () {
    alert(a);
})()

//for (var i = 0; i < 10; i++) {  к моменту запуска счетчика в функции цикл уже отработал, поэтому в консоль каждый раз записываеться значение последнего элемента массива цикла.
//    setTimeout(function() {
//        console.log(i);
//    }, 0);
//}

for (var i = 0; i < 10; i++) {
    (function () {
        var index = i;
        setTimeout(function () {
            console.log(index + 1);
        }, 0);
    })();
}