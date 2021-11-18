//apsirasome funkcija kuria exportuosime

const consoleItems = (data) => {
    const ul = document.createElement('ul'); //sukuriam ul
    document.querySelector('.container').appendChild(ul) //ul idedam i kontainer
    for (let item of data) {
        for (let property in item) {
            let li = document.createElement('li');
            li.textContent = `${property}: ${item[property]}`;
            document.querySelector('ul').appendChild(li)
        }
    }
}

export default consoleItems;
