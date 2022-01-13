
const menuHamburger = document.querySelector('.menu-hamburger')
const menuMobile = document.querySelector('.menu-mobile')
const overlay = document.querySelector('.overlay')

let flag = true 

menuHamburger.addEventListener('click', ()=>{
  
  if(flag === true) {
    menuHamburger.classList.add('active')
    menuMobile.classList.add('active')
    overlay.classList.add('active')
    flag = false
  }else {
    menuHamburger.classList.remove('active')
    menuMobile.classList.remove('active')
    overlay.classList.remove('active')
    flag = true
  }
})


  overlay.addEventListener('click', () => {
    if(!flag) {
      overlay.classList.remove('active')
      menuHamburger.classList.remove('active')
      menuMobile.classList.remove('active')
      flag = true
    }
    
  })
