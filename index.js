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
            console.log(index, val);
            $('.selectheading').append('<option value="' + index + '">' + aaa + '</option>');


        });


    });

    $(".btnsubmit2").click(function () {
        var inp2 = $(".sub_name").val();
        var selval = $(".selectheading").val();
        $("main div:nth-child(" + selval + ") h1").append($('<div><h2>' + inp2 + '</h2></div>'));
        $(".selectsub option").remove();
        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div h1 div h2").each(function (index, val) {
            index = index + 1;
            var aaa = $(this).text();
            console.log(index, val);
            $('.selectsub').append('<option value="' + index + '">' + aaa + '</option>');
        });




        // var sel = $(".selectheading")[1].selectedIndex;
        // var headingVal = $(".selectheading")[1].value;
        // console.log("hello", headingVal, sel);

        // $(".heading:nth-child(" + sel + ")").append($('<div class="subheading"><h2>' + inp2 + '</h2></div>'));

        // var newOption2 = $('<option value="' + headingVal + '">' + inp2 + '</option>');
        // $('.selectsub').append(newOption2);
    });

    $(".selectheadingform").change(function () {
        // if ($(this).data('options') === undefined) {
        //     /*Taking an array of all options-2 and kind of embedding it on the select1*/
        //     $(this).data('options', $('.selectsub option').clone());
        // }
        var id = $(this).val();
        $('.selectsub option[value!=' + id + ']').remove();
        $(this).data('options', $('.selectsub option')).each(function () {
            var options = $(this).data('options').filter('[value=' + id + ']');
            $('.selectsub').html(options);
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