import psycopg2


def get_db_connexion():
    connexion = psycopg2.connect(
        host="localhost",
        database="books",
        user="postgres",
        password="postgres")
    return connexion


def close_connexion(connexion, cursor):
    cursor.close()
    connexion.close()
