const cursors = document.querySelectorAll('.cursor');

// functions
const getScrollPercentage = () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (window.scrollY / docHeight) * 100;
    return scrollPercent;
}

const positionCursor = e => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let links = Array.from(document.querySelectorAll('a')); 
    let cursorsArray = Array.from(cursors);
    let linksArray = Array.from(links);


    cursorsArray.map(cursor => {
        let cursorRadius = cursor.offsetWidth/2;
        setTimeout(() => {
            cursor.style.transform = `translate(${mouseX - cursorRadius}px, ${mouseY - cursorRadius}px)`;
        }, cursorRadius)
    });

    linksArray.forEach(link => {
        link.addEventListener('mouseover', () => {
            console.log('hover over');
            cursorsArray.map(cursor => { cursor.style.trasform = `translate(${mouseX - cursor.offsetWidth/2}px, ${mouseY - cursor.offsetWidth/2}px) scale(1.5)` })
        })
    })
}
window.addEventListener('mousemove', positionCursor);