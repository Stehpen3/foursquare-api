// JavaScript File
$(document).ready(function(){
    $("#go").click(function(){
     $("#search").val();
     var id= $("#search").val();
        // $("go").hide();
        // alert(id)// use this to test/debug
        var url= ""
        var inputField= "#search"
        var result= url + id
        // alert(result)
        $.getJSON(result,function(response){
            // alert(response)
            console.log(response);
            $("#name").append(response.current.temp_f);
            $("#location").append(response.current.humdity);
        })
    });
});