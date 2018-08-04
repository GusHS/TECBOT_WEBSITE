//Navbar Color Changing function
$(window).scroll(function(){
    if ($("#navbar").offset().top > 450) {
        $("#navbar").addClass("bg-inverse");     
    } else {
        $("#navbar").removeClass("bg-inverse");
    }
});
 /** Changing Story Text**/
var requestURL = "https://api.myjson.com/bins/rfkhs";
var request = new XMLHttpRequest();

request.open('GET', requestURL); // Opens new request, use HTTP 'GET' method to receive data, also the json path is required.
request.responseType = 'json';
request.send(); 

request.onload = function (){ 
    var jStories = request.response; 
    setInitialText(jStories);

    jQuery(document).ready(function(){
        jQuery('#btn-1').click(function(){
            setInitialText(jStories);
            jQuery('#btn-1').addClass('active');
            jQuery('#btn-2').removeClass('active');
            jQuery('#btn-3').removeClass('active');
        });
    
        jQuery('#btn-2').click(function(){
            var text = jStories['stories'][1];
            jQuery('#taStory').val(text);
            jQuery('#btn-2').addClass('active');
            jQuery('#btn-1').removeClass('active');
            jQuery('#btn-3').removeClass('active');
        });
    
        jQuery('#btn-3').click(function(){
            var text = jStories['stories'][2];
            jQuery('#taStory').val(text);
            jQuery('#btn-3').addClass('active');
            jQuery('#btn-1').removeClass('active');
            jQuery('#btn-2').removeClass('active');
        });
    });

    function setInitialText(jsonObj) {
        var text = jsonObj['stories'][0];
        jQuery('#taStory').val(text);
    }
}
