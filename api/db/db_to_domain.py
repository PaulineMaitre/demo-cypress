from domain.Book import Book


def db_to_domain(db_book: tuple) -> Book:
    return Book(
        db_book[1],
        db_book[2],
        db_book[3],
        db_book[4],
        db_book[5],
        db_book[0]
    )

