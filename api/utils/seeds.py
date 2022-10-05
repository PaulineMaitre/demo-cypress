from domain.Book import Book


b1 = Book("Juste un regard", "juste_un_regard", "Harlan Coben", 8, 2010, 1)
b2 = Book("Ne le dis à personne", "ne_le_dis_a_personne", "Harlan Coben", 1, 2005, 2)
b3 = Book("Dans les bois", "dans_les_bois", "Harlan Coben", 5, 2020, 3)
b4 = Book("Balle de match", "balle_de_match", "Harlan Coben", 3, 2007, 4)
b5 = Book("Disparu à jamais", "disparu_a_jamais", "Harlan Coben", 3, 2003, 5)
b6 = Book("Promets moi", "promets_moi", "Harlan Coben", 7, 1999, 6)
default_books: [Book] = [b1, b2, b3, b4, b5, b6]
