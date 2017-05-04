var pile =[];
var containspt = false;
$("button").click(function() {
	update($(this));
});

function update(arg){
	if(arg.value = '.')
	{
		containspt= true;
	}
	if(pile.length < 8)
	{
		pile.push(arg.attr('value'));
		$("#disp").text(pile.join(""));
	}

}