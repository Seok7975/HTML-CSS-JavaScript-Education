$(function(){
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

	lightning_one();
	lightning_two();
	lightning_three();

	$("#head").on("click", function(){		
		if (headclix < 9){
			$("#head").animate({left:"-=367px"},500);
			headclix+=1;
		}
		else{
			$("#head").animate({left:"0px"},500);
			headclix = 0;
		}
	});

	$("#eyes").on("click", function(){
		if (eyeclix < 9){
			$("#eyes").animate({left:"-=367px"},500);
			eyeclix+=1;
		}
		else{
			$("#eyes").animate({left:"0px"},500);
			eyeclix = 0;
		}
	});

	$("#nose").on("click", function(){
		if (noseclix < 9){
			$("#nose").animate({left:"-=367px"},500);
			noseclix+=1;
		}
		else{
			$("#nose").animate({left:"0px"},500);
			noseclix = 0;
		}
	});//end click

	$("#mouth").on("click", function(){
		if (mouthclix < 9){
			$("#mouth").animate({left:"-=367px"},500);
			mouthclix+=1;
		}
		else{
			$("#mouth").animate({left:"0px"},500);
			mouthclix = 0;
		}
	});
});

function lightning_one(){
	$("#lightning1").fadeIn(250).fadeOut(250);
	setTimeout(function() {lightning_one()}, 4000);
};

function lightning_two(){
	$("#lightning2").fadeIn("fast").fadeOut("fast");
	setTimeout(function() {lightning_two()}, 5000);
};

function lightning_three(){
	$("#lightning3").fadeIn("fast").fadeOut("fast");
	setTimeout(function() {lightning_three()}, 7000);
};