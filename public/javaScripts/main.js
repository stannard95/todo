// $(function () {

// 	var $todos = $('.todo');
// var $todoPriorities = $('.priority');
// var $toDoComplete = $('.complete');


function shuffle() {

	var newTodoContainer = ('<div class=todos-container');

	var orderedPriorities = [];
	for (var i = 0; i < $todoPriorities.length; i++) {
		var element = $todoPriorities.eq(i).html().parseint();
		orderedPriorities.push(element);
	}
	orderedPriorities.sort();
	
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