const loading = document.getElementById("loading");
const main = document.getElementById("mainContent");
const music = document.getElementById("music");

setTimeout(() => {
    loading.style.display = "none";
    main.style.display = "block";
}, 4000);

function playMusic() {
    music.play().catch(() => {});
}

document.addEventListener("click", playMusic, { once: true });

const message = `Dear Sipuu...

I know work has kept me busy.

But never away from loving you.

I'm truly sorry if I made you feel alone.

You are my happiness.

My peace.

My home.

I promise I'll always try to become better for us.

I Love You Forever ❤️`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {

    if (typing && i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = typeWriter;

const photos = [
IMG-20260804-WA0000.jpg
IMG-20260804-WA0002.jpg
IMG-20260804-WA0003.jpg
IMG-20260804-WA0005.jpg
IMG-20260804-WA0006.jpg
];
let current = 0;

setInterval(() => {

const slide = document.getElementById("slide");

if (slide) {

current++;

if (current >= photos.length) {

current = 0;

}

slide.src = photos[current];

}

}, 3000);

const noBtn = document.getElementById("noBtn");

if (noBtn) {

noBtn.addEventListener("mouseover", () => {

noBtn.style.position = "absolute";

noBtn.style.left = Math.random() * 70 + "%";

noBtn.style.top = Math.random() * 70 + "%";

});

}

const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {

yesBtn.onclick = () => {

alert("❤️ Thank You My Love ❤️\n\nI Promise I'll Always Love You Forever.\n\n- Ansh");

}

}

setInterval(() => {

const heart = document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left = Math.random() * 100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize = (15 + Math.random() * 25) + "px";

heart.style.pointerEvents = "none";

heart.style.zIndex = "9999";

heart.style.animation = "heartMove 5s linear forwards";

document.body.appendChild(heart);

setTimeout(() => heart.remove(), 5000);

}, 350);

const style = document.createElement("style");

style.innerHTML = `
@keyframes heartMove{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
