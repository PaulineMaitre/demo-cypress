from domain.Book import Book


b1 = Book("1", "Juste un regard", "juste_un_regard", "Harlan Coben", 2010, 8)
b2 = Book("2", "Ne le dis à personne", "", "Harlan Coben", 2010, 1)
b3 = Book("3", "Dans les bois", "", "Harlan Coben", 2010, 5)
b4 = Book("4", "Balle de match", "", "Harlan Coben", 2015, 3)
b5 = Book("5", "Disparu à jamais", "", "Harlan Coben", 1998, 3)
b6 = Book("6", "Promets moi", "", "Harlan Coben", 1997, 3)
default_books: [Book] = [b1, b2, b3, b4, b5, b6]
