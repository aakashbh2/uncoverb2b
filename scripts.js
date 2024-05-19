// const carousel = document.querySelector('.carousel');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const carouselItems = document.querySelectorAll('.carousel-item');
// let scrollAmount = 0;
// const scrollStep = carousel.clientWidth;
// const scrollInterval = 10000; // 10 seconds

// function scrollNext() {
//     if (scrollAmount >= (carouselItems.length - 1) * scrollStep) {
//         scrollAmount = 0; // Reset to first item if end is reached
//     } else {
//         scrollAmount += scrollStep;
//     }
//     carousel.scrollTo({
//         top: 0,
//         left: scrollAmount,
//         behavior: 'smooth'
//     });
// }

// function scrollPrev() {
//     if (scrollAmount <= 0) {
//         scrollAmount = (carouselItems.length - 1) * scrollStep; // Go to last item if start is reached
//     } else {
//         scrollAmount -= scrollStep;
//     }
//     carousel.scrollTo({
//         top: 0,
//         left: scrollAmount,
//         behavior: 'smooth'
//     });
// }

// nextButton.addEventListener('click', scrollNext);
// prevButton.addEventListener('click', scrollPrev);

// // Auto-scroll every 10 seconds
// setInterval(scrollNext, scrollInterval);

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("referPartner");
    var btn2 = document.getElementById("createPage");
    var span = document.getElementsByClassName("close")[0];
    var cancelBtn = document.getElementById("cancelBtn");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    btn2.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on the cancel button, close the modal
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

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
