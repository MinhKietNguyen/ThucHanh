
const slides = document.querySelectorAll(".slide")
let slideIndex = 0
let intervalid = null

document.addEventListener("DOMContentLoaded",initializeSlide);
function initializeSlide(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("slide");
        intervalid = setInterval(nextSlide,5000)
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0
    }
    else if(index<0){
        slideIndex = slides.length-1
    }
    slides.forEach(slide => {
        slide.classList.remove("slide")
    })
    slides[slideIndex].classList.add("slide")
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex)
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
window.addEventListener("scroll", function(){
    var narbar = this.document.getElementById("narbar")
    if(window.scrollY > 20){
        narbar.classList.add("navbarcar");
    } 
    else{
        narbar.classList.remove("navbarcar");
    }
});
window.onload = function(){
    const divnw = document.querySelector(".divnw")
    divnw.classList.add("borderBottom")
}
function Dangky(){
    let dk = document.getElementById("Dangky");
    dk.classList.add("dk");
    let dn = document.getElementById("Dangnhap")
    dn.classList.remove("dn")
}
function DongDangky(){
    let dk = document.getElementById("Dangky");
    dk.classList.remove("dk")
}
function Dangnhap(){
    let dn = document.getElementById("Dangnhap")
    dn.classList.add("dn")
    let dk = document.getElementById("Dangky");
    dk.classList.remove("dk")
}
function DongDangnhap(){
    let dn = document.getElementById("Dangnhap")
    dn.classList.remove("dn")
}