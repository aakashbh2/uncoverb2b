document.getElementById('route-why-us').addEventListener('click', function() {
    document.getElementById('why-us').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('route-how-it-works').addEventListener('click', function() {
    document.getElementById('how-it-works').scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("createPage");
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("closes")[0];

    var modalRefer = document.getElementById("myModalRefer");
    var btnRefer = document.getElementById("referPartner");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    btnRefer.onclick = function() {
        modalRefer.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    span1.onclick = function() {
        modalRefer.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalRefer.style.display = "none";
        }
    }
});

// document.querySelectorAll('.accordion-header').forEach(button => {
//     button.addEventListener('click', () => {
//         const accordionContent = button.nextElementSibling;

//         button.classList.toggle('active');

//         if (button.classList.contains('active')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//         } else {
//             accordionContent.style.maxHeight = 0;
//         }
//     });
// });

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
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }