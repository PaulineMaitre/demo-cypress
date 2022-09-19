from repository.delete import delete


def delete_book(book_id: int) -> None:
    delete(int(book_id))
