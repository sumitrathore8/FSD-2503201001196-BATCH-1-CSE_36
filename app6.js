// Import the File System (fs) module
const fs = require("fs");

// Create a file named student.txt
fs.writeFile("student.txt", "Hello Student!", (err) => {

    // Check if there is an error
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully!");
});