/* swipers located on main page*/

var swiperReview = new Swiper('.swiper-review', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.review-slider-button-next',
    prevEl: '.review-slider-button-prev',
  },
});

var swiperOffers = new Swiper('.swiper-offers', {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: '.review-slider-button-offer-next',
    prevEl: '.review-slider-button-offer-prev',
  },
});

var swiperAbout = new Swiper('.swiper-about-company', {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.about-swiper-button-next',
    prevEl: '.about-swiper-button-prev',
  },
});


var swiperOffice = new Swiper('.swiper-office', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.office-swiper-button-next',
    prevEl: '.office-swiper-button-prev',
  },
});
/* __________________________________________________________________*/




/* Buttons located on product card page, shows and hides
   some parts of this page*/
document.getElementById("button-discrabe")
  .addEventListener ("click", function() {
    var element1 = document.getElementById("object-details__details-about-build");
    element1.classList.add("product-page-active");
    var element2 = document.getElementById("object-detils-build-map");
    element2.classList.remove("product-page-active");
    var element3 = document.getElementById("object-detils-map");
    element3.classList.remove("product-page-active");

  }, false);

document.getElementById("button-plan")
  .addEventListener ("click", function() {
    var element1 = document.getElementById("object-details__details-about-build");
    element1.classList.remove("product-page-active");
    var element2 = document.getElementById("object-detils-build-map");
    element2.classList.add("product-page-active");
    var element3 = document.getElementById("object-detils-map");
    element3.classList.remove("product-page-active");
  }, false);

  
document.getElementById("button-on-map")
  .addEventListener ("click", function() {
    var element1 = document.getElementById("object-details__details-about-build");
    element1.classList.remove("product-page-active");
    var element2 = document.getElementById("object-detils-build-map");
    element2.classList.remove("product-page-active");
    var element3 = document.getElementById("object-detils-map");
    element3.classList.add("product-page-active");
  }, false);
/* __________________________________________________________________*/





  /* Buttons located on survey sistem page, functions belong oppening hidden
  lists*/
function buttonWithListPrice() {
  document.getElementById("myDropdownPrice").classList.toggle("show");


window.onclick = function(event) {
if (!event.target.matches('.dropbtn-price')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}

function buttonWithListRegion() {
  document.getElementById("myDropdownRegion").classList.toggle("show");


window.onclick = function(event) {
if (!event.target.matches('.dropbtn-region')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}

function buttonWithListRelief() {
  document.getElementById("myDropdownRelief").classList.toggle("show");



window.onclick = function(event) {
if (!event.target.matches('.dropbtn-relief')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}


function buttonWithListStyle() {
  document.getElementById("myDropdownStyle").classList.toggle("show");



window.onclick = function(event) {
if (!event.target.matches('.dropbtn-style')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}
 /* __________________________________________________________________*/



/* Buttons located on header, functions belong oppening hidden
  lists*/




  
function buttonWithListType() {
  document.getElementById("myDropdownType").classList.toggle("show");



window.onclick = function(event) {
if (!event.target.matches('.dropbtn-house-type')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}

function buttonWithListSecondary() {
  document.getElementById("myDropdownSecondary").classList.toggle("show");



window.onclick = function(event) {
if (!event.target.matches('.dropbtn-secondary')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
} 
}
/* __________________________________________________________________*/