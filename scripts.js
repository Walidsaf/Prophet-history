// GSAP Animation for Header and Sections
gsap.from('header', { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
gsap.from('section', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'power3.out' });

// Initialize Swiper for Prophet Slider
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Lottie Animation Setup
lottie.loadAnimation({
    container: document.getElementById('welcome-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/welcome.json', // JSON animation file path
});
