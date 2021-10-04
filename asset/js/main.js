// di chuyển modal dialog bằng modal header
$('.modal-dialog').draggable({
  handle: ".modal-header"
});

// ngăn ẩn dropdown khi click vào bên trong dropdown
$(document).on('click', '.header_nav .dropdown-menu', function (e) {
  e.stopPropagation();
});

// close accessibility menu
$('.accessibility_close_btn').click(function () {
  $('.accessibility_menu').toggleClass('show')
})

document.onscroll = function () {
  // community section backgroundColor
  var community = document.querySelector('.community_section')
  if (community.offsetTop - window.scrollY < 400) {
    community.style.backgroundColor = '#f7f7f7'
  } else {
    community.style.backgroundColor = '#a9d0d2'
  }

  // devices animation
  var devices = document.querySelectorAll('.device_item')
  for (var device of devices) {
    let x = device.offsetTop - window.scrollY;
    let y = x > 0 ? x : 1;
    let a = 400 / y;
    let b = a > 1 ? 1 : a < 0.3 ? 0.3 : a;
    device.style.transform = 'scale(' + b + ')';
    device.style.opacity = a;
  }

  // devices animation
  {
    var records = document.querySelectorAll('.record_item')
    var recordsAnimation = document.querySelector('.records_animation')
    let x = recordsAnimation.offsetTop - window.scrollY;
    let y = x > 0 ? x : 1;
    let a = 200 / y;
    let b = a > 1 ? 1 : a < 0.3 ? 0.3 : a;
    records[0].style.left = -680 * b + 'px';
    records[1].style.left = -460 * b + 'px';
    records[2].style.left = -330 * b + 'px';
    records[3].style.left = -60 * b + 'px';
    records[4].style.left = 40 * b + 'px';
    records[5].style.left = 170 * b + 'px';
    records[6].style.left = 370 * b + 'px';
  }


  
}

