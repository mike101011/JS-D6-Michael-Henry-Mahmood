// Basic


let sandwiches2 = JSON.parse(sandwiches);
let fries2 = JSON.parse(fries);
console.log(sandwiches2);
document.getElementById("message").innerHTML =
  "My favourite sandwich is " +
  sandwiches2.sandwich +
  " which has approximately " +
  sandwiches2.calories +
  ", along with it I enjoy eating " +
  fries2.fries_size +
  " which have about " +
  fries2.calories +
  " calories.";


  // Intermediate

  