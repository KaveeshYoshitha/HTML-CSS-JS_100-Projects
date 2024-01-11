// document.addEventListener("DOMContentLoaded", function (event) {
//   // Call skillQualification function to display skills by default
//   skillQualification(event);
// });

// function skillQualification(event) {
//   event.preventDefault();
//   let displayQualification = document.getElementById("qualification-display");
//   let skillsList = document.createElement("ul");

//   // List of skills
//   let skillsArray = [
//     "Bootstrap",
//     "C",
//     "C#",
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "Figma",
//     "Java",
//     "Saas",
//     "Tailwind Css",
//     "MongoDB",
//   ];

//   // Create list items for each skill
//   skillsArray.forEach((skill) => {
//     let listItem = document.createElement("li");
//     listItem.textContent = skill;
//     skillsList.appendChild(listItem);
//   });

//   // Clear existing content and append the new skills list
//   displayQualification.innerHTML = "";
//   displayQualification.appendChild(skillsList);
// }

// --------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Call skillQualification function to display skills by default
  skillQualification();

  // Add event listeners for other qualification categories
  document.getElementById("skills").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior
    skillQualification();
  });

  document
    .getElementById("education")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior
      educationQualification();
    });

  document
    .getElementById("certifications")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior
      certificationsQualification();
    });
});

function skillQualification() {
  let displayQualification = document.getElementById("qualification-display");
  let skillsList = document.createElement("ul");

  // List of skills
  let skillsArray = [
    "Bootstrap",
    "C",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "Java",
    "Saas",
    "Tailwind Css",
    "MongoDB",
  ];

  // Create list items for each skill
  skillsArray.forEach((skill) => {
    let listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });

  // Clear existing content and append the new skills list
  displayQualification.innerHTML = "";
  displayQualification.appendChild(skillsList);
}

function educationQualification() {
  let displayQualification = document.getElementById("qualification-display");
  let educationText = document.createElement("p");

  // Education details
  educationText.textContent =
    "Diploma in Software Engineering \n(Pending) \nNational Institute of Business Management \n2023";

  educationText.classList.add("certificateParagraph");

  // Clear existing content and append the new education text
  displayQualification.innerHTML = "";
  displayQualification.appendChild(educationText);
}

function certificationsQualification() {
  // let displayQualification = document.getElementById("qualification-display");
  // let certificationText = document.createElement("p");

  // // Certification details
  // certificationText.textContent = "Responsive Web Design by Free Code Camp";

  // certificationText.classList.add("certificateParagraph");

  // // Clear existing content and append the new certification text
  // displayQualification.innerHTML = "";
  // displayQualification.appendChild(certificationText);

  // ----------------------------------

  let displayQualification = document.getElementById("qualification-display");
  let certificationText = document.createElement("p");

  // Certification details
  certificationText.textContent = "Responsive Web Design by Free Code Camp";

  // Add a class to the certificationText element
  certificationText.classList.add("certificateParagraph"); // Replace "yourClassName" with the desired class name

  // Create an anchor element
  let certificationLink = document.createElement("a");
  certificationLink.href =
    "https://www.freecodecamp.org/certification/KaveeshYoshitha/responsive-web-design";
  certificationLink.target = "_blank"; // Open the link in a new tab

  // Append the certificationText to the anchor element
  certificationLink.appendChild(certificationText);

  // Clear existing content and append the new certification link
  displayQualification.innerHTML = "";
  displayQualification.appendChild(certificationLink);
}
