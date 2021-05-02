function initializeUI(){
    $(".accordion-open").click(function() {
        $(".accordion-body").show();
        $(".accordion-open").hide();
        $(".accordion-close").show();
    });
    $(".accordion-close").click(function() {
        $(".accordion-body").hide();
        $(".accordion-close").hide();
        $(".accordion-open").show();
    });
}