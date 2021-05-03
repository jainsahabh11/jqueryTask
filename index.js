var headarr = [];                           //global variable
$(document).ready(function () {

    loadDataFromStorage();                 //load the data from local storage when doucment is ready

    //heading button start.......................//

    $(".btnsubmit").click(function (e) {
        e.preventDefault();
        var inp = $(".heading_name").val();     //get the input values

        $("main").append($('<div><h1> ' + inp + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button></h1></div>'));        //append the input value in main div h1

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

        headarr.push({ 'heading': inp, 'sub_arr': [] });

        // set to local storage

        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);

        $('.myform')[0].reset();            //reset  the  form
    });

    //sub heading button click.........................//

    $(".btnsubmit2").click(function (e) {
        e.preventDefault();
        var inp2 = $(".sub_name").val();            //get the sub heading input values
        var selval = $(".selectheading").val();     //get the indeX value of heading

        $("main div:nth-child(" + selval + ")").append('<section><h2>' + inp2 + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button></h2></section>');  //main div nthchild(heading selected are append after selected heading)

        $(function () {

            $("main div section").sortable({
                connectWith: "main div, main div section",
                dropOnEmpty: true
            });


        })
        selval = selval - 1;

        headarr[selval].sub_arr.push({ "subheading": inp2, 'formarr': [] });

        // set to local storage

        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);

        $('.myform2')[0].reset();//reset the form
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

    //form button ,inputs....................//

    $(".btnsubmit3").click(function (e) {
        e.preventDefault();
        var label = $(".lab").val();
        var name = $(".name").val();
        var placeholder = $(".ph").val();
        var cls = $(".cls").val();
        var value = $(".val").val();
        var option = $(".opt").val();

        var headval = $(".selectheadingform").val();
        var subval = $(".selectsubform").val();

        var fos = $("main div:nth-child(" + headval + ") section:nth-of-type(" + subval + ")");

        var fs = $('.formstatic').val();
        var arr = $(".opt").val().split(",");
        var aa = '<p></p>';
        var ss = $(aa).appendTo(fos);

        if (fs == 'radio') {
            $.each(arr, function (i) {
                $(ss).append('<input type="' + fs + '"name="' + name + '" value="' + arr[i] + '""class="' + cls + '"> <label>' + arr[i] + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                if (arr[i] == value) {
                    $('input[value=' + arr[i] + ']').prop('checked', true);
                }
            });
        }

        else if (fs == 'textarea') {
            $.each(arr, function (j) {
                $(ss).append('<input type="' + fs + '"name="' + name + '"value="' + arr[j] + '"class="' + cls + '"> <label>' +
                    label + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
            });

        } else if (fs == 'select') {
            var selc = $('<select name="' + name + '" class="' + cls + '"><label>' + label + '</label></select>').appendTo(ss);
            $.each(arr, function (k) {
                $('<option value="' + value + '">' + arr[k] + '</option>').appendTo(selc);
            });

        }
        else if (fs == 'checkbox') {
            $.each(arr, function (l) {
                $(ss).append('<input type="' + fs + '"name="' + name + '" value="' + arr[l] + '"class="' + cls + '"> <label>' + arr[l] + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                if (arr[l] == value) {
                    $('input[value=' + arr[l] + ']').prop('checked', true);
                }
            });
        }

        else {
            $(fos).append('<p><label >' + label + '</label>  <input type="' + fs + '" name="' + name + '" placeholder="' + placeholder + '" value="' + value + '"class="' + cls + '"><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button></p>');
        }

        headval = headval - 1;
        subval = subval - 1;

        headarr[headval].sub_arr[subval].formarr.push({ 'label': label, 'name': name, 'placeholder': placeholder, 'classs': cls, 'value': value, 'option': arr, 'type': fs });

        // set to local storage

        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);

        $('.myform3')[0].reset();
    });

    //three checkbox functionality...................//

    $('.dis').change(function () {
        if (this.checked) {
            $('.ins').prop("disabled", true);
        } else {
            $('.ins').prop("disabled", false);
        }
    });
    $('.read').change(function () {
        if (this.checked) {
            $(".ins").prop('readonly', true);
        }
        else {
            $('.ins').prop('readonly', false);
        }
    });
    $('.req').change(function () {
        if (this.checked) {
            $(".ins").prop('required', true);
        }
        else {
            $('.ins').prop('required', false);
        }
    });
});

// load data from local storage after refresh the page..............//

function loadDataFromStorage() {

    headarr = JSON.parse(window.localStorage.getItem("headings")) || [];

    $(headarr).each(function (index, headObj) {
        $('main').append('<div><h1> ' + headObj.heading + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button></h1></div>');
        index = index + 1;

        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $('.selectheading').append('<option value="' + index + '">' + headObj.heading + '</option>');
        $(".selectheadingform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $('.selectheadingform').append('<option value="' + index + '">' + headObj.heading + '</option>');

        $(function () {

            $("main div section").sortable({
                connectWith: "main div, main div section",
                dropOnEmpty: true
            });


        })
        var subArr = headObj.sub_arr;
        $(subArr).each(function (i, subObj) {
            $('main div:nth-child(' + index + ')').append('<section><h2>' + subObj.subheading + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button></h2></section>');
            i = i + 1;

            $(".selectsubform").append(' <option value="none" selected disabled hidden>--select--</option>');
            $('.selectsubform').append('<option value="' + i + '">' + subObj.subheading + '</option>');



            var formArr = subObj.formarr;
            $(formArr).each(function (j, formObj) {
                var fos = $("main div:nth-child(" + index + ") section:nth-of-type(" + i + ")");
                var aa = '<p></p>';
                var ss = $(aa).appendTo(fos);

                if (formObj.type == 'radio') {
                    $.each(formObj.option, function (p) {
                        $(ss).append('<input type="' + formObj.type + '"name="' + formObj.name + '" value="' + formObj.option[p] + '""class="' + formObj.classs + '"> <label>' + formObj.option[p] + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                        if (formObj.option[p] == formObj.value) {
                            $('input[value=' + formObj.option[p] + ']').prop('checked', true);
                        }
                    });
                }

                else if (formObj.type == 'textarea') {
                    $.each(formObj.option, function (q) {
                        $(ss).append('<input type="' + formObj.type + '"name="' + formObj.name + '"value="' + formObj.option[q] + '"class="' + formObj.classs + '"> <label>' +
                            formObj.label + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                    });

                } else if (formObj.type == 'select') {
                    var selc = $('<select name="' + formObj.name + '" class="' + formObj.classs + '"><label>' + formObj.label + '</label></select>').appendTo(ss);
                    $.each(formObj.option, function (r) {
                        $('<option value="' + formObj.value + '">' + formObj.option[r] + '</option>').appendTo(selc);
                    });

                }
                else if (formObj.type == 'checkbox') {
                    $.each(formObj.option, function (s) {
                        $(ss).append('<input type="' + formObj.type + '"name="' + formObj.name + '" value="' + formObj.option[s] + '"class="' + formObj.classs + '"> <label>' + formObj.option[s] + ' </label><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                        if (formObj.option[s] == value) {
                            $('input[value=' + formObj.option[s] + ']').prop('checked', true);
                        }
                    });
                }

                else {
                    $(fos).append('<p><label >' + formObj.label + '</label>  <input type="' + formObj.type + '" name="' + formObj.name + '" placeholder="' + formObj.placeholder + '" value="' + formObj.value + '"class="' + formObj.classs + '"><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button></p>');
                }
            });
        });


    });

};

//delete data from local storage..........................//

function deleteFromStorage(el) {
    headarr = [];
    window.localStorage.clear();
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);

    $("main div h1").each(function (index) {
        var head1 = $(this).text();
        headarr.push({ 'heading': head1, 'sub_arr': [] });

        $("main div:nth-child(" + index + ") section h2").each(function (i) {
            var inp2 = $(this).text();

            headarr[index].sub_arr.push({ "subheading": inp2, 'formarr': [] });

            $("main div:nth-child(" + index + ") section:nth-of-type(" + i + ")").each(function (j) {
                deleteForFrom(this);
                var inp3 = $(this).text();

                headarr[index].sub_arr[i].formarr.push({ 'label': label, 'name': name, 'placeholder': placeholder, 'classs': cls, 'value': value, 'option': arr, 'type': fs });
            });

        });

    });  //reset  the  form
}

function deleteForFrom(elm) {

    elm.parentNode.parentNode.removeChild(elm.parentNode);

}
// $(function () {

//     $("main div section").sortable({
//         connectWith: "main div, main div section",
//         dropOnEmpty: true
//     });


// })








