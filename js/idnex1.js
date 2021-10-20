var close_login = document.getElementsByClassName('close_')[0];
var login_wrap = document.getElementById('login_wrap');
var close_l = document.getElementById('close_l');
// console.log(close_l);
var login_ = document.getElementById('login_');
function close_() {
    login_wrap.style.display = 'none';
}
close_l.onclick = function () {
    login_wrap.style.display = 'none';
}
login_.onclick = function () {
    login_wrap.style.display = 'block';
}
