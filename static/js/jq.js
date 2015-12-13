$(document).ready(function(){
	$(".slides").slides({
		//preload: true,
		//preloadImage: '../images/favicon.ico'
		generateNextPrev: true,
		generatePagination: false,
		effect: 'fade',
		crossfade: true,
		//randomize: true,
		play: 10000,
		hoverPause: true,
		pause: 1000
	});


    $(".home").click(function () {
    	if ($(".slides").css({display: "block"}) || $(".blog").css({display:'block'})) {// || $(".voting").css({display:'block'})) {
    		$(".slides").css({display: "none"});
    		$(".blog").css({display:'none'});
            //$(".voting").css({display:'none'});
    	}
    	$(".article").css({display:'block'});
    });
    $(".gallery").click(function () {
    	if ($(".article").css({display: "block"}) || $(".blog").css({display:'block'})) {//|| $(".voting").css({display:'block'})) {
    		$(".article").css({display: "none"});
    		$(".blog").css({display:'none'});
            //$(".voting").css({display:'none'});
    	}
    	$(".slides").css({display:'block'});
    });
    $(".blogNav").click(function () {
    	if ($(".article").css({display: "block"}) || $(".slides").css({display: "block"})){ // || $(".voting").css({display:'block'})) {
    		$(".article").css({display: "none"});
    		$(".slides").css({display: "none"});
            //$(".voting").css({display:'none'});
    	}
    	$(".blog").css({display:'block'});
    });

   //$(".votingNav").click(function () {
   //    if ($(".article").css({display: "block"}) || $(".slides").css({display: "block"}) || $(".blog").css({display:'block'})) {
   //        $(".article").css({display: "none"});
   //        $(".slides").css({display: "none"});
   //        $(".blog").css({display:'none'});
   //    }
   //    $(".voting").css({display:'block'});
   //});
    //$(".blog").jScrollPane();

   

    $(function() {
        $('.blog').perfectScrollbar();

    // with vanilla JS!
        //Ps.initialize(document.getElementById('.blog'), {
        //    wheelSpeed: 1;
        //});
    });

});