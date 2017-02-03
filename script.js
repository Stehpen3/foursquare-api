// JavaScript File
$(document).ready(function(){
    $("#go").click(function(){
     $("#search").val();
     var id= $("#search").val();
     console.log(id);
        // $("go").hide();
        // alert(id)// use this to test/debug
        var url= "https://api.foursquare.com/v2/venues/search?v=20161016&near=[insert  location]&query=[insert search]&intent=checkin&client_id=[GM5UWMDYP1XATBCZTLY24HM5QHGWW3AM1RBX3SDC4H31RQZA]&client_secret=[1VUXTQ5AN0SA3DJJLXUDJ1NHL3O2SMHHEZDQ0KWPDXZ2H3L5]"
        var inputField= "#search"
        var result= url + id
        // alert(result)
        var client_id= "GM5UWMDYP1XATBCZTLY24HM5QHGWW3AM1RBX3SDC4H31RQZA"
        var client_secret= "1VUXTQ5AN0SA3DJJLXUDJ1NHL3O2SMHHEZDQ0KWPDXZ2H3L5"
        $.getJSON(result,function(response){
            // alert(response)
            console.log(response);
            $("#name").append(response.current.temp_f);
            $("#location").append(response.current.humdity);
        })
    });
});