var  game = {
  //запускаем игру
  run() {
    console.log("игра начата");
    while (true) {
      const direction = mover.getDirection();
      if (direction === null) {
        console.log("Игра закончена");
        return;
      }
        
      const nextPoint = mover.getNextPosition(direction);
      renderer.clear();
        //console.log('nextPoint x   ' + nextPoint.x);
        //console.log('nextPoint y   ' + nextPoint.y);       

      player.move(nextPoint);
      renderer.render();
    }
  },
  init() {
    //метод иницилизации
    console.log("Ваше положение - о");
    renderer.render();
    console.log("Для начала игры наберите game.run()");
    game.run();
  }
};

game.init();
