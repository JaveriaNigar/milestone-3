// get refrencer to the form and display area 
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var phonenumber = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    //generate the resume content dynamically
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3>personal Information</h3>\n    \n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Name:</b>").concat(email, "</p>\n    <p><b>Name:</b>").concat(phonenumber, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('The display element is missing.');
    }
});
