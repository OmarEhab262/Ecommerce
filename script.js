const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
/////
var index = document.querySelector(".index");
var shop = document.querySelector(".shop");
var blog = document.querySelector(".blog");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");
var carttt = document.querySelector(".carttt");
var sproduct = document.querySelector(".sproduct");
var footer = document.querySelector(".footer");

one.onclick = function () {
  index.classList.add("showw");
  index.classList.remove("noshow");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("noshow");
  about.classList.remove("showw");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  carttt.classList.add("noshow");
  carttt.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
two.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("showw");
  shop.classList.remove("noshow");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("noshow");
  about.classList.remove("showw");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  carttt.classList.add("noshow");
  carttt.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
three.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("showw");
  blog.classList.remove("noshow");
  about.classList.add("noshow");
  about.classList.remove("showw");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  carttt.classList.add("noshow");
  carttt.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
four.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("showw");
  about.classList.remove("noshow");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  carttt.classList.add("noshow");
  carttt.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
five.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("noshow");
  about.classList.remove("showw");
  contact.classList.add("showw");
  contact.classList.remove("noshow");
  carttt.classList.add("noshow");
  carttt.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
six.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("noshow");
  about.classList.remove("showw");
  carttt.classList.add("showw");
  carttt.classList.remove("noshow");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
let bb = document.querySelector(".ddf");
bb.onclick = function () {
  index.classList.add("noshow");
  index.classList.remove("showw");
  shop.classList.add("noshow");
  shop.classList.remove("showw");
  blog.classList.add("noshow");
  blog.classList.remove("showw");
  about.classList.add("noshow");
  about.classList.remove("showw");
  carttt.classList.add("showw");
  carttt.classList.remove("noshow");
  contact.classList.add("noshow");
  contact.classList.remove("showw");
  sproduct.classList.remove("showw");
  sproduct.classList.add("noshow");
  footer.classList.add("showww");
  window.scrollTo({
    top: 0,
    left: 0,
  });
};

let img = document.querySelector(".img");

let main_name = document.querySelector(".main-name");
let main_price = document.querySelector(".main-price");
let iconx = document.querySelector(".single-pro-details .icon");
let pros = document.querySelectorAll(".pro");
let namee = document.querySelectorAll(".name-product");
let price = document.querySelectorAll(".price-product");
for (let i = 0; i < pros.length; i++) {
  let pro = pros[i];
  let names = namee[i];
  let prices = price[i];
  pro.onclick = function () {
    index.classList.add("noshow");
    shop.classList.add("noshow");
    index.classList.remove("showw");
    shop.classList.remove("showw");
    sproduct.classList.remove("noshow");
    footer.classList.remove("showww");
    footer.classList.add("noshow");
    main_name.innerHTML = names.innerHTML;
    main_price.innerHTML = prices.innerHTML;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
}
iconx.onclick = function () {
  shop.classList.add("showw");
  shop.classList.remove("noshow");
  sproduct.classList.add("noshow");
  sproduct.classList.remove("showw");
};

function im(imag) {
  img.src = imag;
}

//////////////////////////////////////////////////////////////////
let num = document.querySelector(".num");
let main_butn = document.querySelector(".main-butn");
let numberr = document.querySelector(".numberr");

let cont = 0;
main_butn.onclick = function () {
  cont++;
  num.innerHTML = cont;
  num.style.display = "flex";
  /////x

  var x = document.createElement("i");
  var imggg = document.createElement("img");
  var nmaemm = document.createElement("span");
  var pprice = document.createElement("span");
  var myInput = document.createElement("span");
  var final = document.createElement("span");

  /////////
  x.classList.add("fa-solid");
  x.classList.add("fa-xmark");
  x.classList.add("tx");
  imggg.classList.add("imggg");
  final.classList.add("xfinal");
  ////////
  var xtd = document.createElement("td");
  var xname = document.createElement("td");
  var xprice = document.createElement("td");
  var ximg = document.createElement("td");
  var xmyInput = document.createElement("td");
  var xfinal = document.createElement("td");
  ////////////
  nmaemm.innerHTML = main_name.innerHTML;
  pprice.innerHTML = main_price.innerHTML;
  myInput.innerHTML = numberr.value;
  imggg.src = img.src;

  var numbers = pprice.textContent.match(/\d+/g);
  final.innerHTML = numbers[0] * myInput.innerHTML;
  /////////////////////////////////
  xtd.appendChild(x);
  ximg.appendChild(imggg);
  xname.appendChild(nmaemm);
  xprice.appendChild(pprice);
  xmyInput.appendChild(myInput);
  xfinal.appendChild(final);
  //////////
  createdtr = document.createElement("tr"); //<tr></tr>// to add two tds use parent.appendChild(child )
  createdtr.appendChild(xtd); //<tr><td>1000</td></tr>
  createdtr.appendChild(ximg);
  createdtr.appendChild(xname);
  createdtr.appendChild(xprice);
  createdtr.appendChild(xmyInput);
  createdtr.appendChild(xfinal);
  ///////////////////
  var total = 0;
  var totall = document.querySelector(".totall");
  document.querySelector(".main-table").appendChild(createdtr);
  for (let i = 0; i < cells.length; i++) {
    total += parseFloat(cells[i].innerHTML);
  }
  totall.innerHTML = total;
  if (offer.innerHTML === "50%") {
    ggg.innerHTML = total / 2;
  } else {
    ggg.innerHTML = total;
  }
};

let codee = document.querySelector(".codee");
let ggg = document.querySelector(".ggg");
var eee = document.querySelector(".vvvvv");
var offer = document.querySelector(".offer");
eee.onclick = function () {
  if (codee.value === "omar1234") {
    offer.innerHTML = "50%";
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Congratulations, you took the 50% off offer.",
      showConfirmButton: false,
      timer: 2000,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Complete your Data first before submit!",
    });
  }
};

const table = document.querySelector(".main-table");
const cells = table.getElementsByClassName("xfinal");

// loop through each element of the array
