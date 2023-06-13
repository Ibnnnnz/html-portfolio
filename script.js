var addNew = true
//window.addEventListener('load',[loaderScreen(), notifyMe()]);
function loaderScreen(){
    let body = document.body;
    let navbar = document.getElementById('mainNav');
    let header = document.getElementById('header-home');
    let skills = document.getElementById('my-skills');
    let album  = document.getElementById('my-album');
    let contact = document.getElementById('contact-me');
    let footer = document.getElementById('mainFooter');
    let id = document.getElementById('loader');
    
    let loading = document.getElementById('text');

    // window.addEventListener('load', function(){
    //   id.style.display = "none";
    // })
    body.style.overflowY = "hidden";

    navbar.classList.add('d-none');
    header.classList.add('d-none');
    skills.classList.add('d-none');
    album.classList.add('d-none');
    contact.classList.add('d-none');
    footer.classList.add('d-none');   
    
    loading.textContent = "Loading";
    loading.style.fontSize = "28px";
    id.appendChild(loading);
    let loaded = setInterval(() => {
        loading.textContent = loading.textContent + "."
    }, 1000);
    setTimeout(() => {
        clearInterval(loaded)
        id.style.display = "none";
        body.style.overflowY = "visible";
        navbar.classList.remove('d-none');
        header.classList.remove('d-none');
        skills.classList.remove('d-none');
        album.classList.remove('d-none');
        contact.classList.remove('d-none');
        footer.classList.remove('d-none'); 
        
    }, 4000);
}
loaderScreen();
var TxtType = function(el, toRotate, period) {
    setTimeout(() =>{
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }, 4000)
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+ this.txt + '<span class="line">' + '<span>'+ '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

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
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite >.wrap >.line{border-right : 0.08em solid #fff; animation: flickerAnimation 1s linear infinite;}"
    document.body.appendChild(css);
};


window.addEventListener('scroll', reveal);
    function reveal(){
        let reveals = document.querySelectorAll(['.header-album', '.album-cover', '.overlay-bottom-to-top', '.overlay-skills', '.element-form']);

        for(var i = 0 ; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }

    }
}

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})
$('img').mousedown(function (e) {
    if(e.button == 2) { // right click
        return false; // do nothing!
    }else{
        alert('Artwork are not allowed to download');
    }
});


function portraitAlbumBtn(){
    let landscapeAlbum = document.getElementById('landscape-album');
    let portraitAlbum = document.getElementById('portrait-album');
    let landscapeAlbumBtn = document.getElementById('landscape-album-btn');
    let portraitAlbumBtn = document.getElementById('portrait-album-btn');
    if (landscapeAlbum.className !== "d-none" && portraitAlbum.className === "d-none"){
        landscapeAlbum.classList.add('d-none');
        portraitAlbum.classList.remove('d-none');
    }
    
    

    landscapeAlbumBtn.classList.remove('btn-light');
    portraitAlbumBtn.classList.remove('btn-outline-light');
    
    landscapeAlbumBtn.classList.add('btn-outline-light');
    portraitAlbumBtn.classList.add('btn-light');
}
function landscapeAlbumBtn(){
    let landscapeAlbum = document.getElementById('landscape-album');
    let portraitAlbum = document.getElementById('portrait-album');
    let portraitAlbumBtn = document.getElementById('portrait-album-btn');
    let landscapeAlbumBtn = document.getElementById('landscape-album-btn');

    if(landscapeAlbum.className === "d-none"){
        landscapeAlbum.classList.remove('d-none');
    }
    portraitAlbum.classList.add('d-none');

    portraitAlbumBtn.classList.remove('btn-light');
    landscapeAlbumBtn.classList.remove('btn-outline-light');
    
    portraitAlbumBtn.classList.add('btn-outline-light');
    landscapeAlbumBtn.classList.add('btn-light');
    console.log(landscapeAlbum.className == "d-none");
}