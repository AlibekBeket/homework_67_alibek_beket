$.ajax({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'GET',
    success: function(data, status) {
        console.log(data);
        const container = document.getElementById('container');
        for (let i = 0; i < data.results.length; i++) {
            const characterBlock = document.createElement('div');
            const imageBlock = document.createElement('div');
            const nameBlock = document.createElement('div');
            const characterLink = document.createElement('a');
            characterLink.href = `http://localhost:63342/homework67/task%202/character.html?id=${data.results[i].id}`;
            const characterImg = document.createElement('img');
            characterImg.src = data.results[i].image;
            characterImg.style = `
                width: 150px;
                height: 150px;
            `;
            nameBlock.append(data.results[i].name);
            imageBlock.append(characterImg);
            characterLink.append(imageBlock, nameBlock);
            nameBlock.style = `
                margin-bottom: 10px;
            `;
            characterLink.style = `
                text-decoration: none;
                color: black;
            `;
            characterBlock.append(characterLink);
            characterBlock.style = `
                width: 200px;
                padding: 10px;
                margin: 10px;
                background-color: Bisque;
                display: inline-block;
                text-align: center;
                border-radius: 10px;
            `;
            container.append(characterBlock);
            container.style = `
                margin-bottom: 100px;
            `;
            characterLink.onmouseover = function (event) {
                characterBlock.style = `
                    background-color: Plum;
                    color: DarkSlateGray;
                    border-radius: 10px;
                    width: 200px;
                    padding: 10px;
                    margin: 10px;
                    display: inline-block;
                    text-align: center;
                `;
            };
            characterLink.onmouseout = function (event) {
                characterBlock.style = `
                    width: 200px;
                    padding: 10px;
                    margin: 10px;
                    background-color: Bisque;
                    display: inline-block;
                    text-align: center;
                    border-radius: 10px;
                `;
            };
        };
    },
    error: function(response, status) {
    }
});
const body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'DarkSlateGray';
