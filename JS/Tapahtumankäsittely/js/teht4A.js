const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];

const img1 = document.getElementsByTagName("tr")[0].innerHTML  ="<img src='"+ pics[0].thumb+"'/>";
const img2 = document.getElementsByTagName("tr")[1].innerHTML  ="<img src='"+ pics[1].thumb+"'/>";
const img3 = document.getElementsByTagName("tr")[2].innerHTML  ="<img src='"+ pics[2].thumb+"'/>";
const img4 = document.getElementsByTagName("img")[0].innerHTML  ="<img src='"+ pics[0].big+"'/>";
const img5 = document.getElementsByTagName("img")[0].innerHTML  ="<img src='"+ pics[1].big+"'/>";
const img6 = document.getElementsByTagName("img")[0].innerHTML  ="<img src='"+ pics[2].big+"'/>";

function show1() {
  img4.document.getElementsByClassName("hidden")[0].style.visibility ='visible';
}
function show2() {
  img5.document.getElementsByClassName("hidden")[0].style.visibility ='visible';
}
function show3() {
  img6.document.getElementsByClassName("hidden")[0].style.visibility ='visible';
}
  img1.addEventListener("click", show1());
  img2.addEventListener("click", show2());
  img3.addEventListener("click", show3());
