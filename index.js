$(document).ready(function(){
 
    $(".btnsubmit").click(function(){
        var inp=$(".heading_name").val();
        $(".maincontent").append($("<h1></h1>")).text(inp);
        var newOption = $('<option value="'+inp+'">'+inp+'</option>');
        $('.selectheading').append(newOption);

    });
    $(".btnsubmit2").click(function(){
        var inp2=$(".sub_name").val();
        $(".maincontent").append($("<h3></h3>")).text(inp2);
        var newOption2 = $('<option value="'+inp2+'">'+inp2+'</option>');
        $('.selectsub').append(newOption2);
    });
    $("btnsubmit3").click(function(){
        var inp3=$(".inputarea").val();
        console.log(inp3);

      
    })
  
    
});