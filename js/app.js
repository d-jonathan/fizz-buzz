$(document).ready(function(){ 


	$('ul').click(function(){
		var count = 1
		while (count<101) {
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