// functions to create SPA
function onlyDisplayBook() {
  document.getElementById('display-books').style.display = 'unset';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

/* eslint-disable no-unused-vars */
function onlyDisplayInputBook() {
  document.getElementById('input-book').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
}

/* eslint-disable no-unused-vars */
function onlyDisplayContact() {
  document.getElementById('contact').style.display = 'unset';
  document.getElementById('display-books').style.display = 'none';
  document.getElementById('separation-book-form').style.display = 'none';
  document.getElementById('input-book').style.display = 'none';
}
// end of

export { onlyDisplayBook, onlyDisplayInputBook, onlyDisplayContact };