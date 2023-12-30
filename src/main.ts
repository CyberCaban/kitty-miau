const YUHbtn = document.querySelector<HTMLButtonElement>(".YUH");
const kittyIMG = document.querySelector<HTMLImageElement>(".kitty");

const miau: HTMLAudioElement = new Audio("Miau.mp3");
miau.volume = 0.1;

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

YUHbtn!.onclick = () => {
  kittyIMG!.srcset = `kitty${getRandomInt(1, 4)}.jpg`;

  setTimeout(() => {
    miau.play();

    kittyIMG!.animate(
      [
        { transform: "scale(0)", opacity: 0 },
        { opacity: 1 },
        { opacity: 1 },
        { transform: "scale(6)" },
      ],
      {
        duration: 5000,
        easing: "ease-out",
      }
    );
  }, 500);
};
