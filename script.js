document.getElementById("buzzButton").addEventListener("click", function () {
    // Get the live location using Geolocation API
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }

    // Nearest police station - Here, we use a static number for simplicity.
    document.getElementById("policeNumber").innerHTML = "+91-100"; // Emergency police number for India
});

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    document.getElementById("location").innerHTML = `Latitude: ${lat}, Longitude: ${lon}`;

    // You can use a real-world API to fetch the nearest police station based on location here.
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}

// Add emergency contact functionality
document.getElementById("addContactBtn").addEventListener("click", function () {
    const contactInput = document.getElementById("contactInput").value;
    if (contactInput) {
        document.getElementById("contact").innerHTML = contactInput;
        alert("Emergency contact added successfully.");
    } else {
        alert("Please enter a valid phone number.");
    }
});
        
