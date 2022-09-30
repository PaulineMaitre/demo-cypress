from domain.Book import Book
from db.db_utils import get_db_connexion, close_connexion


def update(book: Book) -> None:
    connexion = get_db_connexion()
    cursor = connexion.cursor()
    cursor.execute('UPDATE books SET title=%s, code_name=%s, author=%s, quantity=%s, publish_date=%s'
                   'WHERE id=%s',
                   (book.title, book.code_name, book.author, book.quantity, book.publish_date, book.id))
    connexion.commit()
    close_connexion(connexion, cursor)
