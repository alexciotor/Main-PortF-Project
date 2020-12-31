const buttons = document.querySelectorAll('.menu-lists');
const menu = document.querySelector('.main-menu')
const right = document.querySelector('.right-side-content')

const home = document.querySelector('.home-main-section')
const portfolio = document.querySelector('.portfolio')
const certificates = document.querySelector('.certificates')
const aboutMe = document.querySelector('.about-me')
const contact = document.querySelector('.contact')
 const menuBtn = document.querySelector('.menu-btn')
const menuBar = document.querySelector('.left-margin')

 menuBtn.addEventListener('click', (e)=>{
     if(menuBar.classList.contains('menu-display')){
         menuBar.classList.remove('menu-display')
      
      
     }
     else{
         menuBar.classList.add('menu-display')
       
        
         
     }
 })

 const change = (id)=>{
     if(id==0){
portfolio.classList.remove('add')
certificates.classList.remove('add')
aboutMe.classList.remove('add')
home.classList.remove('none')
contact.classList.remove('add')
home.classList.add('disp')
 
     }
     if(id==1){
         home.classList.remove('disp')
         portfolio.classList.remove('add')
         certificates.classList.remove('add')
         home.classList.add('none')
         contact.classList.remove('add')
         aboutMe.classList.add('add')

     }
    if(id==2){
       home.classList.remove('disp')
       home.classList.add('none')
       aboutMe.classList.remove('add')
       certificates.classList.remove('add')
       contact.classList.remove('add')
       portfolio.classList.add('add')
       
    }
    if(id==3){
        home.classList.remove('disp')
       home.classList.add('none')
    aboutMe.classList.remove('add')
        portfolio.classList.remove('add')
        contact.classList.remove('add')
        certificates.classList.add('add')
        console.log(certificates);
    }
    if(id==4){
           home.classList.remove('disp')
       home.classList.add('none')
       aboutMe.classList.remove('add')
       portfolio.classList.remove('add')
       certificates.classList.remove('add')
       contact.classList.add('add')
       
    
    
        
    }
 }

menu.addEventListener('click',(e)=>{
    const id = e.target.dataset.id
     
    if(id){
buttons.forEach((button)=>{
    button.classList.remove('active')
    e.target.classList.add('active')
    
 
})

    }
    change(id)
 
})



// 1 .home-main-section
// 2 .about-me
// 3 .portfolio-content
// 4 certificates
