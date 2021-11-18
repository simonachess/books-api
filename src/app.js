// import items from "./data/items";
import books from "./data/books";
// let data = require('./data/items.js')
import consoleItems from './consoleItems';
import showBooks from "./modules/showBook"
import sortBooks from './modules/sortBooks'
require('bootstrap');


// consoleItems(items)
sortBooks(books)
showBooks(books)
