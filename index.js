const accordion1=document.getElementById("accordion1")
const accordion2=document.getElementById("accordion2")
const accordion3=document.getElementById("accordion3")
const accordio41=document.getElementById("accordion4")

accordion1.addEventListener('click',()=>{
    const accordionBody=document.querySelector('.accordion-body')
    const controller=document.getElementById('controller')
    accordionBody.classList.toggle('active')
    if (accordionBody.classList.contains('active')) {
        controller.innerHTML = '-'; // When active, show '-'
    } else {
        controller.innerHTML = '+'; // When inactive, show '+'
    }
})

accordion2.addEventListener('click',()=>{
    const accordionBody1=document.querySelector('.accordion-body1')
    const controller1=document.getElementById('controller1')
    accordionBody1.classList.toggle('active')
    if (accordionBody1.classList.contains('active')) {
        controller1.innerHTML = '-'; // When active, show '-'
    } else {
        controller1.innerHTML = '+'; // When inactive, show '+'
    }
})

accordion3.addEventListener('click',()=>{
    const accordionBody2=document.querySelector('.accordion-body2')
    const controller2=document.getElementById('controller2')
    accordionBody2.classList.toggle('active')
    if (accordionBody2.classList.contains('active')) {
        controller2.innerHTML = '-'; // When active, show '-'
    } else {
        controller2.innerHTML = '+'; // When inactive, show '+'
    }
})

accordion4.addEventListener('click',()=>{
    const accordionBody3=document.querySelector('.accordion-body3')
    const controller3=document.getElementById('controller3')
    accordionBody3.classList.toggle('active')
    if (accordionBody3.classList.contains('active')) {
        controller3.innerHTML = '-'; // When active, show '-'
    } else {
        controller3.innerHTML = '+'; // When inactive, show '+'
    }
})