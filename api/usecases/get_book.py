import string
from domain.Book import Book
from repository.find_by_id import find_by_id

def get_book(book_id: string) -> Book:
    return find_by_id(book_id)
