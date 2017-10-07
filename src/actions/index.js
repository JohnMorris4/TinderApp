export function selectBook(book){
    //console.log('A book has been selected:', book.title);
    //seectBook is an ActionCreator
    return {
        //TYPE
        type: 'BOOK_SELECTED',
        //PAYLOAD
        payload: book
    };
}