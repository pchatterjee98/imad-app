console.log('Loaded!');

//changing some things using JS

var element = document.getElementById('main-text');
element.innerHTML= 'New value';

//move the image by clicking on it

var img = document.getElementById('Myimage');

marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft +10 ;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,100); 
};