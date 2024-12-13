const bookName = document.getElementById('bookname');
const authorName = document.getElementById('authorname');
const isbn = document.getElementById('isbn');
const category = document.getElementById('category');
const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
    const bookDetails = {
        BookName: bookName.value,
        Author: authorName.value,
        ISBN: isbn.value,
        Category: category.value,
    };

    localStorage.setItem('bookDetails', JSON.stringify(bookDetails));
    window.location.href = 'lib.html';
});
