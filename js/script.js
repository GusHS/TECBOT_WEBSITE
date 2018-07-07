$(window).scroll(function(){
    if ($("#navbar").offset().top > 450) {
        $("#navbar").addClass("bg-inverse");     
    } else {
        $("#navbar").removeClass("bg-inverse");
    }
});
