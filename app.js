const urlBase = 'https://rickandmortyapi.com/api/character/';

fetch (urlBase)
  .then(respuesta => {
      return respuesta.json();
  }).then(respJson => {
      console.log(respJson);
      const info = respJson.info;
      const personajes = respJson.results;
      console.log(info);
      console.log(personajes);
      showCharacters(personajes);
  })

  const showCharacters = (personajes) =>{
      const ListaPersonajes = document.querySelector('ul');
      personajes.forEach(personaje => {
          const li = document.createElement('li');
          li.innerText = `personaje ${personaje.name}`;
          ListaPersonajes.appendChild(li);
      })
  }