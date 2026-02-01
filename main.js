var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});


