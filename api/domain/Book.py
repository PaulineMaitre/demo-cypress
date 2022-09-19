import string


class Book:
    def __init__(self, title: string, code_name: string, author: string, quantity: int, publish_date: string, id: int = 0) -> None:
        self.id = id
        self.title = title
        self.code_name = code_name
        self.author = author
        self.quantity = quantity
        self.publish_date = publish_date

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'codeName': self.code_name,
            'author': self.author,
            'publishDate': self.publish_date,
            'quantity': self.quantity
        }


def from_json(data):
    return Book(
        data['title'], data['codeName'], data['author'], data['quantity'], data['publishDate'], data['id']
    )
