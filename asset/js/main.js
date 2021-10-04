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