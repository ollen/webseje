function menushow() {
    var tmpSlider;
    let menuMobile=document.querySelector('.scroll');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}


function ir_logar() {
    location.assign("logar.html");

}
function ir_para_pg_inicial(){
    location.assign("index.html");
}
function ir_y(){
    location.assign("https://www.youtube.com/@Sebastiao_Collen_Adestramento");
}
function ir_t(){
    location.assign("https://tiktok.com/@sebastiaocollen");
}
function ir_f(){
    location.assign("https://www.facebook.com/sebastiaocandido.collen?mibixtid=4MzkDw5ooBP2efjs");
}