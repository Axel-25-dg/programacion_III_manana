const caja = document.getElementById('caja')

caja.addEventListener('mouseover', () => {
    caja.style.background = 'red';
})

caja.addEventListener('mouseout', () => {
    caja.style.background = 'blue';
})

caja.addEventListener('click', () => {
    alert('click');
})

const areaTouch = document.getElementById('areaTouch')

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'red';
})

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'blue';
})

areaTouch.addEventListener('click', () => {
    alert('click');
})