function createObj(number) {
	if (isNaN (number)) {
		console.log('Вы ввели не число');
	} else if (number > 999) {
		console.log('Введите число от 0 до 999');
	var emptyObj = {};
	return emptyObj;
	} else {
	var fullObj = ['единицы', 'десятки', 'сотни'];
	var emptyObj = {};
	for (var i = 0; number != 0; i++) {
		emptyObj [fullObj[i]] = number % 10; 
		number = (number - emptyObj [fullObj[i]]) / 10; 
	}
}
	return emptyObj;
}

console.log(createObj(prompt('Введите число: ')));