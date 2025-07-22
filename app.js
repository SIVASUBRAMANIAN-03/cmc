// --- Swiper Slider Initialization ---
const swiper = new Swiper('.swiper', {
  loop: true,
  // Add autplay for dynamic feel
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  // Pagination dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints: Adjusts settings for different screen sizes
  breakpoints: {
    // Mobile-first default is 1 slide
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // When window width is >= 1280px
    1280: {
        slidesPerView: 4,
        spaceBetween: 30
    }
  }
});

// --- Mobile Hamburger Menu Logic ---
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// --- Close Mobile Menu When a Link is Clicked ---
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
    });
});

// --- Reveal on Scroll Animation using Intersection Observer ---
const animatedElements = document.querySelectorAll('.scroll-animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When the element is in view, add the 'visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: stop observing once animated
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

animatedElements.forEach(el => observer.observe(el));