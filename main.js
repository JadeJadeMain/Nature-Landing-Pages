let navigate = document.getElementById('navigation');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 100){
        navigate.classList.add('newback');
    }else{
        navigate.classList.remove('newback')
    }
})