var image = document.getElementsByClassName("button");
	for (var i = 0; i < image.length; i++) {
        image[i].setAttribute('number', i);
        image[i].onclick = addToBasket;
    }

    function addToBasket(eventObj) {
        var appDiv = document.getElementById("products_basket");
        var newElement = document.createElement("li");
        number = eventObj.target.attributes[1].nodeValue;
        element = image[number].parentElement;
        newElement.innerHTML = element.getAttribute('name') + ' to ' + element.getAttribute('money')+'$';
        appDiv.appendChild(newElement);
        basketTotal = document.getElementById('totalMoney');
        basketMoney = basketTotal.getAttribute('totalMoney');
        basketMoney = parseFloat(basketMoney) + parseFloat(element.getAttribute('money'));
        basketTotal.setAttribute('totalMoney', basketMoney);
        basketTotal.innerHTML = "Total: " + basketMoney + "$";
        }
