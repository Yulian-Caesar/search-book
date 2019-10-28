
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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCIuLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEdElBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vPWluY2x1ZGUgLi4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXG4iLCJsZXQgZ2xvYmFsVGltZW91dDtcclxuJCgnLnNlYXJjaCcpLmtleXVwKGZ1bmN0aW9uKCl7XHJcbiAgICBpZihnbG9iYWxUaW1lb3V0ICE9IG51bGwpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoZ2xvYmFsVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWxUaW1lb3V0ID0gc2V0VGltZW91dChTZWFyY2hGdW5jLDMwMDApO1xyXG59KVxyXG5mdW5jdGlvbiBTZWFyY2hGdW5jKCl7XHJcbiAgICBsZXQgc2VhcmNoID0gJChcIi5zZWFyY2hfX2lucHV0XCIpLnZhbCgpO1xyXG4gICAgbGV0IHNlYXJjaFJlc3VsdCA9ICQoXCIuc2VhcmNoLXJlc3VsdFwiKTtcclxuICAgIGlmIChzZWFyY2gubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPVwiICsgc2VhcmNoLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSAkKFwiLnNlYXJjaC1yZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9va0NvdW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSBkYXRhLml0ZW1zW2ldLnZvbHVtZUluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tJdGVtID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2VhcmNoLXJlc3VsdF9faXRlbSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9va0ltZyA9ICQoJzxkaXYvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1yZXN1bHRfX2ltZydcclxuICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tDb250ZW50ID0gJCgnPGRpdi8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2VhcmNoLXJlc3VsdF9fY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuYXBwZW5kVG8oYm9va0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSAkKCc8aW1nLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBpbmZvLmltYWdlTGlua3MgJiYgaW5mby5pbWFnZUxpbmtzLnRodW1ibmFpbCB8fCAnaHR0cDovL3Z5ZmhlYWx0aC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTAveW9nYS1wbGFjZWhvbGRlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rSW1nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJ3RpdGxlJyBpbiBpbmZvKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tUaXRsZSA9ICQoJzxoNC8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1yZXN1bHRfX3RpdGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogaW5mby50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgnYXV0aG9ycycgaW4gaW5mbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib29rQXV0aG9ycyA9ICQoJzxzcGFuLz4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc2VhcmNoLXJlc3VsdF9fYXV0aG9ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dCc6IGluZm8uYXV0aG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgnZGVzY3JpcHRpb24nIGluIGluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tEZXNjID0gJCgnPHAvPicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdzZWFyY2gtcmVzdWx0X190ZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0JzogaW5mby5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgnaW5mb0xpbmsnIGluIGluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2tCdXR0b24gPSAkKCc8YS8+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3NlYXJjaC1yZXN1bHRfX2xpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RleHQnOiAnQnV5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0YXJnZXQnOiAnX2JsYW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdocmVmJzogaW5mby5pbmZvTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbyhib29rQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGJvb2tJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoc2VhcmNoUmVzdWx0KS5odG1sKGFycik7XHJcbiAgICAgICAgICAgICAgICBib29rQ291bnQgPSAkKFwiLnNlYXJjaC1yZXN1bHRfX2l0ZW1cIikubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zZWFyY2hfX2NvdW50IHNwYW5cIikuaHRtbChib29rQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4iXX0=
