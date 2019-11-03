
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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qcyIsIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUE7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IHRpbWVyO1xyXG5sZXQgdGltZXJEZWxheSA9IDMwMDA7XHJcbmxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX19pbnB1dFwiKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChjaGVja1Jlc3VsdCwgdGltZXJEZWxheSk7XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrUmVzdWx0KCkge1xyXG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoX19pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtcmVzdWx0XCIpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVUkwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSAke3NlYXJjaH1gO1xyXG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHJlcXVlc3RVUkwpO1xyXG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8PSAzOTkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeGhyLnJlc3BvbnNlLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSB4aHIucmVzcG9uc2UuaXRlbXNbaV0udm9sdW1lSW5mbztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9va0ltZyA9IGA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdF9faW1nXCI+PGltZyBzcmM9XCIke2luZm8uaW1hZ2VMaW5rcyAmJiBpbmZvLmltYWdlTGlua3MudGh1bWJuYWlsIHx8ICdodHRwOi8vdnlmaGVhbHRoLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC95b2dhLXBsYWNlaG9sZGVyMS5qcGcnfVwiIGFsdD1cImltYWdlXCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9va1RpdGxlID0gKCd0aXRsZScgaW4gaW5mbykgPyBgPGg0IGNsYXNzPVwic2VhcmNoLXJlc3VsdF9fdGl0bGVcIj4ke2luZm8udGl0bGV9PC9oND5gIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9va0F1dGhvcnMgPSAoJ2F1dGhvcnMnIGluIGluZm8pID8gYDxzcGFuIGNsYXNzPVwic2VhcmNoLXJlc3VsdF9fYXV0aG9yc1wiPiR7aW5mby5hdXRob3JzfTwvc3Bhbj5gIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9va0Rlc2MgPSAoJ2Rlc2NyaXB0aW9uJyBpbiBpbmZvKSA/IGA8cCBjbGFzcz1cInNlYXJjaC1yZXN1bHRfX3RleHRcIj4ke2luZm8uZGVzY3JpcHRpb259PC9wPmAgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29rQnV0dG9uID0gKCdpbmZvTGluaycgaW4gaW5mbykgPyBgPGEgaHJlZj1cIiR7aW5mby5pbmZvTGlua31cIiBjbGFzcz1cInNlYXJjaC1yZXN1bHRfX2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIj5CdXk8L2E+YCA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tDb250ZW50ID0gYDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0X19jb250ZW50XCI+JHtib29rVGl0bGV9ICR7Ym9va0F1dGhvcnN9ICR7Ym9va0Rlc2N9ICR7Ym9va0J1dHRvbn08L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va0l0ZW0uY2xhc3NOYW1lID0gXCJzZWFyY2gtcmVzdWx0X19pdGVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va0l0ZW0uaW5uZXJIVE1MID0gYCR7Ym9va0ltZ30gJHtib29rQ29udGVudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGJvb2tJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0LmFwcGVuZChhcnJbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VhcmNoLXJlc3VsdF9faXRlbVwiKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9fY291bnQgc3BhblwiKS50ZXh0Q29udGVudCA9IGJvb2tDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJUaGUgbWluaW1hbCBudW1iZXIgb2YgaW5zZXJ0ZWQgY2hhcmFjdGVycyBpcyAzXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiXHJcbi8vPWluY2x1ZGUgLi4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXHJcbiJdfQ==
