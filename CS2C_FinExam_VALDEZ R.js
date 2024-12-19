function sortArrays() {
  let numbersStr = prompt("Enter numbers separated by commas:");
  let namesStr = prompt("Enter names separated by commas:");

  let numbers = numbersStr.split(",").map(Number);
  let names = namesStr.split(",");

  let mergedArray = numbers.concat(names);

  numbers.sort((a, b) => b - a); // Reverse numerical sort
  names.sort(); // Alphabetical sort

  console.log("Merged array:", mergedArray);
  console.log("Numbers (reverse sorted):", numbers);
  console.log("Names (alphabetical sorted):", names);
}

sortArrays();
