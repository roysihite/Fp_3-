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

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  Swal.fire({
    title: 'Bingung membuat Web Bagaimana ?!',
    text: 'Kami Hadir untuk anda !',
    imageUrl: 'https://img.freepik.com/free-vector/online-consulting-concept-illustration_114360-9026.jpg?w=996&t=st=1670462799~exp=1670463399~hmac=f4d47525a19c3719219695afe38d4b16092fb73d65a158f5c5c6f228e09bde73/400/200',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
});

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
  Swal.fire({
    title: 'Jangan Takut!',
    text: 'Programmer Kami Selalu Siap dalam Kebutuhan Anda',
    imageUrl: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg?w=740&t=st=1670464721~exp=1670465321~hmac=21f2b6c873e4249fd3716a2618199c7f992e69fe220d99161506333188b4def7/400/200',
    imageWidth: 280,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
  Swal.fire({
    title: 'Design Keren!',
    text: 'Programmer Kami Selalu Siap dalam pembuatan Design Interaktif',
    imageUrl: 'https://img.freepik.com/free-vector/flat-design-web-developers_23-2148817994.jpg?w=740&t=st=1670464821~exp=1670465421~hmac=2f8d46a44817cec7aa94b3d8df6c6ab845c479d5c11d54b1edfab55700276d0e',
    imageWidth: 280,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
  Swal.fire({
    title: 'Prototype!',
    text: 'Programmer Kami Selalu Siap dalam pembuatan Prototype',
    imageUrl:
      'https://img.freepik.com/free-vector/people-drawing-web-page-elements-smartphone-lcd-screen-front-end-development-it-concept-software-development-process-pinkish-coral-blue-palette-vector-illustration_335657-1640.jpg?w=996&t=st=1670464932~exp=1670465532~hmac=ea2d9153a289c49fdbcacf156847da17525087b2a12e488c82f4698e3a45f432',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
});

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
  Swal.fire({
    title: 'Testing!',
    text: 'Testing Selalu Dilakukan Agar aplikasi berjalan sesuai dengan client mau',
    imageUrl: 'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2923.jpg?w=740&t=st=1670465110~exp=1670465710~hmac=52833aa515f86a697cd172340134ad9683549c625164890f587642b1f2e0a4bf',
    imageWidth: 350,
    imageHeight: 360,
    imageAlt: 'Custom image',
  });
});

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function () {
  Swal.fire({
    title: 'Apresiasi',
    text: 'Kami Apresiasi design anda yang ingin kami buat aplikasi dan dalam bentuk pembayaran apapun',
    imageUrl: 'https://img.freepik.com/free-vector/public-approval-concept_52683-31419.jpg?w=740&t=st=1670465290~exp=1670465890~hmac=c12c0b963b1d9d26d8b6c4752051a970441b221dabc723a621e05f641c2a807a',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Custom image',
  });
});
