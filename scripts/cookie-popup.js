
let popup=document.querySelector('.popup-container');
let overlay=popup.querySelector('.overlay');
let accept=popup.querySelector('.accept');
let refuse=popup.querySelector('.refuse');

overlay.addEventListener('click', (e)=>{
    overlay.parentElement.classList.remove('active');
    document.body.style="overflow: initial;";
})

accept.addEventListener('click', (e)=>{
    overlay.parentElement.classList.remove('active');
    document.body.style="overflow: initial;";
    localStorage['cookies']='yes';
})

refuse.addEventListener('click', (e)=>{
    overlay.parentElement.classList.remove('active');
    document.body.style="overflow: initial;";
    localStorage['cookies']='no';
})

if(localStorage['cookies']==undefined) {    
    setTimeout(()=>{
        popup.classList.add('active');
        document.body.style="overflow: hidden;";
    }, 2000);
}
