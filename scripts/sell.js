import footer from '../components/footer.js'



let div = document.getElementById('footer');

div.innerHTML = footer()
// console.log('x :', x )




//first carasol

let images_up = [
  "https://logan.nnnow.com/content/dam/nnnow-project/13-sep-2022/se/SC_Offerpage_Upto40_offdesktop.jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/13-sep-2022/se/SephoraandExclusives_TopBannerdesktop(1).jpg"
  ,"https://logan.nnnow.com/content/dam/nnnow-project/03-aug-2022/Olaplex_Offerpagedesktop.jpg"
]
let slideshow = document.getElementById('slideshow');

let pic = document.createElement('img');
pic.src = images_up[0]
slideshow.append(pic);
let j = 0;
setInterval(function () {
  slideshow.innerHTML = null;
  if (j == images_up.length) {
    j = 0;
  }
  pic.src = images_up[j];
  slideshow.append(pic);
  j++;
}, 3000);


// Second carosole

let image = [
  'https://logan.nnnow.com/content/dam/nnnow-project/24-sep-2022/Clarins_Offerstripdesktop(1).jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/20-sep-2022/ForestEssential_Offerstripdesktop(2).jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/26-aug-2022/se/Toofaced_Offerstripdesktop.jpg',

];

let container = document.getElementById('container');
let img = document.createElement('img');
img.src = image[image.length-1]

container.append(img);
let i = 0;
setInterval(function () {
  container.innerHTML = null;
  if (i == image.length ) {
    i = 0;
  }
  img.src = image[i];
  container.append(img);
  i++;
}, 3000);

