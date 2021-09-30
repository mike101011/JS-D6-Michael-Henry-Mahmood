var books2 = JSON.parse(books);
for (let i = 0; i < books2.length; i++) {
  if (books2[i].read === true) {
    document.body.innerHTML += `<div><img src=${books2[i].image} width="300px"><p style="background-color:green">Title: ${books2[i].tilte}<br>Author: ${books2[i].author}</p></div>`;
  } else {
    document.body.innerHTML += `<div><img src=${books2[i].image} width="300px"><p style="background-color:red">Title: ${books2[i].tilte}<br>Author: ${books2[i].author}</p></div>`;
  }
}
