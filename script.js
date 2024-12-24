// Sample data for courses, faculty, and events
const courses = [
    { name: "Computer Science", duration: "4 years" },
    { name: "Mechanical Engineering", duration: "4 years" },
    { name: "Electrical Engineering", duration: "4 years" },
    { name: "Business Administration", duration: "3 years" }
];

const faculty = [
    { name: "Dr. John Doe", department: "Computer Science", position: "Professor" },
    { name: "Dr. Jane Smith", department: "Mechanical Engineering", position: "Associate Professor" },
    { name: "Dr. Alex Brown", department: "Electrical Engineering", position: "Assistant Professor" }
];

const events = [
    { title: "Annual Tech Symposium", date: "2024-03-10", description: "A conference showcasing the latest in technology." },
    { title: "Sports Day", date: "2024-04-05", description: "A fun-filled day with various sports and activities." },
    { title: "Cultural Fest", date: "2024-05-15", description: "An event celebrating arts and culture." }
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById("courseList");
    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("card");
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Duration: ${course.duration}</p>
        `;
        courseList.appendChild(courseCard);
    });
}

// Function to display faculty
function displayFaculty() {
    const facultyList = document.getElementById("facultyList");
    faculty.forEach(member => {
        const facultyCard = document.createElement("div");
        facultyCard.classList.add("card");
        facultyCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>Department: ${member.department}</p>
            <p>Position: ${member.position}</p>
        `;
        facultyList.appendChild(facultyCard);
    });
}

// Function to display events
function displayEvents() {
    const eventList = document.getElementById("eventList");
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("card");
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

// Call functions to display content
displayCourses();
displayFaculty();
displayEvents();
