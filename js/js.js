var block = $("#advanceBlock");

$("#events").click(function(){
	$("#subEvents").toggle(500);
});
$("#advance").click(function(){
	if (block.css("display") == "none"){
		$("#advanceBlock").slideDown(500);
		$('.leftBlock').css("height","1444px");
	}else {
		$("#advanceBlock").slideUp(500);
		$('.leftBlock').css("height","1155px");
	}
});
$(".getbtn").click(function(){
	$(".leftBlock").css("height","1030px");
	$("#rightBlock").hide();
	$("#reviewBlock").show();
});
$("#home").click(function(){
	$('.leftBlock').css("height","1155px");
	$("#rightBlock").show();
	$("#reviewBlock").hide();
});