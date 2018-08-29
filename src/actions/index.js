export function selectBook(book) {
  // select book is an ActionCreator, returns action, object with a type property.
  return {
     type: 'BOOK_SELECTED',
     payload: book
  };
}
