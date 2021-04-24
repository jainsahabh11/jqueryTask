$(document).ready(function () {

    // var index = 0;
    $(".btnsubmit").click(function () {
        var inp = $(".heading_name").val();

        $("main").append($('<div class="heading"><h1> ' + inp + '</h1></div>'));


        $('.selectheading').append('<option value="' + inp + '">' + inp + '</option>');

    });

    $(".btnsubmit2").click(function () {
        var inp2 = $(".sub_name").val();

        var sel = $(".selectheading")[0].selectedIndex;


        $(".heading:nth-child(" + sel + ")").append($('<div class="subheading"><h2>' + inp2 + '</h2></div>'));

        var newOption2 = $('<option value="' + inp2 + '">' + inp2 + '</option>');
        $('.selectsub').append(newOption2);
    });

    $("btnsubmit3").click(function () {
        var lab = $(".lab").val();
        var name = $(".name").val();
        var ph = $(".ph").val();
        var cls = $(".cls").val();
        var val = $(".val").val();
        var opt = $(".opt").val();
        console.log(lab);


    });


});