export function selectBook(book) {
  // select book is an ActionCreator, returns action, object with type prop
  return {
     type: 'BOOK_SELECTED',
     payload: book
  };
}
