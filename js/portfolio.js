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
    $("#my-parallax").parallax({
  height : "500",
  scroll : "manual"
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