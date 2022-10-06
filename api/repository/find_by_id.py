import string

from domain.Book import Book
from db.db_to_domain import db_to_domain
from db.db_utils import get_db_connexion, close_connexion


def find_by_id(book_id: string) -> Book:
    connexion = get_db_connexion()
    cursor = connexion.cursor()
    cursor.execute('SELECT * FROM books where id={0}'.format(str(book_id)))
    db_book = cursor.fetchone()
    close_connexion(connexion, cursor)
    book = db_to_domain(db_book)
    return book
