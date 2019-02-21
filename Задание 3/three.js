//Задание №1
var i = 0;
while (i <= 100) {
	alert( i );
	i++;
}

//Задание №2
var Basket = [];
var countItem = 0;

countItem = parseInt(prompt('Сколько товаров у вас в корзине(число)?', 3));

if (countItem > 0) {
	for (; Basket.lenght != countItem;) {
		x = {};
		x.name = prompt('что вы купили?');
		if (x.name == null) {
			alert('вы ничего не купили :-( отмена операции');
			break;
		} else {
			x.price = parseInt(prompt('сколько это стоило(число)?',0));
			Basket.push(x);
		}
		if (Basket.length == countItem) {
			break;
		}
	}
	alert('Сумма заказа: ' + countBasketPrice(Basket));
} else {
	alert('некорректное количество товаров в корзине :-(')
}

function countBasketPrice(mass = [], sum = 0) {
	for (var i = mass.length - 1; i >= 0; i--) {
		sum = sum + mass[i].price;
	}
	return sum
}

//Задание №3
for (i = 0; i <= 9; console.log (i++) ) {
}

//Задание №4 
var str = '';
for ( i = 1; i <= 20; i++) {
	str += 'x';
	console.log(str);
}