from domain import Book
from db.db_to_domain import db_to_domain
from db.db_utils import get_db_connexion, close_connexion


def find_all() -> [Book]:
    connexion = get_db_connexion()
    cursor = connexion.cursor()
    cursor.execute('SELECT * FROM books ORDER BY id')
    db_books = cursor.fetchall()
    close_connexion(connexion, cursor)
    books = []
    for b in db_books:
        book = db_to_domain(b)
        books.append(book)
    return books
