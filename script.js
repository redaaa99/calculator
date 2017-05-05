var pile =[];

var stack = [];

$("button").click(function() {
	
	
	update($(this));

});




function erase()
{
	pile = [];
	$("#disp").text('');
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
	    	stack=[];
	    	erase();
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
	    		stack.push('0');
	    		x=eval(stack.join(""));
	    		stack=[];
	    		stack.push(x.toString());
	    		stack.push('+');
	    		erase();
	    	}

	    }
	    break;
	    case '-':
	    {

	    		if(pile.join("") == "0")
	    		{
	    			stack.push('0');
	    			stack.push('-');
	    		}
	    		else
	    		{
	    			stack.push(Number(pile.join("")));
	    			stack.push('-');
	    			stack.push('0');
	    			x=eval(stack.join(""));
	    			stack=[];
	    			stack.push(x.toString());
	    			stack.push('-');
	    			erase();
	    		}	
	    		erase();
	    	
	    }
	    break;
	    case '*':
	    {
	    	if((typeof(pile[0]) !== 'undefined') && (Number(pile.join("")) !== 0))
	    	{
	    		
	    		stack.push(Number(pile.join("")));
	    		stack.push('*');
	    		stack.push('1');
	    		x=eval(stack.join(""));
	    		stack=[];
	    		stack.push(x.toString());
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
	    		stack.push('1');
	    		x=eval(stack.join(""));
	    		stack=[];
	    		stack.push(x.toString());
	    		stack.push('/');
	    		erase();
	    	}
	    }
	    break;
	    case '=':
	    {
	    		stack.push(Number(pile.join("")));
	    		
	    		alert(stack);
	    		erase();
	    		if(eval(stack.join('')) =='Infinity')
	    		{
	    			pile.push('Error');
	    		}
	    		else
	    		{
	    			var x = eval(stack.join(''));
					str = x.toString();

	    			if(str.length<8)
	    			{
	    				pile.push(eval(stack.join('')));
	    			}
	    			else
	    			{
	    				pile=[];
	    				pile.push("Math Error");
	    			}
	    			
	    		}
	    		disp(pile);
    			stack = [];	
	    	
	    }

	    break;
    }
    
}