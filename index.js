$(document).ready(function () {

    $(".btnsubmit").click(function () {
        var inp = $(".heading_name").val();

        $("main").append($('<div><h1> ' + inp + '</h1></div>'));

        $(".selectheading option").remove();
        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1").each(function (index) {
            index = index + 1;
            var head1 = $(this).text();

            $('.selectheading').append('<option value="' + index + '">' + head1 + '</option>');


        });
        $(".selectheadingform option").remove();
        $(".selectheadingform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1").each(function (index) {
            index = index + 1;
            var headform1 = $(this).text();

            $('.selectheadingform').append('<option value="' + index + '">' + headform1 + '</option>');


        });


    });


    $(".btnsubmit2").click(function () {
        var inp2 = $(".sub_name").val();
        var selval = $(".selectheading").val();
        // console.log(selval, inp2);
        $("main div:nth-child(" + selval + ")").append('<section><h2>' + inp2 + '</h2></section>');


    });
    $(".selectheadingform").change(function () {
        var selval = $(this).val();

        $('.selectsubform option').remove();
        $(".selectsubform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div:nth-child(" + selval + ") section").each(function (index) {
            index = index + 1;
            var inp3 = $(this).text();

            $('.selectsubform').append('<option value="' + index + '">' + inp3 + '</option>');

        });

    });


    $(".btnsubmit3").click(function () {
        var label = $(".lab").val();
        var name = $(".name").val();
        var placeholder = $(".ph").val();
        var cls = $(".cls").val();
        var value = $(".val").val();
        var option = $(".opt").val();
        // console.log(label, name, placeholder, cls, value, option);

        var headval = $(".selectheadingform").val();
        var subval = $(".selectsubform").val();
        console.log(headval, subval);
        // $("main div h1 section:nth-child(" + subval + ")").append(' <label for="emails">Enter email addresses:</label>');
        $("main div:nth-child(" + headval + ") section:nth-child(" + subval + ")").append('<label for="name">' + label + '</label>');





    });


});