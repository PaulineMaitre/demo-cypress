from domain.Book import Book
from db.db_utils import get_db_connexion, close_connexion


def create(book: Book) -> None:
    connexion = get_db_connexion()
    cursor = connexion.cursor()
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (book.title, book.code_name, book.author, book.quantity, book.publish_date))
    connexion.commit()
    close_connexion(connexion, cursor)
