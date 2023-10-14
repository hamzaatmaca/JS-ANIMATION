class Birds {
  constructor(birdsImg, bombImg, x, y) {
    this.birdsImg = birdsImg;
    this.bombImg = bombImg;
    this.x = x;
    this.y = y;
    this.bombY = this.y;
  }

  bomb(ctx) {
    this.bombY += 7;

    ctx.drawImage(this.bombImg, this.x + 200, this.bombY, 40, 80);
  }

  draw(ctx) {
    this.x -= 5;
    ctx.drawImage(this.birdsImg, this.x, this.y, 140, 80);
  }
}

export default Birds;
