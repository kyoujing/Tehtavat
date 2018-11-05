const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];
const kuvaLista = document.querySelector('ul');
for (let i = 0; i<kuvat.length; i++){
  let img = kuvat[i];
  kuvaLista.innerHTML += '<li><img src="'+ kuvat[i] + '">';
}
