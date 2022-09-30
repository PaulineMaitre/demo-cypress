from domain import Book
from repository.find_all import find_all


def get_books() -> [Book]:
    return find_all()
