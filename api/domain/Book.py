import string

class Book:
    def __init__(self, id: string, name: string, author: string, publish_date: string, quantity) -> None:
        self.id = id
        self.name = name
        self.author = author
        self.publish_date = publish_date
        self.quantity = quantity

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'author': self.author,
            'publish_date': self.publish_date,
            'quantity': self.quantity
        }