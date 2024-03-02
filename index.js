// Helper function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Helper function to check if a string contains only alphabetic characters
  function containsOnlyAlphabets(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
  // Helper function to generate a random color in hexadecimal format
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Perimeter of a rectangle with length 5 and width 3:", calculateRectanglePerimeter(5, 3)); // Output: 16
    console.log("Does 'hello' contain only alphabetic characters?", containsOnlyAlphabets('hello'));   // Output: true
    console.log("Does 'hello123' contain only alphabetic characters?", containsOnlyAlphabets('hello123'));   // Output: false
  
    // Generate and print 5 random colors
    console.log("Random colors:");
    for (let i = 0; i < 5; i++) {
      console.log(generateRandomColor());
    }
  }
  
  // Call the main function
  main();  