$(document).ready(function () {

    // var index = 0;
    $(".btnsubmit").click(function () {
        var inp = $(".heading_name").val();

        $("main").append($('<div><h1> ' + inp + '</h1></div>'));

        $(".selectheading option").remove();
        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1").each(function (index, val) {
            index = index + 1;
            var aaa = $(this).text();
            // console.log(index, val);
            $('.selectheading').append('<option value="' + index + '">' + aaa + '</option>');


        });


    });


    $(".btnsubmit2").click(function () {
        var inp2 = $(".sub_name").val();
        var selval = $(".selectheading").val();
        console.log(selval, inp2);
        $("main div:nth-child(" + selval + ")").append('<h2>' + inp2 + '</h2>');

        // $(".selectsub option").remove();
        // $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        // $("main div h1 div h2").each(function (index, val) {
        //     index = index + 1;
        //     var aaa = $(this).text();
        //     console.log(index, val);
        //     $('.selectsub').append('<option value="' + index + '">' + aaa + '</option>');
        // });


    });
    $(".selectheading").change(function () {
        var selval = $('.selectheading option').val();
        var inp2 = $(".sub_name").val();

        $('.selectsub  option').remove();
        $("main div h1:nth-child(" + selval + ")").each(function (index) {

            index = index + 1;
            $('.selectsub').append('<option value="' + selval + '">' + inp2 + '</option>');

        })
    })


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