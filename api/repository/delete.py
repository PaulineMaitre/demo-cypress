from db.db_utils import get_db_connexion, close_connexion


def delete(book_id) -> None:
    connexion = get_db_connexion()
    cursor = connexion.cursor()
    cursor.execute('DELETE from books WHERE id=%s', [book_id])
    connexion.commit()
    close_connexion(connexion, cursor)
