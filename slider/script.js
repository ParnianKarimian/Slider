document.addEventListener('DOMContentLoaded', () => {
    const fig = document.querySelectorAll('.bus>figure');
    const bus = document.querySelector('.bus');
    const slider = document.querySelector('.slider');
    const r = document.querySelector('.r');
    const l = document.querySelector('.l');
    let w = slider.clientWidth;
    let turn = 0;

    fig.forEach((val) => {
        val.style.width = w + 'px';
    });

    bus.style.width = (fig.length * w) + 'px';

    r.addEventListener('click', () => {
        console.log('Right button clicked');
        if (turn < fig.length - 1) {
            turn++;
        } else {
            turn = 0;
        }
        bus.style.left = -(turn * w) + 'px';
    });
    
    l.addEventListener('click', () => {
        console.log('Left button clicked');
        if (turn !== 0) {
            turn--;
        } else {
            turn = fig.length - 1;
        }
        bus.style.left = -(turn * w) + 'px';
    });
    
});
