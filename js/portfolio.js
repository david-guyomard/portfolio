$(document).ready(function () {
    window.alert('En venant sur ce site vous acceptez les cookies !')
    $("#contact").click(function () {
        $("#modalShow").modal('show');
    });
    $("#cvLink").click(function () {
        $("#modalCv").modal('show')
    });
    $("#profilePics").click(function () {
        $("#modalPics").modal('show');
    });
    $(".parallax-window").parallax({
        naturalWidth: 600,
        naturalHeight: 400
    });
});