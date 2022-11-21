// Navbar stiky by scroll
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".navbar_wrap").addClass("block");
      } else {
        $(".navbar_wrap").removeClass("block");
      }
    });
  });

// Nav item effect for scroll div
const sections = document.querySelectorAll('section');
const nav_a = document.querySelectorAll('nav #navbarSupportedContent ul li a');

window.addEventListener('scroll',() =>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >sectionTop -(sectionHeight)/5){
            current = section.getAttribute('id');
        }
    })
    nav_a.forEach(a=>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active');
        }
    })
})
