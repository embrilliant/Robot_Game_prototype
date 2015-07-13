$(function() {

	function ran(max, min) {
		var ran = (Math.random() * (max - min) + min);
		return ran;
	}
	
	function down() {
		var ranLeft = ran(900, 50),
			boardLeft = ranLeft - 75;
		$("#div2").animate({top: "+=500px", left: ranLeft }, 1000, up);
		$("#div1").animate({left: boardLeft}, 1000);
	}

	function up() {
		$("#div2").animate({top: "-=500px", left: ran(900, 50) }, 1000, down);
	}

	down();			

});


