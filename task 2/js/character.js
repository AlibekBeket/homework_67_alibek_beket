let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');

$.ajax({
    url: `https://rickandmortyapi.com/api/character/${param}`,
    method: 'GET',
    success: function(data, status) {
        console.log(data);
        const container = document.getElementById('container');
        const characterImage = document.createElement('img');
        characterImage.src = data.image;
        const characterInfo = document.createElement('div');
        const characterName = document.createElement('p');
        characterName.innerText = `Name: ${data.name}`;
        const characterStatus = document.createElement('p');
        characterStatus.innerText = `Status: ${data.status}`;
        const characterCreated = document.createElement('p');
        characterCreated.innerText = `Created: ${data.created}`;
        const characterGender = document.createElement('p');
        characterGender.innerText = `Gender: ${data.gender}`;
        const characterSpecies = document.createElement('p');
        characterSpecies.innerText = `Species: ${data.species}`;
        const characterType = document.createElement('p');
        characterType.innerText = `Type: ${data.type}`;
        const characterEpisode = document.createElement('p');
        const characterLocation = document.createElement('p');
        characterLocation.innerText = `Location: ${data.location.name}`;
        const characterOrigin = document.createElement('p');
        characterOrigin.innerText = `Location: ${data.origin.name}`;
        let numberOfEpisode = 0
        for (i in data.episode) {
            numberOfEpisode += 1
        };
        characterEpisode.innerText = `Number of episodes: ${numberOfEpisode}`;
        characterInfo.append(characterName, characterStatus, characterCreated,
            characterGender, characterSpecies, characterType, characterEpisode,
            characterLocation, characterOrigin
        );
        container.append(characterImage, characterInfo);
        characterImage.style = `
            width: 400px;
            height: 400px;
        `;
        characterInfo.style = `
            margin-left: 20px;
        `;
        container.style = `
            margin: 10px;
            color: white;
            display: flex;
        `;
    },
    error: function(response, status) {
    }
});
const homeLink = document.createElement('a');
homeLink.innerText = `Return to Home Page`;
homeLink.href = `http://localhost:63342/homework67/task%202/index.html`;
homeLink.style = `
    text-decoration: none;
    color: BlanchedAlmond;
    margin-left: 20px;
    font-size: 20px;
`;
homeLink.onmouseover = function (event) {
    homeLink.style = `
        text-decoration: none;
        color: Coral;
        margin-left: 20px;
        font-size: 20px;
    `;
};
homeLink.onmouseout = function (event) {
    homeLink.style = `
        text-decoration: none;
        color: BlanchedAlmond;
        margin-left: 20px;
        font-size: 20px;
    `;
};
const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'DarkSlateGray';
body.append(homeLink);