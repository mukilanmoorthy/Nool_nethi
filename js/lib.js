const storedData = localStorage.getItem('bookDetails');
const displayContainer = document.querySelector('.table-container');
const noDataMessage = document.querySelector('.bookDetailsDisplay');

if (storedData) {
    const bookDetails = JSON.parse(storedData);
    displayContainer.innerHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Category</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${bookDetails.BookName}</td>
                    <td>${bookDetails.Author}</td>
                    <td>${bookDetails.ISBN}</td>
                    <td>${bookDetails.Category}</td>
                    <td><button class = "delete-btn">Delete</button>
                </tr>
            </tbody>
        </table>
    `;
    noDataMessage.textContent = '';

    const  deleteButton = document.querySelector('.delete-btn');
    deleteButton.addEventListener('click',()=>{
        if(deleteButton == 1){
            
        }
        localStorage.removeItem('bookDetais');

        displayContainer.innerHTML = '';
    })
} else {
    noDataMessage.textContent = 'No book details found!';
    displayContainer.innerHTML = '';
}
