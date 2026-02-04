function hearts() {
        const container = document.querySelector('.container');

        const creat = document.createElement('div');
        creat.innerHTML = '💜';
        container.appendChild(creat)
        creat.classList.add('hearts');
        creat.style.left = Math.random() * 100 + 'vw';
        creat.style.animationDuration = Math.random() * 3 + 2 + 's';
    }

hearts();

setInterval(hearts, 300);