// Bad Example - comment doesn't tell why, only what and how

// This function increments the value of i by 1
function incrementI(i) {
  i = i + 1; // Add one to i
  return i;
}

// Better Example - comment tells a why

// This function increments the value of index to move to the next element
function incrementI(i) {
  i = i + 1;
  return i;
}

// Good Example - the code tells all that is needed

function moveToNextElement(index) {
  index = index + 1;
  return index;
}



function calculateBMI(height, weight) {
  // The formula for BMI is weight in kilograms divided by height in meters squared
const heightInMeters = height / 100;
const bmi = weight / (heightInMeters * heightInMeters);
return bmi;
}
