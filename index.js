var headarr = [];
$(document).ready(function () {
    loadDataFromStorage();


    // var headings = {};              //create an json object for heading



    $(".btnsubmit").click(function (e) {

        e.preventDefault();
        var inp = $(".heading_name").val();     //get the input values

        $("main").append($('<div id="div1" ondrop="drop(event)" ondragover="allowdrop(event)"><h1> ' + inp + '<button type="button" class="btn-close"onclick="deleteFromStorage()  aria-label="Close"></button></h1></div>'));        //append the input value in main div h1

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
            // if (headings[index] == null) {
            //     headings[index] = {};       //in heading object give key and value is blank for sub headings values
            // }

        });


        headarr.push({ 'heading': inp, 'sub_arr': [] });




        $('.myform')[0].reset();            //reset  the  form
    });




    $(".btnsubmit2").click(function (e) {
        e.preventDefault();
        var inp2 = $(".sub_name").val();            //get the sub heading input values
        var selval = $(".selectheading").val();     //get the indeX value of heading

        $("main div:nth-child(" + selval + ")").append('<section draggable="true" ondragstart="drag(event)"><h2>' + inp2 + '<button type="button" class="btn-close" onclick="deleteFromStorage() aria-label="Close"></button></h2></section>');  //main div nthchild(heading selected are append after selected heading)


        selval = selval - 1;

        headarr[selval].sub_arr.push({ "subheading": inp2, 'formarr': [] });


        // console.log(headings);
        // var headingObjec = headings[selval];        //create a object for headingobject
        // headingObjec[inp2] = [];
        // console.log(headings[selval], headings);


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
        // var aa = '<p></p>';


        if (fs == 'radio') {
            // $(aa).appendTo(fos);
            $.each(arr, function (i) {
                $(fos).append('<input type="' + fs + '"name="' + name + '" value="' + value + '""class="' + cls + '"> <label>' + arr[i] + ' </label>');
                if (arr[i] == value) {
                    $("input[value=" + value + "]").prop('checked', true);
                }
            });

        }

        else if (fs == 'textarea') {
            // $(aa).appendTo(fos);
            $.each(arr, function (j) {
                $(fos).append('<input type="' + fs + '"name="' + name + '"value="' + value + '"class="' + cls + '"> <label>' +
                    arr[j] + ' </label>');
            });



        } else if (fs == 'select') {

            var selc = $('<select name="' + name + '" class="' + cls + '"></select>');

            $.each(arr, function (k) {
                $('<option value="' + value + '">' + arr[k] + '</option>').appendTo(selc);
            });
            $(fos).append(selc);

        }
        else if (fs == 'checkbox') {
            // $(aa).appendTo(fos);
            $.each(arr, function (l) {

                $(fos).append('<input type="' + fs + '"name="' + name + '" value="' + value + '"class="' + cls + '"> <label>' + arr[l] + ' </label>');
            });


        }
        else {
            $(fos).append('<label >' + label + '</label>  <input type="' + fs + '" name="' + name + '" placeholder="' + placeholder + '" value="' + value + '"class="' + cls + '">');

        }

        headval = headval - 1;
        subval = subval - 1;

        headarr[headval].sub_arr[subval].formarr.push({ 'label': label, 'name': name, 'placeholder': placeholder, 'classs': cls, 'value': value, 'option': arr, 'type': fs });


        var myJSON = JSON.stringify(headarr);
        window.localStorage.setItem("headings", myJSON);


        // function allowDrop(ev) {
        //     ev.preventDefault();
        // }
        // function drag(ev) {
        //     ev.dataTransfer.setData("text", ev.target.id);
        // }
        // function drop(ev) {
        //     ev.preventDefault();
        //     var data = ev.dataTransfer.getData("text");
        //     ev.target.appendChild(document.getElementById(data));
        // }



        // Retrieving data:
        // var text = localStorage.getItem("headings");
        // var obj = JSON.parse(text);
        // document.getElementById("demo").innerHTML = obj.name;

        // subheadings[inp2] = {};
        // var headingObjec = headings[selval];
        // var subHeadingObjec = headingObjec[inp2];//call the subheading array
        // subHeadingObjec.push({});       //push the value of subheading array



        $('.myform3')[0].reset();
    });

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

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.class);
    }


    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    // $(".main div h1:first, .main div h1 section h2").draggable();


});

function loadDataFromStorage() {

    headarr = JSON.parse(window.localStorage.getItem("headings"));

    $(headarr).each(function (index, headObj) {

        // console.log(headObj.heading);

        $('main').append('<div><h1> ' + headObj.heading + '<button type="button" class="btn-close" onclick="deleteFromStorage() aria-label="Close"></button></h1></div>');

        // console.log(index);
        var subArr = headObj.sub_arr;
        // console.log(subArr);
        index = index + 1;
        $(subArr).each(function (i, subObj) {
            // console.log(subObj.subheading);
            $('main div:nth-child(' + index + ')').append('<section><h2>' + subObj.subheading + '<button type="button" class="btn-close" onclick="deleteFromStorage() aria-label="Close"></button></h2></section>');
            var formArr = subObj.formarr;
            i = i + 1;
            $(formArr).each(function (j, formObj) {
                // console.log(formObj.label, formObj.name, formObj.placeholder, formObj.classs);
                $("main div:nth-child(" + index + ") section:nth-of-type(" + i + ")").append('<label >' + formObj.label + '</label>  <input type="' + formObj.type + '" name="' + formObj.name + '" placeholder="' + formObj.placeholder + '" value="' + formObj.value + '"class="' + formObj.classs + '"option="' + formObj.option + '">');
            });
        });


    });

};

function deleteFromStorage() {
    // var headarr = [];
    JSON.parse(window.localStorage.clear());

    $("main div h1").each(function (index) {
        // index = index + 1;
        var head1 = $(this).text();
        console.log(head1);
        $(this).parent('div').remove();

        headarr.push({ 'heading': head1, 'sub_arr': [] })
        $("main div:nth-child(" + index + ") section h2").each(function (i) {
            // index = index + 1;
            var inp2 = $(this).text();



            headarr[index].sub_arr.push({ "subheading": inp2, 'formarr': [] });
        });

    });  //reset  the  form
}


