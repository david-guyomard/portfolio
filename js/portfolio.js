$(document).ready(function () {
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
    /*$("#competences, #mesProjets, #mesExperiences").parallax({
        image: "parallax/demo/images/samples/2.jpg",
        height: "400px",
        scroll: "manual"
    });
    /*$(document).scroll(function () {

        var scrollPosition = $(this).scrollTop();

        $("#competences, #mesProjets, #mesExperiences").parallax <a href= "https://www.jqueryscript.net/tags.php?/Scroll/"> Scroll</a> (scrollPosition);

    });*/
});