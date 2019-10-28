let globalTimeout;
$('.search').keyup(function(){
    if(globalTimeout != null) {
        clearTimeout(globalTimeout);
    }
    globalTimeout = setTimeout(SearchFunc,3000);
})
function SearchFunc(){
    let search = $(".search__input").val();
    let searchResult = $(".search-result");
    if (search.length >= 3) {
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
            type: "GET",
            success: function (data) {
                let results = $(".search-result");
                let bookCount;
                let arr = [];
                for (let i = 0; i < data.items.length; i++) {
                    let info = data.items[i].volumeInfo;
                    let bookItem = $('<div/>', {
                        'class': 'search-result__item'
                    });
                    let bookImg = $('<div/>', {
                        'class': 'search-result__img'
                    }).appendTo(bookItem);
                    let bookContent = $('<div/>', {
                        'class': 'search-result__content',
                    }).appendTo(bookItem);
                    let img = $('<img/>', {
                        'src': info.imageLinks && info.imageLinks.thumbnail || 'http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg',
                    }).appendTo(bookImg);
                    if ('title' in info){
                        let bookTitle = $('<h4/>', {
                            'class': 'search-result__title',
                            'text': info.title
                        }).appendTo(bookContent);
                    }
                    if ('authors' in info){
                        let bookAuthors = $('<span/>', {
                            'class': 'search-result__authors',
                            'text': info.authors
                        }).appendTo(bookContent);
                    }
                    if ('description' in info) {
                        let bookDesc = $('<p/>', {
                            'class': 'search-result__text',
                            'text': info.description
                        }).appendTo(bookContent);
                    }
                    if ('infoLink' in info) {
                        let bookButton = $('<a/>', {
                            'class': 'search-result__link',
                            'text': 'Buy',
                            'target': '_blank',
                            'href': info.infoLink
                        }).appendTo(bookContent);
                    }
                    arr.push(bookItem);
                }
                $(searchResult).html(arr);
                bookCount = $(".search-result__item").length;
                $(".search__count span").html(bookCount);
            }
        });
    };
}

