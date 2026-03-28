function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function typeEffect(description, speed, waitTime) {
    const element = document.getElementById("description");

    while (true) {

        element.innerHTML = "";
        for (let letter of description) {
            element.innerHTML += letter;
            await delay(speed);
        }

        await delay(waitTime);

        for (let i = description.length; i >= 0; i--) {
            element.innerHTML = description.substring(0, i);
            await delay(30);
        }

        await delay(500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect("En proceso constante de especializacion y preparacion, " + 
        "fortaleciendo mis competencias en tecnologias front-end, aplicando" + 
        " buenas prácticas de calidad en el desarrollo de codigo.", 40, 2000);
});

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', () => {
    link.classList.toggle('active');
  });
});