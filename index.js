var headarr = [];                           //global variable
$(document).ready(function () {

    loadDataFromStorage();                 //load the data from local storage when doucment is ready

    //heading button start.......................//

    $(".btnsubmit").click(function (e) {
        e.preventDefault();
        var inp = $(".heading_name").val();     //get the input values for headings

        $("main").append($('<div><h1> ' + inp + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></h1></div>'));        //append the input value in main div h1

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

        $("main div:nth-child(" + selval + ")").append('<section><h2>' + inp2 + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></h2></section>');  //main div nthchild(heading selected are append after selected heading)

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
        var option = $('.opt').val();
        var headval = $(".selectheadingform").val();
        var subval = $(".selectsubform").val();
        var isDisabled = $(".dis").is(":checked");
        var isReadOnly = $(".read").is(":checked");
        var isRequired = $(".req").is(":checked");

        var disabled = isDisabled ? ' disabled ' : '';
        var readonly = isReadOnly ? ' readonly ' : '';
        var required = isRequired ? ' required ' : '';

        var aa = '<p></p>';


        var fos = $(aa).appendTo("main div:nth-child(" + headval + ") section:nth-of-type(" + subval + ")");


        var fs = $('.formstatic').val();
        var arr = $(".opt").val().split(",");

        if (fs == 'radio') {
            $.each(arr, function (i) {
                $(fos).append('<input type="' + fs + '" name="' + name + '" value="' + arr[i] + '" class="' + cls + '" ' + disabled + '' + readonly + ' ' + required + '> <label>' + arr[i] + ' </label>');
                if (arr[i] == value) {
                    $('input[value=' + arr[i] + ']').prop('checked', true);
                }
            })

        }

        else if (fs == 'textarea') {
            $.each(arr, function (j) {
                $(fos).append('<input type="' + fs + '" name="' + name + '" value="' + arr[j] + '" class="' + cls + '" ' + disabled + ' ' + readonly + ' ' + required + '> <label>' +
                    label + ' </label>');
            });

        } else if (fs == 'select') {
            var selc = $('<select name="' + name + '" class="' + cls + '"><label>' + label + '</label></select>').appendTo(fos);
            // $(selc).append('<button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>')
            $.each(arr, function (k) {
                $('<option value="' + value + '">' + arr[k] + '</option>').appendTo(selc);
            });

        }
        else if (fs == 'checkbox') {
            $.each(arr, function (l) {
                $(fos).append('<input type="' + fs + '" name="' + name + '" value="' + arr[l] + '" class="' + cls + '"' + disabled + ' ' + readonly + ' ' + required + '> <label>' + arr[l] + ' </label>');
                if (arr[l] == value) {
                    $('input[value=' + arr[l] + ']').prop('checked', true);
                }
            });
        }

        else {
            $(fos).append('<label >' + label + '</label>  <input type="' + fs + '" name="' + name + '" placeholder="' + placeholder + '" value="' + value + '"class="' + cls + '"' + disabled + readonly + required + '><button type = "button" class= "btn-close" onclick = "deleteForFrom(this)" aria - label="Close" ></button><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>');
        }

        headval = headval - 1;
        subval = subval - 1;

        headarr[headval].sub_arr[subval].formarr.push({ 'label': label, 'name': name, 'placeholder': placeholder, 'classs': cls, 'value': value, 'option': arr, 'type': fs, 'disabled': disabled, 'readonly': readonly, 'required': required });

        // set to local storage

        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);

        $('.myform3')[0].reset();
    });

    //three checkbox functionality...................//

    // $('.dis').change(function () {
    //     if (this.checked) {
    //         $('.ins').prop("disabled", true);
    //     } else {
    //         $('.ins').prop("disabled", false);
    //     }
    // });
    // $('.read').change(function () {
    //     if (this.checked) {
    //         $(".ins").prop('readonly', true);
    //     }
    //     else {
    //         $('.ins').prop('readonly', false);
    //     }
    // });
    // $('.req').change(function () {
    //     if (this.checked) {
    //         $(".ins").prop('required', true);
    //     }
    //     else {
    //         $('.ins').prop('required', false);
    //     }
    // });

});

// load data from local storage after refresh the page..............//

function loadDataFromStorage() {

    headarr = JSON.parse(window.localStorage.getItem("headings")) || [];

    $(headarr).each(function (index, headObj) {
        $('main').append('<div><h1> ' + headObj.heading + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></h1></div>');
        index = index + 1;

        $(".selectheading").append(' <option value="none" selected disabled hidden>--select--</option>');
        $('.selectheading').append('<option value="' + index + '">' + headObj.heading + '</option>');
        $(".selectheadingform").append(' <option value="none" selected disabled hidden>--select--</option>');
        $('.selectheadingform').append('<option value="' + index + '">' + headObj.heading + '</option>');

        var subArr = headObj.sub_arr;
        $(subArr).each(function (i, subObj) {
            $('main div:nth-child(' + index + ')').append('<section><h2>' + subObj.subheading + '<button type="button" class="btn-close" onclick="deleteFromStorage(this)" aria-label="Close"></button><span class="ui-icon ui-icon-arrowthick-2-n-s"></span></h2></section>');
            i = i + 1;

            $(".selectsubform").append(' <option value="none" selected disabled hidden>--select--</option>');
            $('.selectsubform').append('<option value="' + i + '">' + subObj.subheading + '</option>');

            var formArr = subObj.formarr;
            $(formArr).each(function (j, formObj) {
                var aa = '<p></p>';
                var fos = $(aa).appendTo("main div:nth-child(" + index + ") section:nth-of-type(" + i + ")");

                if (formObj.type == 'radio') {
                    $.each(formObj.option, function (p) {
                        $(fos).append('<input type="' + formObj.type + '" name="' + formObj.name + '" value="' + formObj.option[p] + '" class="' + formObj.classs + '" ' + formObj.disabled + formObj.readonly + formObj.required + '> <label>' + formObj.option[p] + ' </label>');
                        if (formObj.option[p] == formObj.value) {
                            $('input[value=' + formObj.option[p] + ']').prop('checked', true);
                        }
                    });
                }

                else if (formObj.type == 'textarea') {
                    $.each(formObj.option, function (q) {
                        $(fos).append('<input type="' + formObj.type + '" name="' + formObj.name + '" value="' + formObj.option[q] + '" class="' + formObj.classs + '" ' + formObj.disabled + formObj.readonly + formObj.required + '> <label>' +
                            formObj.label + ' </label>');
                    });

                } else if (formObj.type == 'select') {
                    var selc = $('<select name="' + formObj.name + '" class="' + formObj.classs + '"><label>' + formObj.label + '</label></select>').appendTo(fos);
                    $.each(formObj.option, function (r) {
                        $('<option value="' + formObj.option[r] + '">' + formObj.option[r] + '</option>').appendTo(selc);
                    });

                }
                else if (formObj.type == 'checkbox') {
                    $.each(formObj.option, function (s) {
                        $(fos).append('<input type="' + formObj.type + '"name="' + formObj.name + '" value="' + formObj.option[s] + '"class="' + formObj.classs + '" ' + formObj.disabled + formObj.readonly + formObj.required + '> <label>' + formObj.option[s] + ' </label>');
                        if (formObj.option[s] == formObj.value) {
                            $('input[value=' + formObj.option[s] + ']').prop('checked', true);
                        }
                    });
                }

                else {
                    $(fos).append('<label >' + formObj.label + '</label>  <input type="' + formObj.type + '" name="' + formObj.name + '" placeholder="' + formObj.placeholder + '" value="' + formObj.value + '"class="' + formObj.classs + '" ' + formObj.disabled + formObj.readonly + formObj.required + '><button type="button" class="btn-close" onclick="deleteForFrom(this)" aria-label="Close"></button>');
                }
            });
        });


    });


};

//delete data from local storage..........................//

function deleteFromStorage(el) {


    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
    prepareLocalStorageData();
}


function prepareLocalStorageData() {
    console.log('inside local function');
    window.localStorage.clear();
    // debugger;
    headarr = [];
    $("main div h1").each(function (index) {
        var head1 = $(this).text();
        var headObj = { 'heading': head1, 'sub_arr': [] };
        headarr.push(headObj);

        index = index + 1;

        $("main div:nth-child(" + index + ") section h2").each(function (i) {
            var inp2 = $(this).text();
            var subArr = { "subheading": inp2, 'formarr': [] };
            headObj.sub_arr.push(subArr);
            console.log('hvhgh', headObj.sub_arr);
            i = i + 1;
            // console.log('getting form inputs');
            $("main div:nth-child(" + index + ") section p").each(function (j, obj) {
                if ($(obj).children().size() > 0) {
                    var formObj = {};
                    formObj.option = [];

                    $(obj).children().each(function (j, child) {
                        var c = $(child);

                        if (c.is('label')) {
                            formObj.label = c.text();
                        }

                        if (c.is('input')) {
                            formObj.type = c.prop('type');
                            formObj.name = c.prop('name');
                            formObj.placeholder = c.prop('placeholder');
                            formObj.value = c.prop('value');
                            formObj.classs = c.prop('class');
                            formObj.readonly = c.prop('readonly');
                            formObj.required = c.prop('required');
                            formObj.disabled = c.prop('disabled');

                            if (formObj.type == 'radio') {
                                formObj.option.push(formObj.value);
                            }
                            else if (formObj.type == 'textarea') {
                                formObj.option.push(formObj.value);
                            }
                            else if (formObj.type == 'checkbox') {
                                formObj.option.push(formObj.value);
                            }

                        }
                        console.log('we are in form object', formObj)
                        if (c.is('select')) {
                            if (formObj.type == 'select') {
                                formObj.name = c.prop('name');
                                formObj.classs = c.prop('class');
                                ($(this).children('option')).each(function (q, option) {
                                    var o = $(option);
                                    formObj.option.push(o.prop('value'));
                                })

                            }
                            // formObj.option.push(formObj.value);
                        }

                    });
                    subArr.formarr.push(formObj);
                }
            });
        });
        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);
    });
}
function deleteForFrom(elm) {
    // window.localStorage.clear();
    elm.parentNode.parentNode.removeChild(elm.parentNode);

    prepareLocalStorageData();

}


// $(function () {
//     $("main section").sortable({
//         connectWith: "main section",
//         dropOnEmpty: false,
//         revert: true,
//         change: function () {
//             prepareLocalStorageData()
//         }
//     });

// });
$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();

});

// function prepareafter() {

// }


