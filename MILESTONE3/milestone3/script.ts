// get refrencer to the form and display area 
const form = document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;

//Handle form submission
form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();  //prevent page reload

    //collect input values

    const name = (document.getElementById('name') as HTMLInputElement).value 
    const email = (document.getElementById('Email') as HTMLInputElement).value 
    const phonenumber = (document.getElementById('phone') as HTMLInputElement).value 
    const education = (document.getElementById('education') as HTMLInputElement).value 
    const experience = (document.getElementById('Experience') as HTMLInputElement).value 
    const skills = (document.getElementById('Skills') as HTMLInputElement).value 
    
    //generate the resume content dynamically
    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>personal Information</h3>
    
    <p><b>Name:</b>${name}</p>
    <p><b>email:</b>${email}</p>
    <p><b>phonenumber:</b>${phonenumber}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>


    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumehtml;
    } else {
        console . error('The resume display element is missing.');
    }
});