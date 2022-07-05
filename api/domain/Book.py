import string


class Book:
    def __init__(self, id: string, title: string, author: string, publish_date: string, quantity) -> None:
        self.id = id
        self.title = title
        self.author = author
        self.publish_date = publish_date
        self.quantity = quantity

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'publish_date': self.publish_date,
            'quantity': self.quantity
        }

def from_json(data):
    return Book(
        data['id'], data['title'], data['author'], data['publish_date'], data['quantity']
    )
