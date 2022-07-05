import string
from utils.seeds import b1
from domain.Book import Book
from utils.seeds import default_books


def create(book: Book):
    # b = Book(book.id, book.title, book.author, book.publish_date, book.quantity)
    default_books.append(book)
    return
