'use strict';
const button = document.getElementById('btn');
button.addEventListener("submit", function hae(evt){
  evt.preventDefault();
  teksti = document.getElementById('hakuteksti').value;
  let URL = 'http://api.tvmaze.com/search/shows?q=' +teksti;
  console.log(URL);
  fetch(URL).then((res) => res.json())
  .then((data) => {
        let output = '<pre></pre>';
        data.forEach(function(show){
          console.log('show', show);
        if (show.show.image !== null){
            show.show.image.medium = 'https://www.freeiconspng.com/uploads/no-image-icon-21.png';
          }
          output += `<ul>
                     <h2>${show.show.name}</h2>
                     <img src="${show.show.image.medium}"></img>       
                     <li><strong>Genres:</strong>${show.show.genres}</li>        
                     <li><strong>OfficialSite:</strong>${show.show.officialSite}</li>
                     <li><strong>Summary:</strong>${show.show.summary}</li>
                     </ul>
                    `;
        });
              document.getElementById('output').innerHTML = output;
          })
      .catch(function(e) {
            console.log("Oops, error");
          console.log(e);
      });
  });

