import Birds from "./assets/js/birds";
import Cloud from "./assets/js/cloud";
import Floor from "./assets/js/floor";
import Sky from "./assets/js/sky";
import Sun from "./assets/js/sun";

const canvas = document.getElementById("cnv");
const wv = window.innerWidth;
const wh = window.innerHeight;
canvas.width = wv;
canvas.height = wh;
const ctx = canvas.getContext("2d");

//PARAMETERS
const offset = wh - (wh - 100);
const floorColor = "lightgreen";
const floorBottomColor = "#62E322";
const floorWidth = 10;
const skyColor = "#9AFFFD";

//IMG
const sunImg = new Image();
sunImg.src = "./assets/img/sun.png";
sunImg.width = 150;
sunImg.height = 150;

const cloudImg = new Image();
cloudImg.src = "./assets/img/cloud1.webp";
cloudImg.width = 100;
cloudImg.height = 60;

const birdsImg = new Image();
birdsImg.src = "./assets/img/plane2.png";
birdsImg.width = 100;
birdsImg.height = 60;

const sinagogImg = new Image();
sinagogImg.src = "./assets/img/sinagog.png";
sinagogImg.width = 100;
sinagogImg.height = 60;

const flagImg = new Image();
flagImg.src = "./assets/img/flag.png";
flagImg.width = 100;
flagImg.height = 60;

const bombImg = new Image();
bombImg.src = "./assets/img/missile.png";
bombImg.width = 100;
bombImg.height = 60;

let floor = new Floor(wh, wv, floorColor, floorWidth, floorBottomColor, offset);
let sky = new Sky(skyColor, wh, wv, offset);
let sun = new Sun(sunImg, wv, wh, offset);

let clouds = [];
let birds = [
  new Birds(birdsImg, bombImg, wv, Math.abs(Math.floor(Math.random() * 100))),
];

function createClouds() {
  clouds.map((val) => {
    val.draw(ctx);

    if (val.x > wv) {
      const index = clouds.indexOf(val);
      if (index > -1) {
        clouds.splice(index, 1);
      }
    }
  });

  if (clouds.length < 10) {
    clouds.push(
      new Cloud(
        cloudImg,
        wv,
        wh,
        offset,
        Math.floor(Math.random() * wv),
        Math.floor(Math.random() * wh - wh / 2)
      )
    );
  }
}

function createBirds() {
  birds.map((val) => {
    val.draw(ctx);

    if (val.x < wv / 2) {
      val.bomb(ctx);
    }

    if (val.x < 0) {
      const index = birds.indexOf(val);
      if (index > -1) {
        birds.splice(index, 1);
        setTimeout(() => {
          birds.push(
            new Birds(
              birdsImg,
              bombImg,
              wv,
              Math.abs(Math.floor(Math.random() * 100))
            )
          );
        }, 2000);
      }
    }
  });
}

function engine() {
  ctx.clearRect(0, 0, wv, wh);

  floor.draw(ctx);
  sky.draw(ctx);
  sun.draw(ctx);

  createBirds();
  createClouds();
  ctx.drawImage(sinagogImg, wv / 2 - offset, wh - offset - 230, 250, 230);
  ctx.drawImage(flagImg, wv / 2 - offset + 205, wh - offset - 270, 70, 50);
  ctx.drawImage(flagImg, wv / 2 - offset + 45, wh - offset - 270, 70, 50);

  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Metni yazdırma
  ctx.fillText("F*ck Israel, let all Jewish soldiers die!", wv / 4, wh / 4);

  requestAnimationFrame(engine);
}

engine();
