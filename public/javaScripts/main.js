// $(function () {

// 	var $todos = $('.todo');
// var $todoPriorities = $('.priority');
// var $toDoComplete = $('.complete');


function shuffle() {

	var newTodoContainer = ('<div class=todos-container');

	var highestElement = '0';
	for (var i = 0; i < $todoPriorities.length; i++) {
		var element = $todoPriorities.eq(i);

		if (highestElement === "0") {
		var highestElement = comparePriority(highestElement.parseInt(), 
			element.html().parseInt());

		} else {
			var highestElement = comparePriority(highestElement.html().parseInt(), 
			element.html().parseInt());
		}

		

		newTodoContainer.append(newTodo);
	}
	
}

function getValues() {
	console.log($toDoComplete.html());
}


function comparePriority(x, y) {
	priorities = ['low', 'medium', 'high'];

	if (y === 1) {
		return y;
	}

	else if (y)

}

// });

console.log('hello');