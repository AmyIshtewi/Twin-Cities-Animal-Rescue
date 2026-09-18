// Twin Cities Animal Rescue - Interactive Volunteer Feature

const volunteerOptions = [
    "Fostering",
    "Adoption Events",
    "Pet Transport",
    "General Volunteering"
];

function saveVolunteerInterest(interest) {
    localStorage.setItem("volunteerInterest", interest);
}


function loadVolunteerInterest() {
    return localStorage.getItem("volunteerInterest");
}

function displayInterestMessage(interest) {
    const message = document.getElementById("interestMessage");

    if (interest) {
        message.textContent = "Thank you! We saved your interest in " + interest + ".";
    } else {
        message.textContent = "Please choose a volunteer opportunity.";
    }
}

const saveButton = document.getElementById("saveInterest");
const volunteerSelect = document.getElementById("volunteerSelect");

saveButton.addEventListener("click", function () {
    const selectedInterest = volunteerSelect.value;

    if (selectedInterest) {
        saveVolunteerInterest(selectedInterest);
    }

    displayInterestMessage(selectedInterest);
});

const savedInterest = loadVolunteerInterest();

if (savedInterest) {
    volunteerSelect.value = savedInterest;
    displayInterestMessage(savedInterest);
}

const interestForm = document.getElementById("interestForm");

interestForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const interest = document.getElementById("interest");
    const availability = document.getElementById("availability");
    const experience = document.getElementById("experience");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const interestError = document.getElementById("interestError");
    const availabilityError = document.getElementById("availabilityError");
    const experienceError = document.getElementById("experienceError");
    const messageError = document.getElementById("messageError");
    nameError.textContent = "";
    emailError.textContent = "";
    interestError.textContent = "";
    availabilityError.textContent = "";
    experienceError.textContent = "";
    messageError.textContent = "";
    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
        }
        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email address.";
            isValid = false;
            }
            else if (!email.value.includes("@")) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
                }
                if (interest.value === "") {
                    interestError.textContent = "Please select an interest type.";
                    isValid = false;
                    }
                    if (availability.value.trim() === "") {
                        availabilityError.textContent = "Please enter your availability.";
                        isValid = false;
                        }
                        if (experience.value.trim() === "") {
                            experienceError.textContent = "Please describe your experience with pets.";
                            isValid = false;
                            }
                            if (message.value.trim() === "") {
                                messageError.textContent = "Please enter a short message.";
                                isValid = false;
                                }
                                if (isValid) {
                                    alert("Thank you! Your interest form is complete.");
                                    }
                                    });