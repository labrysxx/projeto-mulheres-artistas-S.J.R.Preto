let protectedData = 'while(1);[{"image":"../assets/img/phoebe.jpg","name":"Phoebe Bridges","about":"Cantora, compositora, guitarrista e produtora estadunidense."},{"image":"../assets/img/angele.jpg","name":"Angèle","about":"Cantora, compositora, atriz, dubladora e produtora musical que fala francês."},{"image":"../assets/img/letrux.jpg","name":"Letrux","about":"Atriz, escritora, cantora, compositora e instrumentista."},{"image":"../assets/img/angel.jpg","name":"Angel Olsen","about":"Cantora e compositora."}]'

// add statement to clean protected data
const cleanData = rawData => rawData.slice(9);

// update statement to parse cleaned data
const musicistas = JSON.parse(cleanData(protectedData));

const row = document.querySelector(".section");

const template = (item) => `
    <div class="col-lg-4">
        <img class="rounded-circle" src=${item.image} alt="Generic placeholder image" width="140" height="140">
        <h2 class="fs-5 mt-3">${item.name}</h2>
        <p>${item.about}</p>
        <p><a class="btn btn-outline-info" href="artista.html" role="button">Saiba mais</a></p>
    </div>
`;

const populate = (arr) => {
    let content = "";
    arr.forEach((item) => {
      content += template(item);
    });
    row.innerHTML += content;
};

document.addEventListener('DOMContentLoaded', () => {
    populate(musicistas);
});
