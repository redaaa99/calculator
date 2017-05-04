var pile =[];
var dec = false;
var stack = [];

$("button").click(function() {

	update($(this));
});




function erase()
{
	pile = [];
	$("#disp").text(0);
}
function disp(arr)
{
	$("#disp").text(pile.join(""));
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
	    if(pile.length<8)
	    {

	    	pile.push(Number(arg.attr('value')));
	    	disp(pile);
	    }
	    break;
	    case '0':
	    {
	    	if((pile.length<8) && (typeof(pile[0]) !== 'undefined'))
		    {
		    	pile.push(0);
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
	    		
	    		stack.push(Number(pile.join("")));
	    		stack.push('+');
	    		erase();
	    	}

	    }
	    break;
	    case '-':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{
	    		if(Number(pile.join("")) == 0)
	    		{
	    			stack.push(0);
	    			stack.push('-');
	    		}
	    		else
	    		{
	    			stack.push(Number(pile.join("")));
	    			stack.push('-');
	    		}	
	    		erase();
	    	}
	    }
	    break;
	    case '*':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{
	    		
	    		stack.push(Number(pile.join("")));
	    		stack.push('*');
	    		erase();	
	    	}
	    }
	    break;
	    case '/':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{
	    		
	    		stack.push(Number(pile.join("")));
	    		stack.push('/');
	    		erase();	
	    	}
	    }
	    break;
	    case '=':
	    {
    		if(Number(pile.join("")) == 0)
    		{
    			stack.push(0);
    		}
    		else
    		{
    			stack.push(Number(pile.join("")));
    		}
    		erase();
    		if(eval(stack.join('')) =='Infinity')
    		{
    			pile.push('Error');
    		}
    		else
    		{
    			pile.push(eval(stack.join('')));
    		}
    		disp(pile);
    		stack = [];
	    }

	    break;
    }
    
}