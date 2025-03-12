
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
var account_email = [email];
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
    var f_name = document.getElementById("first_name").value;
    var l_name = document.getElementById("last_name").value;
    var borndate = document.getElementById("Date").value;
    var CCCD = document.getElementById("cccd").value;
    var useraccount = document.getElementById("user_name").value;
    var Address = document.getElementById("Address").value;
    var P_number = document.getElementById("pn").value;
    var confirm_password = document.getElementById("confirm_password").value;
    
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var vietnamPhoneRegex = /^(?:\+84|0)(3|5|7|8|9)\d{8}$/;
    var cccdRegex = /^\d{9}$|^\d{12}$/;
    var addressRegex = /^[0-9a-zA-ZÀ-ỹ\s,./\-()]+$/;

    if(email === "" || passwork === ""|| f_name === "" || l_name === ""|| borndate === "" || CCCD === ""|| useraccount === "" || Address === ""|| confirm_password === "" || P_number === ""){
        console.log(email+" "+password)
        failLoginDangky();
    }
    else if(password !== confirm_password || emailRegex.test(email) || vietnamPhoneRegex.test(P_number)){
        failLoginDangky();
    }
    else if(cccdRegex.test(CCCD) || addressRegex.test(Address)){
        failLoginDangky();
    }
    else{
        
        OpenCauhoiDangky();
    }
}
function OpenCauhoiDangky(){
    document.getElementById("CauhoiDangky").classList.add("chdk")
}
function CloseCauHoiDangky(){
    document.getElementById("CauhoiDangky").classList.remove("chdk")
}
function CreatAnswerOption(questionId){
    var ert = document.getElementById(`MC${questionId}`)
    var answerContainer = document.getElementById(`answer${questionId}`)
    var answers = [];
    if(questionId <= 10){
        const selectanswer = [
            { value: "Yes", text: "Đúng" },
            { value: "No", text: "Sai" }
        ];
        answers = selectanswer
    }
    else if(questionId == 11){
        const selectanswer = [
            { value: "A", text: "Christopher Nolan" },
            { value: "B", text: "Steven Spielberg" },
            { value: "C", text: "Quentin Tarantino" },
            { value: "D", text: "Martin Scorsese" }
        ];
        answers = selectanswer
    }
    else if(questionId == 12){
        const selectanswer = [
            { value: "A", text: "1917" },
            { value: "B", text: "Parasite" },
            { value: "C", text: "Joker" },
            { value: "D", text: "Once Upon a Time in Hollywood" }
        ];
        answers = selectanswer
    }
    else if(questionId == 13){
        const selectanswer = [
            { value: "A", text: "Bane" },
            { value: "B", text: "Joker" },
            { value: "C", text: "Scarecrow" },
            { value: "D", text: "Two-Face" }
        ];
        answers = selectanswer
    }
    else if(questionId == 14){
        const selectanswer = [
            { value: "A", text: "The Terminator" },
            { value: "B", text: "The Matrix" },
            { value: "C", text: "Predator" },
            { value: "D", text: "Robocop" }
        ];
        answers = selectanswer
    }
    else if(questionId == 15){
        const selectanswer = [
            { value: "A", text: "Avatar" },
            { value: "B", text: "Avengers: Endgame" },
            { value: "C", text: "Titanic" },
            { value: "D", text: "Star Wars: The Force Awakens" }
        ];
        answers = selectanswer
    }
    else if(questionId == 16){
        const selectanswer = [
            { value: "A", text: "Tom Cruise" },
            { value: "B", text: "Keanu Reeves" },
            { value: "C", text: "Jason Statham" },
            { value: "D", text: "Brad Pitt" }
        ];
        answers = selectanswer
    }
    else if(questionId == 17){
        const selectanswer = [
            { value: "A", text: "Encanto" },
            { value: "B", text: "Luca" },
            { value: "C", text: "Raya and the Last Dragon" },
            { value: "D", text: "The Mitchells vs. The Machines" }
        ];
        answers = selectanswer
    }
    else if(questionId == 18){
        const selectanswer = [
            { value: "A", text: "My Neighbor Totoro" },
            { value: "B", text: "Howl’s Moving Castle" },
            { value: "C", text: "Grave of the Fireflies" },
            { value: "D", text: "Your Name" }
        ];
        answers = selectanswer
    }
    else if(questionId == 19){
        const selectanswer = [
            { value: "A", text: "Thor" },
            { value: "B", text: "Batman" },
            { value: "C", text: "Doctor Strange" },
            { value: "D", text: "Black Panther" }
        ];
        answers = selectanswer
    }
    else if(questionId == 20){
        const selectanswer = [
            { value: "A", text: "The Conjuring" },
            { value: "B", text: "A Quiet Place" },
            { value: "C", text: "It" },
            { value: "D", text: "Insidious" }
        ];
        answers = selectanswer
    }
    else if(questionId == 21){
        const selectanswer = [
            { value: "A", text: "Interstellar" },
            { value: "B", text: "The Prestige" },
            { value: "C", text: "The Revenant" },
            { value: "D", text: "The Menu" }
        ];
        answers = selectanswer
    }
    else if(questionId == 22){
        const selectanswer = [
            { value: "A", text: "PUSS IN BOOTS: THE LAST WISH" },
            { value: "B", text: "Spider-Man: No Way Home" },
            { value: "C", text: "Chainsaw Man" },
            { value: "D", text: "Once Upon a Time in Hollywood" }
        ];
        answers = selectanswer
    }
    else if(questionId == 23){
        const selectanswer = [
            { value: "A", text: "Hermione Granger" },
            { value: "B", text: "Gandalf" },
            { value: "C", text: "Severus Snape" },
            { value: "D", text: "Frodo Baggins" }
        ];
        answers = selectanswer
    }
    else if(questionId == 24){
        const selectanswer = [
            { value: "A", text: "Frozen" },
            { value: "B", text: "Shrek" },
            { value: "C", text: "Toy Story" },
            { value: "D", text: "Turning Red" }
        ];
        answers = selectanswer
    }
    else if(questionId == 25){
        const selectanswer = [
            { value: "A", text: "Tobey Maguire" },
            { value: "B", text: "Andrew Garfield" },
            { value: "C", text: "Tom Holland" },
            { value: "D", text: "Hugh Jackman" }
        ];
        answers = selectanswer
    }
    else if(questionId == 26){
        const selectanswer = [
            { value: "A", text: "Blade Runner 2049" },
            { value: "B", text: "Inception" },
            { value: "C", text: "The Matrix" },
            { value: "D", text: "Titanic" }
        ];
        answers = selectanswer
    }
    else if(questionId == 27){
        const selectanswer = [
            { value: "A", text: "Pirates of the Caribbean" },
            { value: "B", text: "Edward Scissorhands" },
            { value: "C", text: "The Dark Knight" },
            { value: "D", text: "Fantastic Beasts" }
        ];
        answers = selectanswer
    }
    else if(questionId == 28){
        const selectanswer = [
            { value: "A", text: "The Exorcist" },
            { value: "B", text: "Interstellar" },
            { value: "C", text: "The Nun" },
            { value: "D", text: "Cars" }
        ];
        answers = selectanswer
    }
    else if(questionId == 29){
        const selectanswer = [
            { value: "A", text: "The Shape of Water" },
            { value: "B", text: "La La Land" },
            { value: "C", text: "Parasite" },
            { value: "D", text: "The Godfather" }
        ];
        answers = selectanswer
    }
    else if(questionId == 30){
        const selectanswer = [
            { value: "A", text: "A New Hope" },
            { value: "B", text: "The Mandalorian" },
            { value: "C", text: "Rogue One" },
            { value: "D", text: "The Hobbit" }
        ];
        answers = selectanswer
    }
    answers.forEach((answer, index) =>{
        let input = document.createElement("input");
        if(questionId <= 20)  input.type = "radio";
        else if(questionId <= 30 && questionId>20) input.type = "checkbox"

        input.id = `q${questionId}_a${index}`;
        input.name = `cau${questionId}`;
        input.value = answer.value;

        let label = document.createElement("label");
        label.htmlFor = input.id;
        label.textContent = answer.text;

        answerContainer.appendChild(input);
        answerContainer.appendChild(label);
        answerContainer.appendChild(document.createElement("br"));
        answerContainer.appendChild(document.createElement("br"));

        ert.appendChild(answerContainer)
    });
}
function loadPreviousAnswers() {
    let previousAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
    for (let i = 1; i <= 30; i++) {
        let answer = previousAnswers[`cau${i}`];
        if (answer) {
            let input = document.querySelector(`input[name="cau${i}"][value="${answer}"]`);
            if (input) {
                input.checked = true;
            }
        }
    }

    let previousScore = localStorage.getItem("quizScore");
    if (previousScore) {
        document.getElementById("ketQua").innerHTML = `<strong>${previousScore}</strong>`;
    }
}

