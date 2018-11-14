function tog(event) {
  const text = document.getElementsByTagName('p')[0];
  text.style.opacity = event.type==="mouseleave" ?0:1;

}
const img = document.getElementById('kuva');
img.addEventListener('mouseenter', tog);
img.addEventListener('mouseleave', tog);