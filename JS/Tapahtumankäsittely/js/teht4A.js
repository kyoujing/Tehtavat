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


const img4 = document.getElementsByTagName("div")[0].innerHTML  ="<img src='"+ pics[0].big+"'/>";
const img5 = document.getElementsByTagName("div")[0].innerHTML  ="<img src='"+ pics[1].big+"'/>";
const img6 = document.getElementsByTagName("div")[0].innerHTML  ="<img src='"+ pics[2].big+"'/>";

document.getElementById("p1").addEventListener("click", function() {
  img4.style.visibility = "visible";
});

document.getElementById("p2").addEventListener("click", function() {
  img5.style.visibility = "visible";
});

document.getElementById("p3").addEventListener("click", function() {
  img6.style.visibility = "visible";
});
