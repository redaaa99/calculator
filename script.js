var pile =[];
var dispmode = false;
var stack = [];

$("button").click(function() {
	console.log(stack);
	update($(this));

});




function erase()
{
	pile = [];
	$("#disp").text('0');
}
function disp(arr)
{
	$("#disp").text(arr.join(""));

}
function update(arg){
	switch(arg.attr('value')) {
	    case '1':
	    case '2':
	    case '3': 
	    case '4':
	    case '5':
	    case '6':
	    case '7':
	    case '8':
	    case '9':
	    if((pile.length<8))
	    {
	    	if(dispmode)
	    	{
	    		dispmode = false;
	    		erase();
	    	}

	    	pile.push(Number(arg.attr('value')));
	    	disp(pile);
	    }
	    break;
	    case '0':
	    {
	    	if(dispmode)
	    	{
	    		dispmode = false;
	    		erase();
	    	}
	    	if((pile.length<8) && (typeof(pile[0]) !== 'undefined'))
		    {
		    	pile.push('0');
		    	disp(pile);
		    }
	    }
	    break;
	    case 'ac':
	    {
	    	stack=[];
	    	erase();
	    	break;
	    }
	    case 'ce':
	    {
	    	
	    	z = stack.pop();
	    	erase();
	    	$("#disp").text(stack[0]);
	    	stack.push(z.toString());
	    	
	    	break;
	    }
	    case '.':
	    {
	    	if((pile.length<7) && (pile.indexOf('.')==-1))
	    	{
	    		if((typeof(pile[0]) == 'undefined'))
	    		{
	    			pile.push('0');
	    			pile.push(arg.attr('value'));
	    		}
	    		else
	    		{
	    			pile.push(arg.attr('value'));
	    			
	    		}
	    		disp(pile);
	    	}
	    	break;
	    }
	    case '+':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{


	    		x = $("#disp").text();
	    		stack.push(x);
	    		
	    		if(stack.length===3)
	    		{
	    			
	    			x=eval(stack.join(''));
	    			stack=[]
	    			stack.push(x);
	    		}
	    		erase();
	    		disp(stack);
	    		stack.push("+");

	    		dispmode = true;

	    	}

	    }
	    break;
	    case '-':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{


	    		x = $("#disp").text();
	    		stack.push(x);
	    		
	    		if(stack.length===3)
	    		{
	    			
	    			x=eval(stack.join(''));
	    			stack=[]
	    			stack.push(x);
	    		}
	    		erase();
	    		disp(stack);
	    		stack.push("-");

	    		dispmode = true;

	    	}

	    }
	    break;
	    case '*':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{


	    		x = $("#disp").text();
	    		stack.push(x);
	    		
	    		if(stack.length===3)
	    		{
	    			
	    			x=eval(stack.join(''));
	    			stack=[]
	    			stack.push(x);
	    		}
	    		erase();
	    		disp(stack);
	    		stack.push("*");

	    		dispmode = true;

	    	}
	    }
	    break;
	    case '/':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{


	    		x = $("#disp").text();
	    		stack.push(x);
	    		if(stack.length===3)
	    		{
	    			
	    			x=eval(stack.join(''));
	    			stack=[]
	    			stack.push(x);
	    		}
	    		erase();
	    		disp(stack);
	    		stack.push("/");
	    		dispmode = true;

	    	}

	    }
	    break;
	    case '=':
	    {
    		y = $("#disp").text();
    		stack.push(y);
    		erase();
    		pile.push(eval(stack.join("")));
    		stack=[];
    		if(pile[0]=='Infinity')
    		{
    			$("#disp").text("Error");
    		}
    		else if(pile[0].toString().length>8)
    		{
				$("#disp").text("Max Digit");
    		}
    		else
    		{
    			disp(pile);
    		}
    		
    		dispmode = true;

	    }

	    break;
    }
    
}
