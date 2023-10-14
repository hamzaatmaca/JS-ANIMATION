class Cloud {
  constructor(cloudImg, wv, wh, offset, x, y) {
    this.cloudImg = cloudImg;
    this.wv = wv;
    this.wh = wh;
    this.offset = offset;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    this.x += 0.2;

    ctx.drawImage(
      this.cloudImg,
      this.x,
      this.y,
      this.cloudImg.width,
      this.cloudImg.height
    );
  }
}

export default Cloud;
