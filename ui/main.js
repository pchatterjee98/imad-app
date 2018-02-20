console.log('Loaded!');

//changing some things using JS

var element = document.getElementById('main-text');
element.innerHTML= 'New value';

//move the image by clicking on it

var img = document.getElementById('Myimage');
img.onclick = function () {
    img.style.marginLeft = '100px'; 
};