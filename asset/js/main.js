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
    let a = 400 / (device.offsetTop - window.scrollY);
    let b = a > 1 ? 1 : a < 0.3 ? 0.3 : a;
    device.style.transform = 'scale(' + b + ')';
    device.style.opacity = a;
  }
}
