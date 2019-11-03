
let timer;
let timerDelay = 3000;
let searchInput = document.querySelector(".search__input");

searchInput.addEventListener('keyup', () => {
    clearTimeout(timer);
    if (searchInput.value) {
        timer = setTimeout(checkResult, timerDelay);
    };
});

function checkResult() {
    if (searchInput.value.length >= 3) {
        let search = document.querySelector(".search__input").value;
        let searchResult = document.querySelector(".search-result");
        const requestURL = `https://www.googleapis.com/books/v1/volumes?q= ${search}`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", requestURL);
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.status <= 399) {
                let arr = [];
                for (let i = 0; i < xhr.response.items.length; i++) {
                    let info = xhr.response.items[i].volumeInfo;
                    let bookImg = `<div class="search-result__img"><img src="${info.imageLinks && info.imageLinks.thumbnail || 'http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg'}" alt="image"></div>`;
                    let bookTitle = ('title' in info) ? `<h4 class="search-result__title">${info.title}</h4>` : "";
                    let bookAuthors = ('authors' in info) ? `<span class="search-result__authors">${info.authors}</span>` : "";
                    let bookDesc = ('description' in info) ? `<p class="search-result__text">${info.description}</p>` : "";
                    let bookButton = ('infoLink' in info) ? `<a href="${info.infoLink}" class="search-result__link" target="_blank">Buy</a>` : "";
                    let bookContent = `<div class="search-result__content">${bookTitle} ${bookAuthors} ${bookDesc} ${bookButton}</div>`;
                    let bookItem = document.createElement("div");
                    bookItem.className = "search-result__item";
                    bookItem.innerHTML = `${bookImg} ${bookContent}`;
                    arr.push(bookItem);
                }
                searchResult.innerHTML = "";
                for (let i = 0; i < arr.length; i++ ) {
                    searchResult.append(arr[i]);
                }
                let bookCount = document.querySelectorAll(".search-result__item").length;
                document.querySelector(".search__count span").textContent = bookCount;
            }
        };
        xhr.send();
    } else {
        alert("The minimal number of inserted characters is 3");
    }
}


