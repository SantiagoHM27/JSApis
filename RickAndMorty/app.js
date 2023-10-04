const URL = "https://rickandmortyapi.com/api/";

function getCharacters(page=1) {
    fetch(`${ URL }character/?page=${ page }`)
        .then(response => response.json())
        .then(data => {
            console.log(data.info);
        //console.log(data.results);
        data.results.forEach(personaje => {
            console.log(personaje.name);
        });
        showCharacters(data.results);
    })
    .catch(error => console.log(error))

}

function showCharacters(personajes) {
    const contenedor = document.querySelector('.characters');
    contenedor.innerHTML = '';
    personajes.forEach(personaje =>{
        contenedor.appendChild(createCard(personaje));
    })
    
}    

function createCard(personaje) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.width = '18rem';
    let contentCard = `  
    <img src="${ personaje.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ personaje.name }</h5>
      <p class="card-text">${ personaje.status }</p>
      <p class="card-text">${ personaje.gender }</p>
      <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${ personaje.id }">Ver más</a>
    </div>`
    card.innerHTML = contentCard;
    return card;
}

function getButtonCard(e){
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        const titleModal =  document.querySelector('.modal-title');
        const bodyModal = document.querySelector('.modal-body');
        titleModal.innerHTML = 'Pending.....'
        bodyModal.innerHTML = '<i class="fa fa-refresh fa-spin fa-4x"></i>'
    }
}

function buttonAction(e) {
    e.preventDefault()
    const page = prompt('Número de página a obtener');
    getCharacters(page);
}

btnGetChar.addEventListener('click', buttonAction);
document.querySelector('.characters').addEventListener('click', getButtonCard);