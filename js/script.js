window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.style.opacity = 1 - scrollPosition / 300;
});

document.getElementById("arrow").addEventListener("click", function (event) {
    event.preventDefault();
    var content = document.getElementById("section");
    if (content) {
        content.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error('Element with id "section" not found');
    }
});

var backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = "1";
    } else {
        backToTopButton.style.opacity = "0";
    }
});

backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
