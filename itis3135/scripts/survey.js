const courseSection = document.getElementById("course-section");
let courses = [];

function addCourse() {
    let courseLabel = document.createElement("label");
    courseLabel.textContent = "Course Name: ";
    
    let courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.setAttribute("required", "");

    let courseDescriptionLabel = document.createElement("label");
    courseDescriptionLabel.textContent = "Course Description: ";

    let courseDescriptionInput = document.createElement("input");
    courseDescriptionInput.type = "text";
    courseDescriptionInput.setAttribute("required", "");

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        courseSection.removeChild(courseLabel);
        courseSection.removeChild(courseInput);
        courseSection.removeChild(courseDescriptionLabel);
        courseSection.removeChild(courseDescriptionInput);
        courseSection.removeChild(deleteBtn);
    };

    courseSection.appendChild(courseLabel);
    courseSection.appendChild(courseInput);
    courseSection.appendChild(courseDescriptionLabel);
    courseSection.appendChild(courseDescriptionInput);
    courseSection.appendChild(deleteBtn);

    courses.push({ courseInput, courseDescriptionInput });
}

document.querySelector("#course-section button").addEventListener("click", addCourse);

document.getElementById("introform").addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if all required fields are filled
    if (!document.getElementById("name").value || 
        !document.getElementById("mascot").value || 
        !document.getElementById("image").value || 
        !document.getElementById("image-caption").value || 
        !document.getElementById("personal-background").value || 
        !document.getElementById("professional-background").value || 
        !document.getElementById("academic-background").value || 
        !document.getElementById("web-background").value || 
        !document.getElementById("computer-platform").value || 
        !document.getElementById("agree").checked) {
        
        alert("Please fill out all required fields.");
        return;
    }

    // Get form data
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);
    const imageCaption = document.getElementById("image-caption").value;
    const personalBackground = document.getElementById("personal-background").value;
    const professionalBackground = document.getElementById("professional-background").value;
    const academicBackground = document.getElementById("academic-background").value;
    const webBackground = document.getElementById("web-background").value;
    const computerPlatform = document.getElementById("computer-platform").value;
    const funny = document.getElementById("funny").value;
    const anything = document.getElementById("anything").value;

    // Collect courses data
    const userCourses = courses.map(({ courseInput, courseDescriptionInput }) => ({
        name: courseInput.value,
        description: courseDescriptionInput.value
    }));

    // Generate the HTML for user-created page
    let newPageContent = `
        <h2>  ${name} Introduction Page | ${mascot} </h2>
        <figure>
            <img src="${imageUrl}" alt="${imageCaption}">
            <figcaption> ${imageCaption}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${personalBackground}</li>
            <li><strong>Professional Background:</strong> ${professionalBackground}</li>
            <li><strong>Academic Background:</strong> ${academicBackground}</li>
            <li><strong>Background in Web Development:</strong> ${webBackground}</li>
            <li><strong>Primary Computer Platform:</strong> ${computerPlatform}</li>
            <li><strong>Courses:</strong><ol>${userCourses.map((course) => `<li><strong>${course.name}:</strong>: ${course.description}</li>`).join('')}</ol>
            <li><strong>Funny Thing:</strong> ${funny}</li>
            <li><strong>Anything Else?</strong>${anything}</li>
        </ul>
        
        <button id="reset-page">Reset</button>
    `;
    

    // Display the generated page in a new tab or as a new section in the current page
    document.querySelector("main").innerHTML = newPageContent;
    document.getElementById("reset-page").addEventListener("click", function() {
        location.reload(); // Reload the page to restore the form
    });
});