function kiemTraDapAn() {
    let dapAnDung = {
        1: "Yes", 2: "No", 3: "Yes", 4: "No", 5: "Yes",
        6: "Yes", 7: "No", 8: "Yes", 9: "No", 10: "Yes",
        11: "A", 12: "B", 13: "B", 14: "B", 15: "B",
        16: "B", 17: "A", 18: "D", 19: "B", 20: "A",
        21: "B", 22: "C", 23: "A", 24: "D", 25: "C",
        26: "B", 27: "D", 28: "A", 29: "C", 30: "A"
    };

    let dapAnTuLuan = {
        31: ["Inception", "giấc mơ", "thực tại", "Dom Cobb", "thao túng"],
        32: ["Batman", "Nolan", "Reeves", "hiện thực", "tối tăm", "tâm lý"],
        33: ["Marvel", "vũ trụ điện ảnh", "MCU", "Iron Man", "Avengers"],
        34: ["Parasite", "giai cấp", "nghèo", "giàu", "ẩn dụ"],
        35: ["kinh dị", "bất ngờ", "căng thẳng", "jump scare", "tâm lý"],
        36: ["Godfather", "Mafia", "gia đình", "bạo lực", "tầm ảnh hưởng"],
        37: ["Disney", "Pixar", "cảm xúc", "câu chuyện", "công nghệ"],
        38: ["nhạc phim", "cảm xúc", "mạch phim", "hòa âm", "bối cảnh"],
        39: ["đạo diễn", "Hitchcock", "Kubrick", "Spielberg", "Tarantino"],
        40: ["Joker", "Heath Ledger", "Phoenix", "tâm thần", "xã hội"]
    };

    let diem = 0;
    let tongCau = 40;
    let ketQuaHTML = "";
    let userAnswers = {};

    // Kiểm tra câu hỏi trắc nghiệm (1-30)
    for (let i = 1; i <= 30; i++) {
        let dapAnNguoiDung = document.querySelector(`input[name="cau${i}"]:checked`);
        if (dapAnNguoiDung) {
            userAnswers[`cau${i}`] = dapAnNguoiDung.value;
            if (dapAnNguoiDung.value === dapAnDung[i]) {
                diem++;
                ketQuaHTML += `<p style="color: green;">Câu ${i}: ✅ Đúng</p>`;
            } else {
                ketQuaHTML += `<p style="color: red;">Câu ${i}: ❌ Sai (Đáp án đúng: ${dapAnDung[i]})</p>`;
            }
        } else {
            ketQuaHTML += `<p style="color: red;">Câu ${i}: ❌ Chưa chọn</p>`;
        }
    }

    // Kiểm tra câu tự luận (31-40)
    for (let i = 31; i <= 40; i++) {
        let dapAnNguoiDung = document.getElementById(`answer${i}`).value.trim().toLowerCase();
        let tuKhoaDung = dapAnTuLuan[i];

        if (dapAnNguoiDung.length > 0) {
            let soTuKhoaHopLe = tuKhoaDung.filter(keyword => dapAnNguoiDung.includes(keyword.toLowerCase())).length;
            if (soTuKhoaHopLe >= 4) { 
                diem++;
                ketQuaHTML += `<p style="color: green;">Câu ${i}: ✅ Đúng</p>`;
            } else {
                ketQuaHTML += `<p style="color: red;">Câu ${i}: ❌ Sai (Từ khóa cần có: ${tuKhoaDung.join(", ")})</p>`;
            }
        } else {
            ketQuaHTML += `<p style="color: red;">Câu ${i}: ❌ Chưa trả lời</p>`;
        }
    }

    let tongKet = `<strong style="margin-left: 15px;">Bạn đã trả lời đúng ${diem} / ${tongCau} câu.</strong>`;
    document.getElementById("ketQua").innerHTML = tongKet + "<br>" + ketQuaHTML;

    document.getElementById("CongKetQua").classList.add("chdk");

    localStorage.setItem("quizAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("quizScore", tongKet);
}
function CloseKetQua(){
    document.getElementById("CongKetQua").classList.remove("chdk");
    CloseCauHoiDangky();
    DongDangky();
    resetQuiz();
}
function resetQuiz() {
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("quizScore");
    document.getElementById("ketQua").innerHTML = "";
    document.querySelectorAll("input").forEach(input => input.checked = false);
}
for(var i=1;i<=30;i++){
    CreatAnswerOption(i);
}
loadPreviousAnswers();

