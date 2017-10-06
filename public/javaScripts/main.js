$(function () {

var $todos = $('.todo');
var $todoPriorities = $('p.priority-text');
var $toDoComplete = $('.complete-text');


function shuffle() {

	var $newTodoContainer = $('<div class=todos-container');

	var orderedPriorities = [];
	for (var i = 0; i < $todoPriorities.length; i++) {
		var element = $todoPriorities.eq(i).html().parseint();
		orderedPriorities.push(element);
	}
	orderedPriorities.sort();
	
}

function getValues() {
	// for(var i = 0; i < $todoPriorities; i++) {
	// 	console.log(i);
	// 	console.log($todoPriorities.eq(i).html());
	// }
}


getValues();

});


