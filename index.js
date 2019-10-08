var tgt;
var points = 0;
var antalSkott = 0;

document.addEventListener('DOMContentLoaded', function () {
    // När sidan har laddat klart,
    // skapa en piltavla av tio cirklar. Varje cirkel ska ligga i en annan.
    // Vi börjar med den första...
    var circle = document.createElement('section');
    var parentElement = document.getElementsByTagName("main");

    parentElement[0].appendChild(circle);
    circle.classList.add("outer");
    circle.dataset.value = 1;

    // Därefter tar vi de övriga fyra.
    for (i = 0; i < 4; i++) {
        var newCircle = document.createElement('section');
        var circles = document.getElementsByTagName("section");
        // Lägg till den nyskapade cirkeln inne i den senast skapade.
        let sista = circles.length - 1;
        circles[sista].appendChild(newCircle);

        // Sätt ett value på varje cirkel, som en riktig måltavla.
        newCircle.dataset.value = i + 2;

        // Den innersta cirkeln ska ha en speciell klass.
        if (i == 3) {
            newCircle.classList.add('innermost');
        }
    }

    // Lyssna på "skott"
    parentElement[0].addEventListener('click', count);

    function count(e) {
        tgt = e;
        antalSkott++;
        if (e.target.tagName != "MAIN") {
            console.log(e.target.dataset.value);
            points += parseInt(e.target.dataset.value);
        }
        if (antalSkott == 5) {
            // Sluta skjuta
            parentElement[0].removeEventListener('click', count);
            /* En removeEventListener måste "se ut" precis som den addEventListener vi vill stänga av. */
            console.log(points);
            // Stäng av "siktet" (crosshair)
            parentElement[0].classList.add("noCrosshair");
        }
    }
})