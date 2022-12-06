function save() {
  let fname = document.getElementById('f-name');
  let lname = document.getElementById('l-name');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let ulasan = document.getElementById('ulasan');

  var value = 1;

  if ((fname.value == 0, lname.value == 0, email.value == 0, phone.value == 0, ulasan.value == 0)) {
    alert('Lengkapi Form');
    return;
  } else {
    alert('Pesan Telah Terkirim');
    return;
  }
}

$(function () {
  // Owl Carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
  });
});
