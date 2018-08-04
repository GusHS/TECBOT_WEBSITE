//Navbar Color Changing function
$(window).scroll(function(){
    if ($("#navbar").offset().top > 450) {
        $("#navbar").addClass("bg-inverse");     
    } else {
        $("#navbar").removeClass("bg-inverse");
    }
});
 /** Changing Story Text**/
 var requestURL = "../json/texts.json";


window.onload = setInitialText;

function setInitialText() {
    //jQuery('#taStory').val("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

}

/* JQuery implementation
jQuery(document).ready(function(){
    jQuery('#btn-1').click(function(){
        setInitialText();
    });

    jQuery('#btn-2').click(function(){
        jQuery('#taStory').val("Text 2");
    });

    jQuery('#btn-3').click(function(){
        jQuery('#taStory').val("Text 3");
    });
});
*/