const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselItems = document.querySelectorAll('.carousel-item');
let scrollAmount = 0;
const scrollStep = carousel.clientWidth;
const scrollInterval = 10000; // 10 seconds

function scrollNext() {
    if (scrollAmount >= (carouselItems.length - 1) * scrollStep) {
        scrollAmount = 0; // Reset to first item if end is reached
    } else {
        scrollAmount += scrollStep;
    }
    carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function scrollPrev() {
    if (scrollAmount <= 0) {
        scrollAmount = (carouselItems.length - 1) * scrollStep; // Go to last item if start is reached
    } else {
        scrollAmount -= scrollStep;
    }
    carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}

nextButton.addEventListener('click', scrollNext);
prevButton.addEventListener('click', scrollPrev);

// Auto-scroll every 10 seconds
setInterval(scrollNext, scrollInterval);


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    });
});
