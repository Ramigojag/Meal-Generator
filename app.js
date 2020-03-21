//stored meals
var mealList = [
	'beans on toast',
	'lasagne',
	'kidney bean curry',
	'red thai curry',
	'pea risotto',
	'mac and cheese',
	'egg fried rice',
	'pasta pesto',
	'spicy brocolli mushroom noodles',
	'stuffed peppers'
];
var e = document.getElementById('days');
var num = e.options[e.selectedIndex].value;
var str = '<ul>';
var someFunction = function() {
	boxValue = document.getElementById('new').value;
	mealList.push(boxValue);
	console.log(mealList);
	document.getElementById('new').val('');
};

//click generate to display number of meals selected in drop down box
document.getElementById('gen').addEventListener('click', function() {
	for (var i = 0; i < e.options[e.selectedIndex].value; i++) {
		let randomMeal = mealList[Math.floor(Math.random() * mealList.length)];
		console.log(randomMeal);
	}

	// for (var i = 0; i < e.options[e.selectedIndex].value; i++) {
	// 	mealList.forEach(function(slide) {
	// 		str += '<li>' + slide + '</li>';
	// 	});

	// 	str += '</ul>';
	// 	document.getElementById('mealPlan').innerHTML = str;
	// }
});
//table shows only the number of meals selected doesnt display empt LIs

//user inputs new meals, added to mealList array
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		mealList.push(todoText);
	}
});
