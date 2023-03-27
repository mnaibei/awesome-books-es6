import Book from './modules/bookClass.js';
import BookCRUD from './modules/localStorage.js';
import Interface from './modules/displayBooksInDOM.js';
import { onlyDisplayBook, onlyDisplayContact, onlyDisplayInputBook } from './modules/single-page-functions.js';

import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', Interface.renderBooks);

const addForm = document.getElementById('add-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  if (title && author) {
    BookCRUD.createBook(book);
    Interface.renderBooks();
    addForm.reset();
  }
});

const bookList = document.getElementById('book-list');

bookList.addEventListener('click', (e) => {
  if (e.target.matches('.rm-btn')) {
    const bookIndex = e.target.dataset.index;
    BookCRUD.removeBook(bookIndex);
    Interface.renderBooks();
  }
});

window.onload = () => {
  onlyDisplayBook();
};

document.querySelector('.list').addEventListener('click', onlyDisplayBook);
document.querySelector('.add').addEventListener('click', onlyDisplayInputBook);
document.querySelector('.contact').addEventListener('click', onlyDisplayContact);

const datetime = document.querySelector('.datetime');
const date = DateTime.now();
datetime.textContent = date.toLocaleString(DateTime.DATETIME_MED);