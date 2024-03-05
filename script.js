function openNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "50%";
}
function closeNavbar() {
    document.getElementById("sideNavigationBar")
        .style.width = "0%";
}






// Data array containing information about doctors
const doctors = [
    { name: "Dr. Arjun", distance: "1.5 km", hospital: "Kaveri Hospital", image: "asset/arvind.jpg" },
    { name: "Dr. Kartik", distance: "2.5 km", hospital: "Sai Hospital", image: "asset/kartik.jpg" },
    { name: "Dr. Sara", distance: "4.5km", hospital: "Apollo Hospital", image: "asset/sara.jpg" },
    { name: "Dr. Ajay", distance: "1.5 km", hospital: "Kaveri Hospital", image: "asset/ajay.jpg" },
    { name: "Dr. Tarun", distance: "5.5 km", hospital: "GH Hospital", image: "asset/tarun.jpg" }
];

// Function to generate cards for doctors
function generateDoctorCards(doctors) {
    // Get the container where doctor cards will be appended
    const container = document.getElementById("doctorContainer");

    // Iterate through each doctor object in the array
    doctors.forEach(doctor => {
        // Create a new div element for the doctor card
        const card = document.createElement("div");
        card.classList.add("card"); // Add 'card' class to the div

        // Create an image element for the doctor's image
        const img = document.createElement("img");
        img.src = doctor.image; // Set the image source
        img.alt = doctor.name; // Set the alt attribute for accessibility
        img.style.width = "110px"; // Set the width of the image
        img.style.height = "90px"; // Set the height of the image

        // Create a heading element for the doctor's name
        const name = document.createElement("h2");
        name.textContent = doctor.name; // Set the text content of the heading

        // Create a paragraph element for the doctor's distance
        const distance = document.createElement("p");
        distance.textContent = "Near " + doctor.distance; // Set the text content
        distance.style.fontSize = "22px";
        distance.style.fontWeight = "300"
        // Create a paragraph element for the doctor's hospital
        const hospital = document.createElement("p");
        hospital.textContent = "Hospital: " + doctor.hospital; // Set the text content
        hospital.style.fontSize = "16px";
        
        // Append the image, name, distance, and hospital elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(distance);
        card.appendChild(hospital);

        // Append the completed card to the container
        container.appendChild(card);
    });
}

// Generate doctor cards when the page loads
window.onload = function () {
    generateDoctorCards(doctors);
}; 
