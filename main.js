
let navigate = document.getElementById('navigation');
let links = document.getElementsByTagName('a');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){
        navigate.classList.add('newback');

    }else{
        navigate.classList.remove('newback');
    }
})
