//  Brand logos -Swiper
const brandSwiper = new Swiper('.brand-swiper', {
        effect: 'slide',
        speed: 300, // Transition speed of 0.3 seconds
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 20, // Space between slides
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000, // Delay between slides
            disableOnInteraction: false, // Continue autoplay after interaction
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    });
// play button- video part section

 function playVideo() {
        const video = document.getElementById('myVideo');
        video.play();
        document.querySelector('.playbutton').style.display = 'none'; // Hide play button after clicking
    }

// Pricing section part 

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    question.addEventListener('click', () => {
      item.classList.toggle('active');
      toggle.textContent = item.classList.contains('active') ? '-' : '+';
    });
  });
});

// FAQ Section
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleIcon = item.querySelector('.faq-toggle');

    // Set initial icon based on whether it's open or not
    if (item.classList.contains('open')) {
      toggleIcon.src = 'cross.png'; // Minus icon for the first open item
    } else {
      toggleIcon.src = 'plus.png'; // Plus icon for others
    }

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items first (optional: if you want only one open at a time)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('open');
        const icon = otherItem.querySelector('.faq-toggle');
        if (icon) icon.src = 'plus.png';
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
        toggleIcon.src = 'cross.png'; // Change to minus
      }
    });
  });
});



