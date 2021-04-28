$(document).ready(function () {

    $(".btnsubmit").click(function (e) {

        e.preventDefault();
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

        $('.myform')[0].reset();
    });



    $(".btnsubmit2").click(function (e) {
        e.preventDefault();
        var inp2 = $(".sub_name").val();
        var selval = $(".selectheading").val();
        // console.log(selval, inp2);
        $("main div:nth-child(" + selval + ")").append('<section><h2>' + inp2 + '</h2></section>');

        $('.myform2')[0].reset();
    });
    $(".selectheadingform").change(function () {
        var selval1 = $(this).val();

        $('.selectsubform option').remove();
        $(".selectsubform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $("main div:nth-child(" + selval1 + ") section h2").each(function (index) {
            index = index + 1;
            var inp3 = $(this).text();

            $('.selectsubform').append('<option value="' + index + '">' + inp3 + '</option>');

        });

    });


    $(".btnsubmit3").click(function (e) {
        e.preventDefault();
        var label = $(".lab").val();
        var name = $(".name").val();
        var placeholder = $(".ph").val();
        var cls = $(".cls").val();
        var value = $(".val").val();
        var option = $(".opt").val();
        // console.log(label, name, placeholder, cls, value, option);

        var headval = $(".selectheadingform").val();
        var subval = $(".selectsubform").val();

        var fos = $("main div:nth-child(" + headval + ") section:nth-of-type(" + subval + ")");

        var fs = $('.formstatic').val();
        var arr = $(".opt").val().split(",");


        if (fs == 'radio') {
            $.each(arr, function (i) {

                $(fos).append('<p><input type="' + fs + '"  name="' + name + '" value="' + value + '""class="' + cls + '"> <label>' + arr[i] + ' </label></p>'
                );
            });


        }

        else if (fs == 'textarea') {
            $.each(arr, function (j) {

                $(fos).append('<p><input type="' + fs + '"  name="' + name + '" value="' + value + '"class="' + cls + '"> <label>' + arr[j] + ' </label></p>'
                );
            });



        } else if (fs == 'select') {
            var selc = '<p><select class="' + cls + '"></select></p>'
            console.log(selc, '1111111111')
            $.each(arr, function (k) {
                $('<option value="' + value + '">' + arr[k] + '</option>').appendTo(selc);
            });
            $(fos).append(selc);

        }
        else if (fs == 'checkbox') {
            $.each(arr, function (l) {

                $(fos).append('<p><input type="' + fs + '"  name="' + name + '" value="' + value + '"class="' + cls + '"> <label>' + arr[l] + ' </label></p>'
                );
            });

        }
        else {
            $(fos).append('<p><label >' + label + '</label><input type="' + fs + '" name="' + name + '" placeholder="' + placeholder + '" value="' + value + '"class="' + cls + '"></p>');

        }


        $('.myform3')[0].reset();
    });


});