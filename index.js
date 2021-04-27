$(document).ready(function () {

    // var index = 0;
    $(".btnsubmit").click(function () {
        var inp = $(".heading_name").val();

        $("main").append($('<div><h1> ' + inp + '</h1></div>'));

        $(".selectheading option").remove();
        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1").each(function (index) {
            index = index + 1;
            var aaa = $(this).text();
            // console.log(index, val);
            $('.selectheading').append('<option value="' + index + '">' + aaa + '</option>');


        });
        $(".selectheadingform option").remove();
        $(".selectheadingform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1").each(function (index) {
            index = index + 1;
            var aaa = $(this).text();
            // console.log(index, val);
            $('.selectheadingform').append('<option value="' + index + '">' + aaa + '</option>');


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
        $("main div:nth-child(" + selval + ") section h2").each(function (index) {
            var inp3 = $(this).text();
            console.log(inp3, '22222222');

            // index = index + 1;
            $('.selectsubform').append('<option value="' + index + '">' + inp3 + '</option>');

        });

    });


    $(".btnsubmit3").click(function () {

        var lab = $(".lab").val();
        var name = $(".name").val();
        var ph = $(".ph").val();
        var cls = $(".cls").val();
        var val = $(".val").val();
        var opt = $(".opt").val();
        console.log(lab);


    });


});