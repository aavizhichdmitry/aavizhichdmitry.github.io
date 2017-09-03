new Vidage('#bg-video');

 $("form").submit(function(e){
        e.preventDefault();
    });


$('.iphone7').click(function(){

    fade('.phone-section','.color-section',500);
    $('.box-model').text('iPhone 7 ');

    var select = $(".phone-select");

    $.each(select, function() {
         var path = $(this).attr('src').replace("images/back/", "images/capacity/");
        $(this).attr('data-color', path)  ;

    });
});


$('.iphone7plus').click(function(){

    fade('.phone-section','.color-section',500);
    $('.iphone7-choose-holder').addClass('display-none');
    $('.iphone7plus-choose-holder').removeClass('display-none');
    $('.box-model').text('iPhone 7 Plus ');
    var select = $(".phone-select");

    $.each(select, function() {
         var path = $(this).attr('src').replace("images/back/", "images/capacity/");
        $(this).attr('data-color', path)  ;

    });
});


$(".phone-select").click(function() {


    $('.copy-image').attr("src", $(this).data().color);

    var boxPath = $(this).attr('src').replace("images/capacity/", "images/box/");
    $('.box-image').attr("src", boxPath);

    var stripPath = $(this).attr('src').replace("images/back/", "");
    var colorName = stripPath.replace(".png", "");

    if (colorName.indexOf('-plus') !== -1) {
        var colorName = stripPath.replace("-plus.png", "");
        $('.box-color').text(upercase(colorName));

    }

    else{
        $('.box-color').text(upercase(colorName));
    }

    $('.box-image').attr("src", boxPath);
    fade('.color-section','.capacity-section',500);

});
$(".setData").click(function() {

    $('.copy-image').attr("src", $(this).parent().children('img').data('color'));
    var boxPath = $(this).parent().children('img').data('color').replace("images/capacity/", "images/back/");
    $('.box-image').attr("src", boxPath);

    var stripPath = $(this).parent().children('img').attr('src').replace("images/back/", "");
    var colorName = stripPath.replace(".png", "");

    if (colorName.indexOf('-plus') !== -1) {
        var colorName = stripPath.replace("-plus.png", "");
        $('.box-color').text(upercase(colorName));

    }

    else{
        $('.box-color').text(upercase(colorName));
    }

    $('.box-image').attr("src", boxPath);
      fade('.color-section','.capacity-section',500);

});


$(".capacity-select").click(function() {

   $('.box-capacity').text($(this).attr('value')+ " GB")
   $('#in-the-box').modal('show');
});




$('.shipping').click(function(){
    $('#in-the-box').modal('hide');
    fade('.capacity-section','.shipping-section ',500);
});

$(".send").click(function() {

    var empty = $("form input").filter(function() {
            return $.trim(this.value).length === 0;
        }).length > 0;

    if (empty) {
        $(".error").text('Please enter all required information!');
    }
    else{
        $(".error").text('');

    }
    return false;
});



//custom functions
function fade(firstElement,secondElement,speed){

    $(firstElement).addClass('animated fadeOut');
    setTimeout(function(){
        $(firstElement).addClass('display-none');
    }, speed);

    setTimeout(function(){
        $(secondElement).removeClass('display-none');
    }, speed);
        $(secondElement).addClass('animated fadeIn');

}
function upercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


document.getElementById('send').disabled = false;
$("#zip").focusout(function(){
    if ( $('#zip').val() != '' ) {
        document.getElementById('send').disabled = false;
    }
});
