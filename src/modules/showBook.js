import renderGroup from "./renderGroup";
import renderBooks from "./renderBooks";

const showBooks = data => {
    for (let type in data) {
        let category = document.createElement('div');
        category.className = 'card';
        let amount = data[type].length;
        category.innerHTML = renderGroup(type, amount);
        document.querySelector('.accordion').appendChild(category);
        console.log(`${type}`);
        for (let book of data[type]) {
            for (let data in book) {
                console.log(`${data}: ${book[data]}`);
                if (book[data] === 2021) {
                    book.name += " (Nauja knyga)";
                }
                document.querySelector(`#${type} .card-body`).innerHTML += renderBooks(data, book[data])

            }
            document.querySelector(`#${type} .card-body`).innerHTML += '<hr>'
        }
    }
}

export default showBooks