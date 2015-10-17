$(function() {

	function ran(max, min) {
		var ran = (Math.random() * (max - min) + min);
		return ran;
	}
	
	function down() {
		var ranLeft = ran(900, 50),
			boardLeft = ranLeft - 75;
		$("#div2").animate({top: "+=420px", left: ranLeft }, 800, up);
		$("#div1").animate({left: boardLeft}, 800);
	}

	function up() {
		var ranLeft = ran(900, 50),
			boardLeft = ranLeft - 75;
		$("#div2").animate({top: "-=420px", left: ranLeft }, 800, down);
		$("#div3").animate({left: boardLeft}, 800);
	}

	down();		

});