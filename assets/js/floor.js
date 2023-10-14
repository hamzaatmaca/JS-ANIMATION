class Floor {
  constructor(wh, wv, floorColor, floorWidth, floorBottomColor, offset) {
    this.wh = wh;
    this.wv = wv;
    this.floorColor = floorColor;
    this.floorWidth = floorWidth;
    this.floorBottomColor = floorBottomColor;
    this.offset = offset;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, this.wh - this.offset);
    ctx.lineTo(this.wv, this.wh - this.offset);
    ctx.strokeStyle = this.floorColor;
    ctx.lineWidth = this.floorWidth;
    ctx.stroke();

    ctx.fillStyle = this.floorBottomColor;
    ctx.fillRect(0, this.wh - this.offset + this.floorWidth - 5, this.wv, 100);
  }
}

export default Floor;
