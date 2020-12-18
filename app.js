const buttons = document.querySelectorAll('.menu-lists');
const menu = document.querySelector('.main-menu')

menu.addEventListener('click',(e)=>{
    const id = e.target.dataset.id
     
    if(id){
buttons.forEach((button)=>{
 
    button.classList.remove('active')
    e.target.classList.add('active')
 
 
 
     

})
    }
})

 