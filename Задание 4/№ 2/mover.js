var mover = {
  getDirection() {
    const avaliableDirections = [2, 4, 6, 8];  
    while (true) {
        player.step += 1;
      var direction = parseInt(prompt("Ход #" + player.step + ". Введите направление: 2, 4, 6, 8"));
      if (isNaN(direction)) {
        return null;
      }
      if (!avaliableDirections.includes(direction)) {
        alert("Для перемещения введите 2, 4, 6, 8");
        continue;
      }
      return direction;
    }
  },

  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y
    };
    switch (direction) {
      case 2:
        nextPosition.y--;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;//fix
      case 8:
        nextPosition.y++;
        break;//fix
      default:
        console.log("error " + direction);
    }
    return nextPosition;
  }
};