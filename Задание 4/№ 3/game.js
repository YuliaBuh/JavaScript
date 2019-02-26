var MillionsGame = {
    //запускаем игру
    run() {
        console.log("В погоне за миллионом");
        const avaliableDirections = [1, 2, 3, 4];
        var countElement = 0;
        for (key in getQuestion) {
                countElement += 1;
            }
        var game = {};
        var textQuestion = "";
        while (true) {
            game = getQuestion[player.step];
            textQuestion = game.question;
            for (var i = 1; i <= 4; i++) {
                textQuestion = textQuestion + i + ") " + game.answer[i];
            }
            playerAnswer = parseInt(prompt('Введите цифру варианта ответа\n' + textQuestion));
            if (!avaliableDirections.includes(playerAnswer)) {
                alert("Вы должны выбрать 1, 2, 3 или 4");
                continue;
            }
            else {
                if (game.result[playerAnswer]) {
                    player.money = player.money + game.money;
                    alert("Правильно! " + "Ваш выигрыш " + game.money);
                }
                else {
                    alert("Ответ неверный");
                    continue;
                }
            }
            if (player.step == countElement) {
                alert("Вы выиграли " + player.money + " Конец игры.");
                break;
            }
            player.step += 1;
            
        }
    }, init() {
        console.log("Вы готовы сыграть со мной в игру?");
        MillionsGame.run();
    }
};
MillionsGame.init();