const button = document.getElementById('add-item-btn');
button.onclick = function () {
    const container = document.getElementById('container');
    const createDiv = document.createElement('div');
    createDiv.innerText = 'Добавлен новый блок <div>!';
    const createButton = document.createElement('button');
    createButton.innerText = 'Закрыть';
    container.append(createDiv);
    createDiv.append(createButton);
    container.style.position = 'relative';
    createDiv.style = `
        position: absolute;
        right: 5px;
        top: 5px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        background-color: BlanchedAlmond;
        border: solid 2px black;
        padding: 5px 20px;
        border-radius: 10px;
    `;
    createButton.style = `
        border-radius: 10px;
        background-color: Snow;
    `;
    createButton.onmouseover = function (event) {
        createButton.style = `
            background-color: black;
            color: white;
            border-radius: 10px;
        `;
    };
    createButton.onmouseout = function (event) {
        createButton.style = `
            border-radius: 10px;
            background-color: Snow;
            color: black;
        `;
    };
    createButton.onclick = function () {
        createDiv.remove()
    };
    setTimeout(function() {
        createDiv.remove()}, 5000
    );
};