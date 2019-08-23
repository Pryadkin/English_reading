
function getColorBackground(r, g, b) {
    const   colorRange = document.querySelector('.colorRange'),
            body = document.body;           
            

    console.log(colorRange.elements[0].type)
    colorRange.elements[0].value = r;
    colorRange.elements[1].value = g;
    colorRange.elements[2].value = b;
    body.style.background = `rgb(${r}, ${g}, ${b})`;
    // if (colorRange.children[0])
    // let att = colorRange.children[0].children.getAttribute('min');
    // console.log(att);
    // colorRange.children[0].children.valueAsNumber =  2;
    // console.log(colorRange.children[0].children);

    colorRange.addEventListener("input", (e) => {
        if (e.target.dataset.num == 'r') {
            r = e.target.value;
        }
        if (e.target.dataset.num == 'g') {
            g = e.target.value;
        }
        if (e.target.dataset.num == 'b') {
            b = e.target.value;
        }
        
        body.style.background = `rgb(${r}, ${g}, ${b})`;
    })
}

getColorBackground(100, 100, 100);



