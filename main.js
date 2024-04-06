<<<<<<< HEAD
let navigate = document.getElementById('navigation');
let links = document.getElementsByTagName('a');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){
        navigate.classList.add('newback');

    }else{
        navigate.classList.remove('newback');
    }
=======
let navigate = document.getElementById('navigation');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){
        navigate.classList.add('newback');
    }else{
        navigate.classList.remove('newback')
    }
>>>>>>> 21c491cb1dde9d25fe137a55c1872e413a0a17c3
})