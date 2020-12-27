const buttons = document.querySelectorAll('.menu-lists');
const menu = document.querySelector('.main-menu')
const aboutMe = document.querySelector('.about-me')
const right = document.querySelector('.right-side-content')
menu.addEventListener('click',(e)=>{
    const id = e.target.dataset.id
     
    if(id){
buttons.forEach((button)=>{
    button.classList.remove('active')
    e.target.classList.add('active')
 
})
    }
})



 const btn = document.querySelector('.btn')
 btn.addEventListener('click',()=>{
     right.classList.remove('right-side-content')
     right.classList.add('move')
    

 })