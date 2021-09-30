// Intermediate
var employees2 = JSON.parse(employees);
var vtable = document.getElementById("datatble");

for (let j = 0; j < employees2.length; j++) {
  document.getElementById(
    "datatable"
  ).innerHTML += `<th>${employees2.uniqueID}</th>`;
}
