const cursors = document.querySelectorAll('.cursor');
let links = Array.from(document.querySelectorAll('a')); 
let cursorsArray = Array.from(cursors);
let linksArray = Array.from(links);

// functions
const getScrollPercentage = () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / docHeight) * 100;
    return scrollPercent;
}

const positionCursor = e => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    cursorsArray.map(cursor => {
        let cursorRadius = cursor.offsetWidth/2;
        setTimeout(() => {
            cursor.style.transform = `translate(${mouseX - cursorRadius}px, ${mouseY - cursorRadius}px)`;
        }, cursorRadius*2)
    });
}
window.addEventListener('mousemove', positionCursor);

linksArray.forEach(link => {
    link.addEventListener('mouseenter', () => {
        console.log('hover over');
        cursorsArray[1].classList.add('cursor--active');
    })
    link.addEventListener('mouseleave', () => {
        console.log('hover over');
        cursorsArray[1].classList.remove('cursor--active');
    })
})