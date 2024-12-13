const apiKey= 'AIzaSyBYB7CvWfuoqX1IVpsdPgEP_Ijg7hClShI';

async function getBooks() {
    const searchBy = document.getElementById("searchBy").value;
    const searchinput = document.getElementById("searchInput").value.trim();
    const outputdisplay = document.getElementById("output");

outputdisplay.innerHTML='';

let query='';
switch(searchBy){
    case 'Category':
      query = `subject:${searchinput}`;
      break;
    case 'ID':
        query = `${searchinput}`;
        break;
    case 'Name':
        query =`intitle:${searchinput}`
        break;
    case 'Author':
        query  = `inauthor${searchinput}`;
        default:
            query=searchinput;
}

const apiUrl =`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

fetch(apiUrl)
.then((response)=>{
    if( !response.ok){
        throw new Error('Failed to fetch data from Google Books API')
    }
    return response.json();
})
.then((data)=>{
    if(!data.items || data.items.length===0){
        outputdisplay.innerHTML = '<p> No  books found </p>'
        return;
    }

     data.items.forEach(book => {
        const title = book.volumeInfo.title || 'No title avaliable';
        const authors = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(', ')
        : 'Unknown Author';

        const description = book.volumeInfo.description || 'No description available';
        const infoLink = book.volumeInfo.infoLink;
        const thumbnail = book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : 'https://via.placeholder.com/128x192?text=No+Image';


// create a book card
const bookCard = `
<div class="book-card">
<img src = "${thumbnail}" alt="${title}" class="book-image">
<h3>${title}</h3>
  <p><strong>Authors:</strong> ${authors}</p>
      <p>${description}</p>
                        <a href="${infoLink}" target="_blank">More Info</a>
                    </div>
                `;

outputdisplay.innerHTML +=bookCard;
     });
})
.catch((error) => {
    console.error('Error:', error);
    outputDiv.innerHTML = '<p>Failed to fetch books. Please try again later.</p>';
});
}
