from domain.Book import Book
from repository.create import create


def save_book(book: Book) -> None:
    create(book)
