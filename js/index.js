'use strict'

const headerSvg = document.querySelector('.Header-svg')
console.log(headerSvg)

const navUl = document.querySelector('.Nav-ul')
console.log(navUl)

const headerPaths = document.querySelectorAll('.Header-path')
console.log(headerPaths)


headerSvg.addEventListener('click' , function(){
        navUl.classList.toggle('isActive')
        headerSvg.classList.toggle('isActive')
        headerPaths.forEach(function(each , i){
            headerPaths[i].classList.toggle('isActive')
        })
})



// headerSvg.addEventListener('click' , function(){
//     navUl.classList.toggle('isActive')
//     headerSvg.classList.toggle('isActive')
// })