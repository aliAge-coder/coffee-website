// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



// Nav open close
const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    openBtn = body.querySelector('.open-btn'),
    closeBtn = navMenu.querySelector('.close-btn');

if (navMenu && openBtn) {
    openBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    });
}

if (navMenu && closeBtn) {
    closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    });
}



// Change header bg color
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 5) {
        document.querySelector('header').classList.add('header-active');
    } else {
        document.querySelector('header').classList.remove('header-active');
    }
    console.log(scrollY);


    // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');
    if (scrollY > 250) {
        scrollUpBtn.classList.add('scrollUpBtn-active');
    } else {
        scrollUpBtn.classList.remove('scrollUpBtn-active');
    }


    // Nav link indicator
    const sections = document.querySelectorAll('.section[id]');
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight,
              sectionTop = section.offsetTop - 60;

              let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`);
              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navId.classList.add('active-navlink');
              } else {
                navId.classList.remove('active-navlink');
              }

              navId.addEventListener("click", () => {
                navMenu.classList.remove("open");
                body.style.overflowY = "scroll";
              });
    });
});



// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal(`.section-subTitle, .section-title, .section-description, .brand-img, .testimonial, .newsletter .logo-content, .newsletter-inputBox, .newsletter .media-icons, .footer-content, .footer-links`, {interval:100,});
sr.reveal(`.about-imgContent, .menu-items`, {origin: 'left'});
sr.reveal(`.about-details, .time-table`, {origin: 'right'});