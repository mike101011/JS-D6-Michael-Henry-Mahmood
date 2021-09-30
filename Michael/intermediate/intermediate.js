// Intermediate

var employees2 = JSON.parse(employees);
console.log(employees2);

for (let i = 0; i < employees2.length; i++) {
  document.getElementById(
    "datatable"
  ).innerHTML += `<tr> <td> ${employees2[i].uniqueID} </td>
        <td> ${employees2[i].firstName} </td> <td> ${employees2[i].lastName} </td>
        <td> ${employees2[i].emailAddress} </td> <td> ${employees2[i].jobTitle} </td>
        <td> ${employees2[i].salary} </td></tr>`;
}

//  for (let val of employees2){
//         document.getElementById("datatable").innerHTML +=  `<tr> <td> ${val.uniqueID} </td>
//         <td> ${val.firstName} </td> <td> ${val.lastName} </td>
//         <td> ${val.emailAddress} </td> <td> ${val.jobTitle} </td>
//         <td> ${val.salary} </td></tr>`
//  };
