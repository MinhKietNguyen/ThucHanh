
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
var email = "kiet@gmail.com"
var password = "123"
var account_email = [emAail];
var account_pass = [password];
let drt = document.getElementById("User");

function TaiKhoan(user_name,nrd_name){
    nrd_name.style.marginLeft = "30px";  
    nrd_name.style.fontSize = "18px";
    nrd_name.style.color = "white";
    nrd_name.style.padding = "10px";
    nrd_name.style.border = "1px outset black"
    nrd_name.addEventListener("click", function(){
        let ul = nrd_name.querySelector("ul");
        if (ul) {
            nrd_name.removeChild(ul);
        } else {
            let li = document.createElement("li");
            li.innerHTML = "Thoát";
            li.style.color = "red"
            ul = document.createElement("ul");
            ul.appendChild(li);
            ul.style.listStyle = "none";
            ul.style.textAlign = "right"
            ul.style.height = "25px"
            ul.style.boxShadow = "2px 2px 1px black";
            ul.style.position = "absolute"
            ul.style.marginLeft = "-12px"
            ul.style.width = "100px"
            li.addEventListener("click", function() {
                user_name.removeChild(nrd_name);
                user_name.appendChild(drt);
                document.getElementById("Quantri").classList.remove("qtr");
            });

            nrd_name.appendChild(ul);
        }
    })
    user_name.appendChild(nrd_name);
}
function Login(){
    var login = false;
    for(var i=0;i<account_email.length;i++){
        if(account_email[i] === document.getElementById("email1").value && account_pass[i] === document.getElementById("password1").value){
            document.getElementById("Quantri").classList.add("qtr");
            DongDangnhap();
            let user_name = document.getElementById("User_name");
            user_name.removeChild(drt);
            let nrd_name = document.createElement("div");
            nrd_name.textContent += account_email[i];
            TaiKhoan(user_name,nrd_name);
            login = true;
            break;
        }
    }
    if(!login) failLoginDangnhap();
}
function failLoginDangnhap(){
    var error = document.createElement("div")
    error.textContent = 'Incorrect email or password. Please try again.'
    error.style.color = "red"
    error.style.display = "block";
    error.style.backgroundColor = "black"
    error.style.zIndex = 999;
    error.style.position = "absolute";
    error.style.width = "500px";
    error.style.height = "100px"
    error.style.lineHeight = "95px";
    error.style.marginLeft = "33%"
    error.style.marginTop = "-245px"
    error.style.textAlign = "center"
    document.getElementById("Dangnhap").appendChild(error);
    setTimeout(() => {
        document.getElementById("Dangnhap").removeChild(error);
    },2000)
    
}
function failLoginDangky(){
    var error = document.createElement("div")
    error.textContent = 'Incorrect email or password. Please try again.'
    error.style.color = "red"
    error.style.display = "block";
    error.style.backgroundColor = "black"
    error.style.zIndex = 999;
    error.style.position = "absolute";
    error.style.width = "500px";
    error.style.height = "100px"
    error.style.lineHeight = "95px";
    error.style.marginLeft = "33%"
    error.style.marginTop = "-400px"
    error.style.textAlign = "center"
    document.getElementById("Dangky").appendChild(error);
    setTimeout(() => {
        document.getElementById("Dangky").removeChild(error);
    },2000)
}
function CreateLogin(){
    var email = document.getElementById("email2").value;
    var passwork = document.getElementById("password2").value;
    if(email === "" || passwork === ""){
        console.log(email+" "+password)
        failLoginDangky();
    }
    else{
        var check = confirm("Bạn có muốn vào đăng nhập")
        account_email.push(email);
        account_pass.push(password);
        console.log(email+" "+password)
        if(check){
            Dangnhap()
            DongDangky()
        }
        else{
            Dangky()
        }
    }
}