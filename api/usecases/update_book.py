from domain.Book import Book
from repository.update import update


def update_book(book_id: int, book: Book) -> None :
    if int(book_id) != book.id:
        print('id and book id are not equals')
        return
    update(book)
