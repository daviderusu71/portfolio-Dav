console.log("Portfolio Loaded");

const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonials(){

testimonials.forEach(t => t.classList.remove("active"));

index++;

if(index >= testimonials.length){
index = 0;
}

testimonials[index].classList.add("active");

}

setInterval(showTestimonials, 4000);

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {

nav.classList.toggle("active");

});
const skillSection = document.querySelector(".skills");
const bars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {

const sectionPos = skillSection.getBoundingClientRect().top;
const screenPos = window.innerHeight;

if(sectionPos < screenPos){

bars.forEach(bar => {

if(bar.classList.contains("html")) bar.style.width = "95%";
if(bar.classList.contains("css")) bar.style.width = "90%";
if(bar.classList.contains("js")) bar.style.width = "75%";
if(bar.classList.contains("responsive")) bar.style.width = "85%";

});

}

});