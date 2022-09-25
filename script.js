$(document).ready(function() {

    let isShowing = false;

    $('#menuIcon').click(function() {
        $('ul').toggleClass('show');
        if(isShowing){
            isShowing = false;
        }else{
            isShowing = true;
        }
    });

    document.addEventListener('scroll', (event) => {
        // handle the scroll event 
        if(isShowing){
            $('ul').toggleClass('show');
            isShowing = false;
        }
    });

});