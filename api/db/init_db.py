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
