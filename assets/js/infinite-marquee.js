const marquee = document.querySelector('.marquee');
const track = marquee.querySelector('.marquee__track');
const content = track.querySelector('.marquee__content');

// isi layar dengan clone
while (track.offsetWidth < marquee.offsetWidth * 2) {
    track.appendChild(content.cloneNode(true));
}

let pos = 0;
const speed = 0.6; // makin besar makin cepat

function animate() {
    pos -= speed;

    if (Math.abs(pos) >= content.offsetWidth) {
        pos = 0;
    }

    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
}

animate();