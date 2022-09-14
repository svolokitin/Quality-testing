function myFunctionInner() {
    document.getElementById('inner').innerHTML = "Hello pidar"
}

function myFunctionStyle() {
    document.getElementById('style').style.fontSize = '35px'
}

function myFunctionOff() {
    document.getElementById('img').src = '../lab1/img/pic_bulboff.gif'
}

function myFunctionOn() {
    document.getElementById('img').src = '../lab1/img/pic_bulbon.gif'
}

function myFunctionHide() {
    document.getElementById('hide').style.display = 'block'
}

function myFuncGetDate() {
    document.getElementById('date').innerHTML = Date()
}