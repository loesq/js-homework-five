function func1(n) {
    return n*n;
}

function func2(n, m) {
    return n+m;
}

function func3(n, m, p) {
    return (n-m)/p;
}

function func4(day) {
    day = 3
    if (day == 1) {
        console.log('понедельник');
    } else if (day == 2) {
        console.log('вторник');
    }else if (day == 3){
        console.log('среда');
    }else if (day == 4){
        console.log('четверг');
    }else if (day == 5){
        console.log('пятница');
    }else if (day == 6){
        console.log('суббота');
    }else if (day == 7){
        console.log('воскресенье');
    }
}

function func5(a,b) {
    if (a == b) {
        return true;
    }else{
        return false;
    }
}

function func6(a = 10,b = 1) {
    if (a+b > 10) {
        return true;
    }else{
        return false;
    }
}

function func7(a) {
    if (a > 0 ) {
        return true;
    }else {
        return false;
    }
}

function isNumberInRange(a) {
    if (a > 0 && a<10) {
        return true;
    }else {
        return false;
    }
}