const card = document.querySelector(".card");
let bounds = card.getBoundingClientRect();

function rotateCard(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const cardX = bounds.left + bounds.width / 2;
    const cardY = bounds.top + bounds.height / 2;

    const deltaX = mouseX - cardX;
    const deltaY = mouseY - cardY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    card.style.transform = `scale3d(1.07, 1.07, 1.07) rotate3d(
        ${deltaY / 100},
        ${-deltaX / 100},
        0,
        ${(Math.log(distance) * 3.5)}deg
    )`;

    card.querySelector(".glow").style.backgroundImage = `radial-gradient(circle at
        ${deltaX * 2 + bounds.width / 2}px
        ${deltaY * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000F
    )`;
}

if (window.innerWidth > 768) {
    card.addEventListener("mousemove", rotateCard);

    window.addEventListener("resize", () => {
        bounds = card.getBoundingClientRect();
    });
}

const message = "Lieber Duki, Besten Dank für deine Zusammenarbeit. 2023 ist bald hinter uns, starten wir mit voll Vertrauen ins 2024. Séba"
const saying = "Kreativität ist Intelligenz, die Spass hat - Albert Einstein";

function setCard() {
    document.getElementById("cardName").textContent = message;
    document.getElementById("cardMessage").textContent = saying;
}
setCard();