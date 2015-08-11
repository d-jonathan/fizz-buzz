$(document).ready(function(){ 

	

	$('ul').click(function(){
		var userInput=$('input').val()
		var userNumber=parseInt(userInput)
		var count = 1
		while (count<(userNumber+1)) {
			if (count%3===0 && count%5===0) {
				$('ul').append("<li>fizz buzz!</li>");
				count++;
			}
			else if (count%3===0) {
				$('ul').append("<li>fizz</li>");
				count++;
			} 
			else if (count%5===0) {
				$('ul').append("<li>buzz</li>");
				count++;
			}
			else {
				$('ul').append("<li>"+count+"</li>");
				count++;
			}
		}

		});

});

