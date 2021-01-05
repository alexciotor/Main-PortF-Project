const buttons = document.querySelectorAll('.menu-lists');
const menu = document.querySelector('.main-menu')
const right = document.querySelector('.right-side-content')
const main = document.querySelector('.main-content')
const home = document.querySelector('.home-main-section')
const portfolio = document.querySelector('.portfolio')
const certificates = document.querySelector('.certificates')
const aboutMe = document.querySelector('.about-me')
const contact = document.querySelector('.contact')
 const menuBtn = document.querySelector('.menu-btn')
const menuBar = document.querySelector('.left-margin')
const sections = document.querySelector('.sections')
const rect = main.getBoundingClientRect().width
const change = (id)=>{
     const main = document.querySelector('.main-content')
  const menuBar = document.querySelector('.left-margin')
     if(id==0){
portfolio.classList.remove('add')
certificates.classList.remove('add')
aboutMe.classList.remove('add')
home.classList.remove('none')
contact.classList.remove('add')
home.classList.add('disp')
 if(rect < 761){
 menuBar.classList.remove('menu-display')  
 }}
     if(id==1){
home.classList.remove('disp')
portfolio.classList.remove('add')
certificates.classList.remove('add')
home.classList.add('none')
contact.classList.remove('add')
aboutMe.classList.add('add')
if(rect < 761){
 menuBar.classList.remove('menu-display')  
 }}
    if(id==2){
home.classList.remove('disp')
home.classList.add('none')
aboutMe.classList.remove('add')
certificates.classList.remove('add')
contact.classList.remove('add')
portfolio.classList.add('add')
    if(rect < 761){
menuBar.classList.remove('menu-display')  
 }}
    if(id==3){
        home.classList.remove('disp')
       home.classList.add('none')
    aboutMe.classList.remove('add')
        portfolio.classList.remove('add')
        contact.classList.remove('add')
        certificates.classList.add('add')
     if(rect < 761){
     menuBar.classList.remove('menu-display')
    }}
    if(id==4){
           home.classList.remove('disp')
       home.classList.add('none')
       aboutMe.classList.remove('add')
       portfolio.classList.remove('add')
       certificates.classList.remove('add')
       contact.classList.add('add')
       if(rect < 761){
     menuBar.classList.remove('menu-display')   
 }
    }
 }
 menuBtn.addEventListener('click', (e)=>{
    menuBar.classList.toggle('menu-display')
 })
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
