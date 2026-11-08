// Course Button Function

function showMessage(course) {
    alert("You selected the " + course + " course!");
}

// Contact Form Function

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {

            event.preventDefault();

            let name = document.getElementById("name").value;
            let response = document.getElementById("response");

            response.innerHTML =
                "Thank you, " + name + "! Your message is ready.";

            form.reset();
        });
    }

});