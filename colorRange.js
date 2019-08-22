
function getColorBackground(a, b, c) {
    const   colorRange = document.querySelector('.colorRange'),
            body = document.body;           
            

    console.log(colorRange.elements[0].type)
    colorRange.elements[0].value = a;
    colorRange.elements[1].value = b;
    colorRange.elements[2].value = c;
    body.style.background = `rgb(${a}, ${b}, ${c}, .5)`;
    // if (colorRange.children[0])
    // let att = colorRange.children[0].children.getAttribute('min');
    // console.log(att);
    // colorRange.children[0].children.valueAsNumber =  2;
    // console.log(colorRange.children[0].children);

    colorRange.addEventListener("input", (e) => {
        if (e.target.dataset.num == 'a') {
            a = e.target.value;
        }
        if (e.target.dataset.num == 'b') {
            b = e.target.value;
        }
        if (e.target.dataset.num == 'c') {
            c = e.target.value;
        }
        
        body.style.background = `rgb(${a}, ${b}, ${c})`;
    })
}

getColorBackground(200, 180, 150);



