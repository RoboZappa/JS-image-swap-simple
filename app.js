// import { annotate } from 'rough-notation';

// var main = document.getElementById('imageMain');
// var annotate = annotate(main, {type: 'underline'})
// annotate.show();


function swapImage(id) {
    var image = document.getElementById(id);
    var mainImage = document.getElementById('imageMain');
    mainImage.src = image.src; 
}