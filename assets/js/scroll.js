var lastScrollTop = 0;
	$(window).on("scroll", function(){
		st = $(this).scrollTop()
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		console.log(st+' '+lastScrollTop+' '+width)
		//setTimeout(function() {}, 20);
	if(st==0) {
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").removeClass("scroll")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").removeClass("scroll2")
		$(".navbar-header").removeClass("overlay")
		$(".navbar-header").removeClass("overlay2")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll2")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll3")
		$("a#trynow").removeClass("scroll")
        $("a#trynow").removeClass("scroll2")
		$("a#trynow").removeClass("scroll3")
		$(".header-transparent").removeClass("scroll")
		$("#promo").removeClass("scroll")
		$("path").removeClass("scroll")
		$("#goggle").removeClass("scroll")
        $("#embeddedscene").removeClass("scroll")
		$(".hudgraphics").removeClass("scroll")}
	else {
		$(".header-transparent").addClass("scroll")
		$("#promo").addClass("scroll")
		$(".header-transparent").addClass("scroll")
		$("#goggle").addClass("scroll")
		$("path").addClass("scroll")
        $(".hudgraphics").addClass("scroll")}

		if (st>0 && st<(width/6)) {
		console.log("Hello Bitch")
		$("#embeddedscene").addClass("scroll")}
		else {
		$("#embeddedscene").removeClass("scroll")}

		if (st>(width-50)) {
		console.log("Lower Bitch")
		$(".navbar-header").removeClass("overlay")
		$(".navbar-header").addClass("overlay2")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").removeClass("scroll")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").addClass("scroll2")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll2")
		$(".navbar-default .navbar-nav > li > a").addClass("scroll3")
        $("a#trynow").removeClass("scroll2")
		$("a#trynow").addClass("scroll3")}
	if (st<(width-50) && st>((width/2) - 50)) {
		console.log("Upper Bitch")
		$(".navbar-header").removeClass("overlay2")
		$(".navbar-header").addClass("overlay")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").removeClass("scroll")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").addClass("scroll2")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll")
		$(".navbar-default .navbar-nav > li > a").removeClass("scroll3")
		$(".navbar-default .navbar-nav > li > a").addClass("scroll2")
        $("a#trynow").removeClass("scroll")
		$("a#trynow").removeClass("scroll3")
		$("a#trynow").addClass("scroll2")}
	else if (st<((width/2) - 50) && st>0) {
		console.log("Hello")
		//$("#embeddedscene").addClass("scroll")
		$(".navbar-header").removeClass("overlay2")
		$(".navbar-header").addClass("overlay")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").removeClass("scroll2")
		$("nav.navbar.navbar-default.navbar-fixed-top.navbar-transparent").addClass("scroll")
        $(".navbar-default .navbar-nav > li > a").removeClass("scroll2")
		$(".navbar-default .navbar-nav > li > a").addClass("scroll")
		$("a#trynow").removeClass("scroll2")
		$("a#trynow").addClass("scroll")}	
lastScrollTop = st;})