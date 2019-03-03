	var images = document.getElementsByTagName("img");
	console.log(images);
	for (var i = 0; i < images.length; i++) {
  		images[i].onclick = changeBigImage;
 };

function changeBigImage (eventObj) {
    var appDiv = document.getElementById("big_image");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;

	var imageNameParts = eventElement.id.split('_');
    var src = "img/big/" + imageNameParts[1] + ".png";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.onload = function () {alert('Картинка есть!')};
    imageDomElement.onerror = function () {alert('Картинки нет!')};
    appDiv.appendChild(imageDomElement);
}



