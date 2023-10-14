class Sky {
  constructor(skyColor, wh, wv, offset) {
    this.skyColor = skyColor;
    this.wv = wv;
    this.wh = wh;
    this.offset = offset;
  }

  draw(ctx) {
    ctx.fillStyle = this.skyColor;
    ctx.fillRect(0, 0, this.wv, this.wh - this.offset);
  }
}

export default Sky;
