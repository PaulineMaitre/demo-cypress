from db_utils import get_db_connexion, close_connexion


def create_demo_recipes(cursor):
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Juste un regard',
                       'juste_un_regard',
                       'Harlan Coben',
                       8,
                       2005
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Ne le dis à personne',
                       'ne_le_dis_a_personne',
                       'Harlan Coben',
                       1,
                       2000
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Dans les bois',
                       'dans_les_bois',
                       'Harlan Coben',
                       5,
                       1995
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Balle de match',
                       'balle_de_match',
                       'Harlan Coben',
                       3,
                       2006
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Promets moi',
                       'promets_moi',
                       'Harlan Coben',
                       25,
                       2010
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Six ans déjà',
                       'six_ans_deja',
                       'Harlan Coben',
                       3,
                       2010
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Peur noire',
                       'peur_noire',
                       'Harlan Coben',
                       3,
                       2003
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Disparu à jamais',
                       'disparu_a_jamais',
                       'Harlan Coben',
                       14,
                       2005
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       'Mauvaise base',
                       'mauvaise_base',
                       'Harlan Coben',
                       1,
                       2008
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       "Ne t'enfuis plus",
                       'ne_t_enfuis_plus',
                       'Harlan Coben',
                       14,
                       2006
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       "Ne t'éloigne pas",
                       'ne_t_enloigne_pas',
                       'Harlan Coben',
                       14,
                       2012
                   ))
    cursor.execute('INSERT INTO books (title, code_name, author, quantity, publish_date)'
                   'VALUES (%s, %s, %s, %s, %s)',
                   (
                       "Sans un mot",
                       'sans_un_mot',
                       'Harlan Coben',
                       14,
                       2008
                   ))


connexion = get_db_connexion()

# Open a cursor to perform database operations
cursor = connexion.cursor()

# drop table if exists
cursor.execute('DROP TABLE IF EXISTS books;')
# create books table
cursor.execute('CREATE TABLE books ('
               'id serial PRIMARY KEY,'
               'title text NOT NULL,'
               'code_name varchar (50),'
               'author text NOT NULL,'
               'quantity int NOT NULL,'
               'publish_date int);'
               )


# Insert data into the table
create_demo_recipes(cursor)

connexion.commit()
close_connexion(connexion, cursor)
