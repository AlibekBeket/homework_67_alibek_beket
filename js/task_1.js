const button = document.getElementById('add-item-btn');
button.onclick = function () {
    const container = document.getElementById('container');
    const createDiv = document.createElement('div');
    createDiv.innerText = 'Добавлен новый блок <div>!'
    const createButton = document.createElement('button');
    createButton.innerText = 'Закрыть'
    container.append(createDiv);
    createDiv.append(createButton);
    createButton.onclick = function () {
        createDiv.remove()
    };
    setTimeout(function() {
        createDiv.remove()}, 5000
    );
};