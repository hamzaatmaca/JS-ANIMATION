class Sun {
  constructor(sunImg, wv, wh, offset) {
    this.sunImg = sunImg;
    this.wv = wv;
    this.wh = wh;
    this.offset = offset;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sunImg,
      this.wv - this.offset * 4,
      this.offset - this.offset / 2,
      this.sunImg.width,
      this.sunImg.height
    );
  }
}

export default Sun;
