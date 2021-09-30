var cars = JSON.parse(cars2);
//https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
for (let val of cars) {
  document.getElementById(
    "grid"
  ).innerHTML += `<div class="col-12 col-md-6 col-lg-4"><div class="card" style="width: 18rem;">
  <img src=${val.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Class: ${val.class}</h5>
    <h6>Model: ${val.model}</h6>
    <h6>${val.propulsion}</h6>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>`;
} //Modal at button (<a...)
