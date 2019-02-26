var renderer = {
  map: "",
  render() {
    for (var row = 0; row < config.rowsCount; row++) {
      for (var col = 0; col < config.colsCount; col++) {
        if (player.y === row && player.x === col) {
          this.map += "o";
        } else {
          this.map += "x";
        }
      }
      this.map += "\n";
    }
    console.log(this.map);
  },
  clear() {
    console.log("clear");
    this.map = "";
  }
};