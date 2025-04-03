const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']
/* Declaring the alternative text for each image file */
const alt = {
    'pic1' : 'Image of eye (gross)',
    'pic2' : 'Images of sand',
    'pic3' : 'Image of purple and white flowers',
    'pic4' : 'Image of Egyptian Hieroglyphics',
    'pic5' : 'Image of Butterfly on leaf'

}
/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt',[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src
        displayedImage.alt = e.target.alt
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnclass = btn.getAttribute('class')
    if (btnclass === 'dark') {
        btn.setAttribute ('class', 'light')
        btn.textContent = 'Lighten'
        overlay.style.backroundcolor = rgba(0,0,0,0.7)
    } else {

        btn.setAttribute('class', 'dark')
        btn.textContent('Darken')
        overlay.style.backroundcolor = rgba(0,0,0,0)
    }


}



)