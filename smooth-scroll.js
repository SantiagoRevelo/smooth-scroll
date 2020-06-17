(function($){
    $(document).ready(function($){
        // VCBakery query selector
        //$('a[href*=#]:not([href=#]):not([data-vc-tabs]):not([data-vc-accordion])').click(function(e){
        $('a[href*="#"]:not([href="#"])').click(function(e){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: Math.ceil(target.offset().top) 
                    }, 1000);
                return false;
                }
            }
        });
    });
}(jQuery));