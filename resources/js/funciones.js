//MOSTRAR EL BRAND AL HACER SCROLL

$(window).scroll(function () {
    var $this = $(this);
    if ($this.scrollTop() >= 150) {
        $(".navScrolled").addClass("scrolled");
    } else {
        $(".navScrolled").removeClass("scrolled");
    };
});