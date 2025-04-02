const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const Images = ['pic1','pic2','pic3','pic4','pic5']
/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (const image of Images){
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/$pic1)`);
newImage.setAttribute('alt',pic1);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src
    displayedImage.alt = e.target.alt
})
}
/* Wiring up the Darken/Lighten button */
