
// // Mobile Menu

// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// menuBtn.addEventListener("click", () => {

//     if(navLinks.style.display === "flex"){

//         navLinks.style.display = "none";

//     }else{

//         navLinks.style.display = "flex";

//         navLinks.style.flexDirection = "column";

//         navLinks.style.position = "absolute";

//         navLinks.style.top = "80px";

//         navLinks.style.right = "8%";

//         navLinks.style.background = "rgba(30,46,72,0.95)";

//         navLinks.style.padding = "20px";

//         navLinks.style.borderRadius = "15px";
//     }
// });


// // Navbar Shadow on Scroll

// window.addEventListener("scroll", () => {

//     const navbar = document.querySelector(".navbar");

//     if(window.scrollY > 50){

//         navbar.style.boxShadow =
//         "0 10px 30px rgba(0,0,0,0.2)";

//     }else{

//         navbar.style.boxShadow = "none";
//     }
// });


// // Scroll Reveal Animation

// const revealElements =
// document.querySelectorAll(
// ".glass-card, .project-card, .contact-card"
// );

// function revealOnScroll(){

//     revealElements.forEach((element)=>{

//         const windowHeight =
//         window.innerHeight;

//         const elementTop =
//         element.getBoundingClientRect().top;

//         if(elementTop < windowHeight - 100){

//             element.style.opacity = "1";

//             element.style.transform =
//             "translateY(0)";
//         }
//     });
// }

// revealElements.forEach((element)=>{

//     element.style.opacity = "0";

//     element.style.transform =
//     "translateY(50px)";

//     element.style.transition =
//     "all 0.8s ease";
// });

// window.addEventListener(
// "scroll",
// revealOnScroll
// );

// revealOnScroll();


// // Typing Animation

// const words = [

//     "Frontend Developer",
//     "AI & ML Student",
//     "Future MERN Engineer",
//     "Problem Solver"

// ];

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// const typingElement =
// document.createElement("span");

// typingElement.classList.add("typing-text");

// const heroTag =
// document.querySelector(".hero-tag");

// heroTag.after(typingElement);

// function typeEffect(){

//     const currentWord =
//     words[wordIndex];

//     if(!isDeleting){

//         typingElement.textContent =
//         currentWord.substring(
//             0,
//             charIndex + 1
//         );

//         charIndex++;

//         if(charIndex === currentWord.length){

//             isDeleting = true;

//             setTimeout(
//                 typeEffect,
//                 1500
//             );

//             return;
//         }

//     }else{

//         typingElement.textContent =
//         currentWord.substring(
//             0,
//             charIndex - 1
//         );

//         charIndex--;

//         if(charIndex === 0){

//             isDeleting = false;

//             wordIndex++;

//             if(wordIndex >= words.length){

//                 wordIndex = 0;
//             }
//         }
//     }

//     setTimeout(
//         typeEffect,
//         isDeleting ? 50 : 100
//     );
// }

// typeEffect();


// // Smooth Active Navigation

// const sections =
// document.querySelectorAll("section");

// const navItems =
// document.querySelectorAll(
// ".nav-links a"
// );

// window.addEventListener(
// "scroll",
// ()=>{

//     let current = "";

//     sections.forEach(section=>{

//         const sectionTop =
//         section.offsetTop;

//         if(
//             pageYOffset >=
//             sectionTop - 200
//         ){

//             current =
//             section.getAttribute("id");
//         }
//     });

//     navItems.forEach(link=>{

//         link.classList.remove("active");

//         if(
//             link.getAttribute("href")
//             ===
//             "#" + current
//         ){

//             link.classList.add("active");
//         }
//     });
// });


// // Mouse Glow Effect

// const glow =
// document.createElement("div");

// glow.style.position = "fixed";
// glow.style.width = "300px";
// glow.style.height = "300px";
// glow.style.borderRadius = "50%";
// glow.style.pointerEvents = "none";
// glow.style.background =
// "radial-gradient(circle, rgba(250,124,125,0.15), transparent 70%)";
// glow.style.transform =
// "translate(-50%, -50%)";
// glow.style.zIndex = "-1";

// document.body.appendChild(glow);

// document.addEventListener(
// "mousemove",
// (e)=>{

//     glow.style.left =
//     e.clientX + "px";

//     glow.style.top =
//     e.clientY + "px";
// });




// Mobile Menu

// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// if(menuBtn){

//     menuBtn.addEventListener("click", () => {

//         navLinks.classList.toggle("show-menu");

//     });

// }


// // Navbar Shadow

// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {

//     if(window.scrollY > 50){

//         navbar.style.boxShadow =
//         "0 10px 30px rgba(0,0,0,0.2)";

//     }else{

//         navbar.style.boxShadow = "none";
//     }

// });


// // Typing Animation

// const words = [
//     "Frontend Developer",
//     "AI & ML Student",
//     "Future MERN Engineer",
//     "Problem Solver"
// ];

// let wordIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// const typingElement =
// document.createElement("span");

// typingElement.classList.add("typing-text");

// const heroTag =
// document.querySelector(".hero-tag");

// if(heroTag){

//     heroTag.after(typingElement);

// }

// function typeEffect(){

//     const currentWord =
//     words[wordIndex];

//     if(!isDeleting){

//         typingElement.textContent =
//         currentWord.substring(
//             0,
//             charIndex + 1
//         );

//         charIndex++;

//         if(charIndex === currentWord.length){

//             isDeleting = true;

//             setTimeout(typeEffect,1500);

//             return;
//         }

//     }else{

//         typingElement.textContent =
//         currentWord.substring(
//             0,
//             charIndex - 1
//         );

//         charIndex--;

//         if(charIndex === 0){

//             isDeleting = false;

//             wordIndex++;

//             if(wordIndex >= words.length){

//                 wordIndex = 0;
//             }
//         }
//     }

//     setTimeout(
//         typeEffect,
//         isDeleting ? 50 : 100
//     );
// }

// typeEffect();


// // Active Navbar Link

// const sections =
// document.querySelectorAll("section");

// const navItems =
// document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {

//         const sectionTop =
//         section.offsetTop;

//         if(window.scrollY >= sectionTop - 150){

//             current =
//             section.getAttribute("id");
//         }
//     });

//     navItems.forEach(link => {

//         link.classList.remove("active");

//         if(
//             link.getAttribute("href")
//             ===
//             "#" + current
//         ){

//             link.classList.add("active");
//         }
//     });

// });
// Mobile Menu



// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// if(menuBtn){
//     menuBtn.addEventListener("click", () => {
//         navLinks.classList.toggle("show-menu");
//     });
// }


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
    });
}

// Navbar Shadow

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.2)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});