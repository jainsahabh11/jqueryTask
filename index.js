$(document).ready(function(){
 
    $(".btnsubmit").click(function(){
        var inp=$(".heading_name").val();
       $(".heading_name").each(function(i){
            $("#maincontent").append($("<div><h1>" + inp +"</h1></div>")); 
            // <button type='button' class='close'><span aria-hidden='true'>&times;</span>
            // console.log(i);
// i++;
        });
        
       
        var newOption = $('<option value="'+inp+'">'+inp+'</option>');
        $('.selectheading').append(newOption);

    });
    $(".btnsubmit2").click(function(){
        var inp2=$(".sub_name").val();
        $(".sub_name").each(function(){
            
            $("#maincontent>div:nth-child(1) ").append($("<div><h2>" + inp2 +"</h2></div>")); 
            // $("#holder>div:nth-child(2)").append("<div>inserted div</div>");           
        });
        var newOption2 = $('<option value="'+inp2+'">'+inp2+'</option>');
        $('.selectsub').append(newOption2);
    });
    $("btnsubmit3").click(function(){
       var lab=$(".lab").val();
       var name=$(".name").val();
       var ph=$(".ph").val();
       var cls=$(".cls").val();
       var val=$(".val").val();
       var opt=$(".opt").val();
       console.log(lab);

      
    });
  
    
});