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
        var selval = $(".selectheading").val();
        // alert(selval);
        $(".heading:nth-child(" + sel + ")").append($('<div class="subheading"><h2>' + inp2 + '</h2></div>'));

        var newOption2 = $('<option value="' + selval + '">' + inp2 + '</option>');
        $('.selectsub').append(newOption2);

        var $select1 = $('.selectheading').val(),
            $select2 = $('.selectsub').val(),
            $options = $select2.find('option');

        $select1.change(function () {
            // console.log('change');
            $select2.html($options.filter('[value="' + selval + '"]'));

        }).trigger('change');

        // $(".selectsub").children('option:gt(0)').hide();
        // $(".selectheading").change(function () {
        //     $(".selectsub").children('option').hide();
        //     $(".selectsub").children("option[value^=" + $(this).val() + "]").show()
        // })


    });

    // $(".selectheading").change(function () {
    //     var inp2 = $(".sub_name").val();
    //     var newOption2 = $('<option value="' + inp2 + '">' + inp2 + '</option>');
    //     $('.selectsub').append(newOption2);

    // })




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